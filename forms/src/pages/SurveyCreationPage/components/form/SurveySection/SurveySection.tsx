import "./SurveySection.scss";

function SurveySection(props: { text: string }) {
  return (
    <div className="survey-section-container">
      <h1>{props.text}</h1>
    </div>
  );
}

export default SurveySection;
