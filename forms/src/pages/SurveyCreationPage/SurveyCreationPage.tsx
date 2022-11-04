import { useState } from "react";
import SurveySection from "./components/form/SurveySection/SurveySection";
import SurveyTitle from "./components/form/SurveyTitle/SurveyTitle";
import "./SurveyCreationPage.scss";
import plus from "../../assets/plus.svg";

function SurveyCreationPage(props: { surveyName: string }) {
  const [sections, setSections] = useState(["a", "b", "c", "d"]);

  const addSection = () => {
    setSections([...sections, "e"]);
  }

  return (
    <div className="survey-creation-page-container">
      <div className="survey-creation-page-container-without-plus_svg">
        <h1>hello creation page</h1>
        <div className="survey-creation-page-title-container">
          <SurveyTitle surveyName={props.surveyName} />
        </div>
        <div className="survey-creation-page-section-container">
          {sections.map((section, i) => (
            <div key={i}>
              <SurveySection text={section} />
            </div>
          ))}
        </div>
        <div className="survey-creation-page-plus-container" onClick={() => addSection()}>
          <img
            src={plus}
            alt="add survey"
            className="survey-creation-page-plus_svg"
          />
        </div>
      </div>
    </div>
  );
}

export default SurveyCreationPage;
