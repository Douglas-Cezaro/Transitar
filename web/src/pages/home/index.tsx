import "./styles.css";
import { ReactComponent as Logo } from "../../assets/home.svg";
import { ReactComponent as Transitar } from "../../assets/transitar.svg";

export default function Home() {
  return (
    <div className="container">
      <form className="form">
        <div className="containerLogo">
          <Logo className="logo" />
        </div>
        <div className="containerTransitar">
          <Transitar className="transitar" />
        </div>
        <div className="containerTitle">
          <h3 className="title">Redefina sua senha!</h3>
        </div>
        <div className="containerInput">
          <input
            className="input"
            placeholder="Nova senha"
            type="password"
            id="password"
            name="password"
          />
          <input
            className="input"
            placeholder="Confirme nova senha"
            type="password"
            id="confirmepassword"
            name="confirmepassword"
          />
        </div>
        <div className="containerBtn">
          <button className="btn" type="submit">
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}
