import { Link, useRouteError } from "react-router-dom";
import Err from "../assets/Err.jpg";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="error-page">
      <img src={Err} alt="Error Image" />
      <h1>Oops!! Page Not found.</h1>
      <h3 className="error-data">{err.data}</h3>
      <h3 className="error-back-home">
        <Link to="/">Back Home</Link>
      </h3>
    </div>
  );
};

export default Error;
