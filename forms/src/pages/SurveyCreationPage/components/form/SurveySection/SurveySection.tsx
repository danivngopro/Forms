import "./SurveySection.scss";
import { iQuestion, QuestionType } from "../../../../../interfaces/iQuestion";
import { useTranslation } from "react-i18next";
import { ChangeEvent, useCallback, useContext, useEffect, useState } from "react";
import { iAnswer } from "../../../../../interfaces/iAnswer";
import AnswersSection from "../AnswerSection/AnswersSection";
import QuestionTypeSelection from "../QuestionTypeSelection/QuestionTypeSelection";
import Button from "@mui/material/Button";
import { sectionsContext } from "../../../../../context/sectionsContext";

function SurveySection(props: {
  section: iQuestion;
  handleNewAnswers: any;
  handleNewQuestionName: any;
  handleNewQuestionType: any;
  handleAddAnswer: any;
  handleRemoveAnswer: any;
  index: number;
}) {
  const sections = useContext(sectionsContext);
  console.log(sections)

  const { t } = useTranslation();

  const [questionType, setQuestionType] = useState(props.section.questionType);
  const [questionName, setQuestionName] = useState(props.section.questionName);
  const [answers, setAnswers] = useState(props.section.answers);

  const handleUpdateAnswersCallBack = useCallback(
    (newAnswer: string, index: number) => {
      const tempArr = answers as iAnswer[];
      tempArr[index].answer = newAnswer;
      setAnswers(tempArr);
      // props.handleNewAnswers(answers, props.index);
      sections[props.index].answers = answers;
    },
    [answers, props]
  );

  const handleQuestionTypeSelectionCallBack = useCallback(
    async (newType: QuestionType) => {
      await setQuestionType(newType);
      // props.handleNewQuestionType(newType, props.index);
      sections[props.index].questionType = newType;
    },
    [props]
  );

  const handleQuestionNameCallBack = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestionName(e.target.value);
    // props.handleNewQuestionName(questionName, props.index);
    sections[props.index].questionName = questionName;
  };

  const handleAddAnswer = () => {
    props.handleAddAnswer(props.index);
    setAnswers([...(answers as iAnswer[]), { answer: "" }]);
  };

  const handleRemoveAnswer = (answerIndex: number) => {
    props.handleRemoveAnswer(answerIndex, props.index);
    setAnswers([
      ...(answers as iAnswer[]).slice(0, answerIndex),
      ...(answers as iAnswer[]).slice(answerIndex + 1),
    ]);
  };

  useEffect(() => {
    const checkQuestionName = () => {
      if (!questionName || questionName === "")
        setQuestionName(t("newQuestion") as string);
    };

    setQuestionName(props.section.questionName);
    setQuestionType(props.section.questionType);
    setAnswers(props.section.answers);
    checkQuestionName();
  }, [
    props.section.answers,
    props.section.questionName,
    props.section.questionType,
    questionName,
    t,
  ]);

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
            console.log("123");
          }}
        />
      </div>
      <AnswersSection
        answers={answers as iAnswer[]}
        questionType={questionType}
        handleUpdateAnswersCallBack={handleUpdateAnswersCallBack}
        handleRemoveAnswer={handleRemoveAnswer}
      />
      <div className="survey-section_add_answer">
        <Button variant="outlined" onClick={handleAddAnswer}>
          {t("addAnswer")}
        </Button>
      </div>
    </div>
  );
}

export default SurveySection;
