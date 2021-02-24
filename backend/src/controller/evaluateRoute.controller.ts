import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { punctuatedRoutesEntity } from "../entity/punctuatedRoutes.entity";
import { UserEntity } from "../entity/user.entity";
import axios from "axios";
import { Address } from "../utils/address";

function roundT(x) {
  const decimal = x % 1;

  if (decimal >= 0.5) {
    const val = 1 - decimal;

    const result = val + x;

    return result;
  } else {
    const result = x - decimal;
    return result;
  }
}

const BASEURL_GOOGLEMAPS =
  "https://maps.googleapis.com/maps/api/directions/json";

class evaluateRouteController {
  public async evaluateRoute(req: Request, res: Response) {
    try {
      const {
        userId,
        ltStart,
        LgSatrt,
        timeStart,
        ltEnd,
        lgEnd,
        timeEnd,
      } = req.body;

      //Remover os nanosegundos
      const _convDataStart = String(timeStart).substr(0, 10);

      const _convDataEnd = String(timeEnd).substr(0, 10);

      var _timeStart = new Date(<any>_convDataStart * 1000);
      var _timeEnd = new Date(<any>_convDataEnd * 1000);

      //Calcula tempo de viagem percorrido e transforma em segundo para confrontar com API
      const _travel_time = (<any>_timeEnd - <any>_timeStart) / 1000;

      // Consulta tempo de viagem na Api Google Maps
      const { data } = await axios.get(BASEURL_GOOGLEMAPS, {
        params: {
          origin: `${ltStart},${LgSatrt}`,
          destination: `${ltEnd},${lgEnd}`,
          key: process.env.KEY_API_GOOGLEMAPS,
        },
      });
      const { routes } = data;
      const { legs } = routes[0];
      const { duration } = legs[0];

      // Calcula margem de erro para o condutor ter mais assertividade
      const _estimated_time = duration.value - duration.value * 0.2;

      // Valida boa Conduta
      if (_travel_time >= _estimated_time) {
        const { distance } = legs[0];

        //convverte metros para KM
        const _distanceKM = distance.value / 1000;

        //Aplicar cálculo 5% com base na Km percorrida
        const _points = _distanceKM - _distanceKM * 0.5;

        //Arredonda pontuação
        const _result = roundT(_points);

        //Carrega Usuario
        const user = await getRepository(UserEntity).findOne({ id: userId });

        const address = {
          ltStart: ltStart,
          LgSatrt: LgSatrt,
          ltEnd: ltEnd,
          lgEnd: lgEnd,
        };
        const { end, start } = await Address(address);

        console.log(end);

        //Insere registro na tabela de “punctuatedRoutes”
        const punctuatedRoutes = {
          id: null,
          date: new Date(Date.now()),
          description: "Rota pontuada por boa conduta!",
          ltStart: ltStart,
          LgSatrt: LgSatrt,
          ltEnd: ltEnd,
          lgEnd: lgEnd,
          value: _result,
          addressStart: start,
          addressEnd: end,
          user,
        };

        await getRepository(punctuatedRoutesEntity)
          .save(punctuatedRoutes)
          .then((data) => {
            res.status(200).send({
              status: true,
              message: "Rota pontuada por boa conduta!",
              data: {
                ltStart: ltStart,
                LgSatrt: LgSatrt,
                ltEnd: ltEnd,
                lgEnd: lgEnd,
                time: _travel_time,
                addressStart: start,
                addressEnd: end,
              },
            });
          })
          .catch((err) => {
            console.log("Catch SAVE punctuated");
            console.log(err);

            res.status(500).send({ status: false, message: "", data: [], err });
          });
      } else {
        // Não Aplica pontução!
        res.status(200).send({
          status: false,
          message: "Rota não pontuado por má conduta!",
          data: [],
        });
      }
    } catch (error) {
      console.log("Catch final");
      console.log(error);
      res.status(500).send({ status: false, message: "", data: [], error });
    }
  }
}

export default new evaluateRouteController();
