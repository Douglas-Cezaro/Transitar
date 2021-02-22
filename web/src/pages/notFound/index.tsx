import "./styles.css";

import { ReactComponent as NotFoundImage } from "../../assets/404.svg";
import { ReactComponent as Transitar } from "../../assets/transitar.svg";

export default function NotFound() {
  return (
    <div className="container">
      <form className="form">
        <div className="containerLogo">
          <NotFoundImage className="logo" />
        </div>
        <div className="containerTransitar">
          <Transitar className="transitar" />
        </div>
        <div className="containerTitle">
          <h1 className="title">Link Inválido</h1>
        </div>
      </form>
    </div>
  );
}
