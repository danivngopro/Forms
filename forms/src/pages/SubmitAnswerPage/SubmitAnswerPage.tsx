//import DropDown from "../../components/form/DropDown";
//import SurveySection from "./components/form/SurveySection/SurveySection";
//import SurveyTitle from "./components/form/SurveyTitle/SurveyTitle";
import { useState } from "react";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { isPropertySignature } from "typescript";
import AnswerType from "./components/form/surveyAnswer/answer/AnswerType"


function SurveyCreationPage() {

  const [sections, setSections] = React.useState([
    {
      "question": "what",
      "answers": ['אורי', 'דניאל', 'שי'],
      "questionType": "checkbox"
    },
    {
      "question": "Gujarat",
      "answers": ['אבא'],
      "questionType": "shortAnswer"
    },
    {
      "question": "Karnataka",
      "answers": ['בית', 'דלת', 'שולחן'],
      "questionType": "radio"
    },
    {
      "question": "daniel haim ventura",
      "answers": ['בית', 'דלת', 'שולחן'],
      "questionType": "longAnswer"
    }
  ]);

  return (
    <div className="survey-creation-page-container" >
      <AnswerType questionsAndAnswers={sections} handleSubmit={setSections as any} />
    </div>
  );
}

export default SurveyCreationPage;

