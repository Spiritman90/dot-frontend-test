import { useContext } from "react";
import { AppContext } from "../../App";
import "./BallotCard.css";
import { CardProps, IappContext } from "../../types";

const BallotCard = ({ nominee, nomineeImage, category_id }: CardProps) => {
  const { selectHandler, selected } = useContext<IappContext>(AppContext);

  const is_selected = selected[category_id] === nominee;

  const clickHandler = () => {
    selectHandler(category_id, nominee);
  };

  return (
    <div className={`card-bg ${is_selected ? "selected" : ""}`}>
      <div className="card-content">
        <h2 className="card-title">{nominee}</h2>
        <div className="card-photo">
          <img src={nomineeImage} alt="nominee" />
        </div>
        <div className="card-btn">
          <button className="select-btn" onClick={clickHandler}>
            Select Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default BallotCard;
