//import { Spinner } from "react-bootstrap";
import spinnerGif from "../assets/images/spinner.gif";

const LoadingSpinner = () => {
  return (
    // <div className="loadingSpinnerContainer">
    //   <Spinner className="loadingSpinner" animation="grow" />
    // </div>
    <div className="spinner-container">
      <img src={spinnerGif} alt="Loading..." className="spinner-image" />
    </div>
  );
};

export default LoadingSpinner;
