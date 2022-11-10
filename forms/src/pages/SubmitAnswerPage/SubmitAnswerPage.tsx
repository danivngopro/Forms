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
      "question": "checkbox question",
      "answers": ['אורי', 'דניאל', 'שי'],
      "questionType": "checkbox"
    },
    {
      "question": "shortAnswer question",
      "answers": ['אבא'],
      "questionType": "shortAnswer"
    },
    {
      "question": "radio question",
      "answers": ['בית', 'דלת', 'שולחן'],
      "questionType": "radio"
    },
    {
      "question": "longAnswer question",
      "answers": ['אאאאאאאאאא'],
      "questionType": "longAnswer"
    },
    {
      "question": "select question",
      "answers": ['a', 'b', 'c'],
      "questionType": "select"
    },
    {
      "question": "titel question",
      "answers": ['Uri Goldenberg'],
      "questionType": "title"
    }
  ]);

  return (
    <div className="survey-creation-page-container" >
      <AnswerType questionsAndAnswers={sections} handleSubmit={setSections as any} />
    </div>
  );
}

export default SurveyCreationPage;

