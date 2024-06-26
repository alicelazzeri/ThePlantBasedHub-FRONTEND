import { Spinner } from "react-bootstrap";

const LoadingSpinner = () => {
  return (
    <div className="loadingSpinnerContainer">
      <Spinner className="loadingSpinner" animation="grow" />
    </div>
  );
};

export default LoadingSpinner;
