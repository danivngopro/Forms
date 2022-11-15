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
      "question": "שאלה עם יותר מתשובה אחת אפשרית",
      "answers": ['אורי', 'דניאל', 'שי'],
      "questionType": "checkbox"
    },
    {
      "question": "שאלה עם תשובה קצרה",
      "answers": ['אבא'],
      "questionType": "shortAnswer"
    },
    {
      "question": "שאלה עם תשובה אחת אפשית",
      "answers": ['בית', 'דלת', 'שולחן'],
      "questionType": "radio"
    },
    {
      "question": "שאלה עם תשובה ארוכה",
      "answers": ['אאאאאאאאאא'],
      "questionType": "longAnswer"
    },
    {
      "question": "לבחור תשובה",
      "answers": ['a', 'b', 'c'],
      "questionType": "select"
    },
    {
      "question": "כותרת",
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

