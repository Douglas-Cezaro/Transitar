import "./styles.css";

import { ReactComponent as SuccessImage } from "../../assets/success.svg";
import { ReactComponent as Transitar } from "../../assets/transitar.svg";

export default function Success() {
  return (
    <div className="container">
      <form className="form">
        <div className="containerLogo">
          <SuccessImage className="logo" />
        </div>
        <div className="containerTransitar">
          <Transitar className="transitar" />
        </div>
        <div className="containerTitle">
          <h1 className="title">Senha atualizada com sucesso!</h1>
        </div>
      </form>
    </div>
  );
}
