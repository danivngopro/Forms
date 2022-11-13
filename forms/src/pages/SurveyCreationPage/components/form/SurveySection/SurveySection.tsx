import "./SurveySection.scss";
import { iQuestion, QuestionType } from "../../../../../interfaces/iQuestion";
import { useTranslation } from "react-i18next";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
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

  const handleUpdateAnswersCallBack = useCallback((newAnswer: string, index: number) => {
    const tempArr = answers as iAnswer[];
    tempArr[index].answer = newAnswer;
    setAnswers(tempArr);
    props.handleNewAnswers(answers, props.index);
  }, [answers, props]);

  const handleQuestionTypeSelectionCallBack = useCallback(async (newType: QuestionType) => {
    await setQuestionType(newType);
    props.handleNewQuestionType(newType, props.index);
  }, [props]);

  const handleQuestionNameCallBack = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setQuestionName(e.target.value);
    props.handleNewQuestionName(questionName, props.index);
  }, [props, questionName]);

  useEffect(() => {
    const checkQuestionName = () => {
      if (!questionName || questionName === "")
        setQuestionName(t("newQuestion") as string);
    };

    console.log(123)
    setQuestionName(props.section.questionName);
    setQuestionType(props.section.questionType);
    setAnswers(props.section.answers);
    checkQuestionName();
  }, [props.section.answers, props.section.questionName, props.section.questionType, questionName, t]);

  

  return (
    <div className="survey-section-container">
      <div className="survey-section-input-type-question-name-container">
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
      </div>
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
