import "./styles.css";

import { ReactComponent as InvalidImage } from "../../assets/invalid.svg";
import { ReactComponent as Transitar } from "../../assets/transitar.svg";

export default function Invalid() {
  return (
    <div className="container">
      <form className="form">
        <div className="containerLogo">
          <InvalidImage className="logo" />
        </div>
        <div className="containerTransitar">
          <Transitar className="transitar" />
        </div>
        <div className="containerTitle">
          <h1 className="title">Código de recuperção invalido!</h1>
        </div>
      </form>
    </div>
  );
}
