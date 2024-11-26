import { Button } from "react-bootstrap";
import "./Button.css";

const CustomButton = (props) => {
  return (
    <Button variant="outline-light" className="login-btn ms-3">
      {props.buttonText}
    </Button>
  );
};

export default CustomButton;
