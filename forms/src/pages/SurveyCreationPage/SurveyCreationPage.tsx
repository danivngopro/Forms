import { useState } from "react";
import SurveySection from "./components/form/SurveySection";
import SurveyTitle from "./components/form/SurveyTitle";
import "./SurveyCreationPage.scss";

function SurveyCreationPage() {

  const [sections, setSections] = useState(['a', 'b', 'c']);

  return (
    <div className="survey-creation-page-container">
      <h1>hello creation page</h1>
      <div className="survey-creation-page-title-container">
        <SurveyTitle />
      </div>
      <div className="survey-creation-page-sections">
        {/* {sections.map((section, i) => <SurveySection section/>)} */}
      </div>
    </div>
  );
}

export default SurveyCreationPage;
