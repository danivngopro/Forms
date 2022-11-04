import "./SurveySection.scss";
import { iQuestion } from "../../../../../interfaces/iQuestion";

function SurveySection(props: { section: iQuestion }) {
  return (
    <div className="survey-section-container">
      <h1>{props.section.questionName}</h1>
    </div>
  );
}

export default SurveySection;
