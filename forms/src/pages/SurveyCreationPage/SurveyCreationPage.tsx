import { useState } from "react";
import DropDown from "../../components/form/DropDown";
import SurveySection from "./components/form/SurveySection/SurveySection";
import SurveyTitle from "./components/form/SurveyTitle/SurveyTitle";
import "./SurveyCreationPage.scss";

function SurveyCreationPage() {
  const [sections, setSections] = useState(["a", "b", "c"]);

  return (
    <div className="survey-creation-page-container">
      <h1>hello creation page</h1>
      <div className="survey-creation-page-title-container">
        <SurveyTitle />
      </div>
      <div className="survey-creation-page-sections">
        {sections.map((section, i) => (
          <div key={i}>
            <SurveySection text={section} />
          </div>
        ))}
      </div>
      <DropDown />
    </div>
  );
}

export default SurveyCreationPage;
