import "./SurveySection.scss";
import { iSurvey } from '../../../../../interfaces/iSurvey';

function SurveySection(props: { section: iSurvey }) {
  return (
    <div className="survey-section-container">
      <h1>{props.section.content[0].questionName}</h1>
    </div>
  );
}

export default SurveySection;
