import './AnswersSection.scss'
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { iAnswer } from "../../../../../interfaces/iAnswer";

function AnswersSection(props: {
  answer: iAnswer;
  index: number;
  callback: any;
}) {
  const { t } = useTranslation();
  const [answer, setAnswer] = useState(props.answer.answer);

  if (!answer || answer === "") setAnswer(t("newAnswer") as string);

  useEffect(() => {
    setAnswer(props.answer.answer) 
  }, [props.answer])
  

  return (
    <input
      type="text"
      className="survey-section-answer"
      value={answer}
      onChange={(e) => {
        setAnswer(e.target.value);
        props.callback(e.target.value, props.index);
      }}
    />
  );
}

export default AnswersSection;
