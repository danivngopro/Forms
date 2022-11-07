import "./SurveySection.scss";
import { iQuestion, QuestionType } from "../../../../../interfaces/iQuestion";
import { useTranslation } from "react-i18next";
import { ChangeEvent, useEffect, useState } from "react";
import { iAnswer } from "../../../../../interfaces/iAnswer";
import AnswersSection from "../AnswerSection/AnswersSection";
import QuestionTypeSelection from "../QuestionTypeSelection/QuestionTypeSelection";

function SurveySection(props: {
  section: iQuestion;
  handleNewAnswers: any;
  handleNewQuestionName: any;
  handleNewQuestionType: any;
  index: number;
}) {
  const { t } = useTranslation();

  const [questionType, setQuestionType] = useState(props.section.questionType);
  const [questionName, setQuestionName] = useState(props.section.questionName);
  const [answers, setAnswers] = useState(props.section.answers);

  const checkQuestionName = () => {
    if (!questionName || questionName === "")
      setQuestionName(t("newQuestion") as string);
  };

  const handleUpdateAnswersCallBack = (newAnswer: string, index: number) => {
    const tempArr = answers as iAnswer[];
    tempArr[index].answer = newAnswer;
    setAnswers(tempArr);
    props.handleNewAnswers(answers, props.index);
  };

  const handleQuestionTypeSelectionCallBack = async (newType: QuestionType) => {
    await setQuestionType(newType);
    props.handleNewQuestionType(newType, props.index);
  };

  const handleQuestionNameCallBack = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestionName(e.target.value);
    props.handleNewQuestionName(questionName, props.index);
  };

  useEffect(() => {
    setQuestionName(props.section.questionName);
    setQuestionType(props.section.questionType);
    setAnswers(props.section.answers);
    checkQuestionName();
  }, [props.section]);

  return (
    <div className="survey-section-container">
      <div className="survey-section-input_question_type">
        <QuestionTypeSelection
          selected={questionType}
          callback={handleQuestionTypeSelectionCallBack}
        />
        <span className="survey-section-input_question_type_text">
          {t("questionType")}
        </span>
      </div>

      <input
        type="text"
        className="survey-section-input_question_name"
        value={questionName}
        onChange={(e) => {
          handleQuestionNameCallBack(e);
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
