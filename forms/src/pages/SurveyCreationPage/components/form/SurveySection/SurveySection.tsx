import "./SurveySection.scss";
import { iQuestion, QuestionType } from "../../../../../interfaces/iQuestion";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { iAnswer } from "../../../../../interfaces/iAnswer";
import AnswersSection from "../AnswerSection/AnswersSection";
import QuestionTypeSelection from "../QuestionTypeSelection/QuestionTypeSelection";

function SurveySection(props: { section: iQuestion }) {
  const { t } = useTranslation();

  const [questionType, setQuestionType] = useState(props.section.questionType);
  const [questionName, setQuestionName] = useState(props.section.questionName);
  const [answers, setAnswers] = useState(props.section.answers);

  const checkQuestionName = () => {
    if (!questionName || questionName === "")
      setQuestionName(t("newQuestion") as string);
  };

  checkQuestionName();

  const handleUpdateAnswersCallBack = (newAnswer: string, index: number) => {
    const tempArr = answers as iAnswer[];
    tempArr[index].answer = newAnswer;
    setAnswers(tempArr);
  };

  const handleQuestionTypeSelectionCallBack = (newType: string) => {
    console.log(newType);
    switch (newType) {
      case t("selectQuestionType.radio"):
        setQuestionType(QuestionType.checkbox);
        break;
      case t("selectQuestionType.longAnswer"):
        setQuestionType(QuestionType.longAnswer);
        break;
      case t("selectQuestionType.select"):
        setQuestionType(QuestionType.select);
        break;
      case t("selectQuestionType.shortAnswer"):
        setQuestionType(QuestionType.shortAnswer);
        break;

      default:
        setQuestionType(QuestionType.radio);
        break;
    }
  };

  return (
    <div className="survey-section-container">
      <div className="survey-section-input_question_type">
        <QuestionTypeSelection callback={handleQuestionTypeSelectionCallBack} />
        <span className="survey-section-input_question_type_text">{t("questionType")}</span>
      </div>

      <input
        type="text"
        className="survey-section-input_question_name"
        value={questionName}
        onChange={(e) => {
          setQuestionName(e.target.value);
        }}
      />

      {answers?.map((answer, i) => {
        return (
          <div key={i}>
            <AnswersSection
              answer={answer}
              index={i}
              callback={handleUpdateAnswersCallBack}
            />
          </div>
        );
      })}
    </div>
  );
}

export default SurveySection;
