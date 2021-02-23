import "./styles.css";

import { ReactComponent as InvalidImage } from "../../assets/invalid.svg";
import { ReactComponent as Transitar } from "../../assets/transitar.svg";
import { useHistory, useLocation } from "react-router-dom";

type Props = {
  message: String;
};

export default function Invalid() {
  const location = useLocation<Props>();
  let history = useHistory();

  return (
    <div className="container">
      <form className="form">
        <div className="containerLogo">
          <InvalidImage className="logo" />
        </div>
        <div className="containerTransitar">
          <Transitar className="transitar" />
        </div>
        {location.state ? (
          <div className="containerTitle">
            <h1 className="title">{location.state.message}</h1>
          </div>
        ) : (
          history.push("/404")
        )}
      </form>
    </div>
  );
}
