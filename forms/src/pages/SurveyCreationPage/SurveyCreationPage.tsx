import { useState } from "react";
import SurveySection from "./components/form/SurveySection/SurveySection";
import SurveyTitle from "./components/form/SurveyTitle/SurveyTitle";
import "./SurveyCreationPage.scss";

function SurveyCreationPage(props: { surveyName: string }) {
  const [sections, setSections] = useState(["a", "b", "c", "d"]);

  return (
    <div className="survey-creation-page-container">
      <h1>hello creation page</h1>
      <div className="survey-creation-page-title-container">
        <SurveyTitle surveyName={ props.surveyName } />
      </div>
      <div className="survey-creation-page-sections">
        {sections.map((section, i) => (
          <div key={i}>
            <SurveySection text={section} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SurveyCreationPage;
