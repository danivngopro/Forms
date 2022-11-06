import { useState } from "react";
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

  return (
    <input
      type="text"
      className="survey-section-input_question_name"
      value={answer}
      onChange={(e) => {
        setAnswer(e.target.value);
        props.callback(e.target.value, props.index);
      }}
    />
  );
}

export default AnswersSection;
