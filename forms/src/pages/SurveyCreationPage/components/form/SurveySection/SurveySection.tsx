import "./SurveySection.scss";
import { iQuestion, QuestionType } from "../../../../../interfaces/iQuestion";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { iAnswer } from "../../../../../interfaces/iAnswer";
import AnswersSection from "../AnswerSection/AnswersSection";
import QuestionTypeSelection from "../QuestionTypeSelection/QuestionTypeSelection";

function SurveySection(props: { section: iQuestion, updateSectionCallBack: any }) {
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
    const newSection = props.section;
    newSection.answers = answers;
    props.updateSectionCallBack(newSection)
  };

  const handleQuestionTypeSelectionCallBack = (newType: string) => {
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

  useEffect(() => {
    setQuestionName(props.section.questionName);
    setQuestionType(props.section.questionType);
    setAnswers(props.section.answers);
    checkQuestionName();
  }, [props.section]);

  useEffect(() => {
    const newSection = props.section;
    newSection.questionName = questionName;
    newSection.questionType = questionType;
    props.updateSectionCallBack(newSection)
    
  }, [questionType,questionName])
  

  return (
    <div className="survey-section-container">
      <div className="survey-section-input_question_type">
        <QuestionTypeSelection selected={questionType} callback={handleQuestionTypeSelectionCallBack} />
        <span className="survey-section-input_question_type_text">
          {t("questionType")}
        </span>
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
