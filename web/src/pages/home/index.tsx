import "./styles.css";
import { ReactComponent as Logo } from "../../assets/home.svg";
import { ReactComponent as Transitar } from "../../assets/transitar.svg";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import PulseLoader from "react-spinners/PulseLoader";

import "react-toastify/dist/ReactToastify.css";
import api from "../../api";

export default function Home() {
  const { hash } = useParams<Record<string, string | undefined>>();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmepassword, setConfirmepassword] = useState("");
  let history = useHistory();

  useEffect(() => {
    api
      .get(`forgotPassword/${hash}`)
      .then((response) => {
        if (response.status === 404) {
          history.push("/404");
        }
        if (response.status === 401) {
          history.push("/invalid", { message: response.data.message });
        }
      })
      .catch((error) => {
        toast.error("Erro, entre em contato com o administrador do sistema");
      });
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    if (password.trim() === "") {
      toast.info("Preencha o campo Nova Senha");
      setLoading(false);
    }
    if (confirmepassword.trim() === "") {
      toast.info("Preencha o campo Confirme nova senha");
      setLoading(false);
    }
    if (password.trim() !== confirmepassword.trim()) {
      toast.info(
        "O campo nova senha e confirme nova senha precisam ser iguais"
      );
      setLoading(false);
    } else {
      const data = {
        password: password,
        password2: confirmepassword,
        hash: hash,
      };
      api
        .post("forgotPassword/SaveNewPassword", data)
        .then((response) => {
          if (response.status === 400) {
            history.push("/invalid", { message: response.data.message });
          }
          if (response.status === 500) {
            toast.error(
              "Erro! Entre em contato com o administrador do sistema"
            );
          }
          if (response.status === 200) {
            history.push("/success", { message: response.data.message });
          }
        })
        .catch((error) => {
          toast.error("Erro, entre em contato com o administrador do sistema");
        });
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <ToastContainer />

      <form className="form">
        <div className="containerLogo">
          <Logo className="logo" />
        </div>
        <div className="containerTransitar">
          <Transitar />
        </div>
        <div className="containerTitle">
          <h3 className="title">Redefina sua senha!</h3>
        </div>
        <div className="containerInput">
          <input
            className="input"
            placeholder="Nova senha"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            id="password"
            name="password"
          />
          <input
            className="input"
            placeholder="Confirme nova senha"
            type="password"
            value={confirmepassword}
            onChange={(event) => setConfirmepassword(event.target.value)}
            id="confirmepassword"
            name="confirmepassword"
          />
        </div>
        <div className="containerBtn">
          <button
            className="btn"
            type="button"
            disabled={loading}
            onClick={handleSubmit}
          >
            {loading ? (
              <PulseLoader color="#FFF" loading={loading} size={10} />
            ) : (
              "Salvar"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
