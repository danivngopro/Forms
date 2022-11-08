//import DropDown from "../../components/form/DropDown";
//import SurveySection from "./components/form/SurveySection/SurveySection";
//import SurveyTitle from "./components/form/SurveyTitle/SurveyTitle";
import { useState } from "react";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { isPropertySignature } from "typescript";
import AnswerType from "./components/form/surveyAnswer/answer/AnswerType"


function SurveyCreationPage() {

    const [example, setExample] = useState([1,2,3]);

    const [sections, setSections] = React.useState([
        {
            "question": "what",
            "answers": ['אורי', 'דניאל', 'שי'],
            "questionType": "checkbox"
        },
        {
            "question": "Gujarat",
            "answers": ['אבא', 'אמא', 'שקד'],
            "questionType": "shortAnswer"
        },
        {
            "question": "Karnataka",
            "answers": ['בית', 'דלת', 'שולחן'],
            "questionType": "radio"
        }
    ]);
    //const [sections, setSections] = useState(["a", "b", "c"]);
  
    return (
      <div className="survey-creation-page-container" >
        <AnswerType questionsAndAnswers={sections} handleSubmit={setSections as any}/>
      </div>
    );
  }

  export default SurveyCreationPage;

  {/* <h1>hello creation page</h1>
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
        <DropDown /> */}
