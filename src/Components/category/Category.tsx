import "./Category.css";
import BallotCard from "../card/BallotCard";
import { ballotProps } from "../../types";

const Category = ({
  category_nomines,
  category_title,
  category_id,
  disable_submit_button,
  isLastCategory,
  submitHandler,
}: ballotProps) => {
  return (
    <section>
      <h3 className="ballot-category">{category_title}</h3>
      <div className="card-container">
        {category_nomines.map((nominee) => (
          <BallotCard
            key={nominee.id}
            nominee={nominee.title}
            nomineeImage={nominee.photoUrL}
            category_id={category_id}
          />
        ))}
        {isLastCategory ? (
          <button
            className="submit-vote"
            disabled={disable_submit_button}
            onClick={submitHandler}
          >
            Submit Vote <br></br> Button
          </button>
        ) : null}
      </div>
    </section>
  );
};

export default Category;
