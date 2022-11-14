import "./SingleAnswer.scss";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { iAnswer } from "../../../../../../interfaces/iAnswer";
import Checkbox from "@mui/material/Checkbox";

function CheckBoxAnswer(props: {
  answer: iAnswer;
  index: number;
  handleUpdateAnswersCallBack: any;
}) {
  const { t } = useTranslation();
  const [answer, setAnswer] = useState(props.answer.answer);

  if (!answer || answer === "") setAnswer(t("newAnswer") as string);

  useEffect(() => {
    setAnswer(props.answer.answer);
  }, [props.answer]);

  return (
    <div className="check_box_answer-checkbox-container">
      <div className="check_box_answer_wrapper">
        <input
          type="text"
          className="survey-section-answer"
          value={answer}
          onChange={(e) => {
            setAnswer(e.target.value);
            props.handleUpdateAnswersCallBack(e.target.value, props.index);
          }}
        />
      </div>
      <Checkbox disabled />
    </div>
  );
}

export default CheckBoxAnswer;
