import "./Modal.css";
import { Iselected } from "../../types";

type modalProps = {
  selected: Iselected;
  handlerClick: () => void;
};

const Modal = ({ selected, handlerClick }: modalProps) => {
  const data = Object.keys(selected) as Array<keyof typeof selected>;
  return (
    <div className="modal-backdrop">
      <section className="modal">
        <h4 className="modal-title">VOTE SUCCESSFUL!</h4>

        {data.map((key) => (
          <p key={key}>
            {key} - <span>{selected[key]}</span>
          </p>
        ))}

        <div className="close-button">
          <button className="close-btn" onClick={handlerClick}>
            close
          </button>
        </div>
      </section>
    </div>
  );
};

export default Modal;
