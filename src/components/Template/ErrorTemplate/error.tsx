import { Link } from "react-router-dom";
import img from "../../../assets/images/not-found.svg";
import "./error.modules.scss";

function ErrorTemplate() {
  return (
    <div className="error">
      <div className="error-container">
        <img src={img} alt="not" />
        <h3>Ohh! page not found</h3>
        <p>We cant seems to find the page your are looking for</p>

        <Link to="/login">Back Login</Link>
      </div>
    </div>
  );
}

export default ErrorTemplate;
