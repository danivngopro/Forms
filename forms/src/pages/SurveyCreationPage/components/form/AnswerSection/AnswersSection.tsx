import "./AnswersSection.scss";
import { iAnswer } from "../../../../../interfaces/iAnswer";
import { QuestionType } from "../../../../../interfaces/iQuestion";
import CheckBoxAnswer from "./AnswerType/CheckBoxAnswer";
import LongAnswer from "./AnswerType/LongAnswer";
import RadioAnswer from "./AnswerType/RadioAnswer";
import SelectAnswer from "./AnswerType/SelectAnswer";
import ShortAnswer from "./AnswerType/ShortAnswer";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

function AnswersSection(props: {
  answers: iAnswer[];
  questionType: QuestionType;
  handleUpdateAnswersCallBack: any;
  handleRemoveAnswer: any;
}) {
  const detectAnswer = () => {
    let ans = <div></div>;
    switch (props.questionType) {
      case QuestionType.checkbox:
        ans = (
          <div>
            {props.answers?.map((answer, i) => {
              return (
                <div className="answers-section-answers-container" key={i}>
                  <div className="answers-section-answers-X-button" onClick={() => {props.handleRemoveAnswer(i)}}><CloseOutlinedIcon /></div>
                  <CheckBoxAnswer
                    answer={answer}
                    index={i}
                    handleUpdateAnswersCallBack={
                      props.handleUpdateAnswersCallBack
                    }
                  />
                </div>
              );
            })}
          </div>
        );
        break;
      case QuestionType.longAnswer:
        ans = (
          <div>
            <LongAnswer
              answer={props.answers[0]}
              handleUpdateAnswersCallBack={props.handleUpdateAnswersCallBack}
            />
          </div>
        );
        break;
      case QuestionType.radio:
        ans = (
          <div>
            {props.answers?.map((answer, i) => {
              return (
                <div className="answers-section-answers-container" key={i}>
                  <div className="answers-section-answers-X-button" onClick={() => {props.handleRemoveAnswer(i)}}><CloseOutlinedIcon /></div>
                  <RadioAnswer
                    answer={answer}
                    index={i}
                    handleUpdateAnswersCallBack={
                      props.handleUpdateAnswersCallBack
                    }
                  />
                </div>
              );
            })}
          </div>
        );
        break;

      case QuestionType.select:
        ans = (
          <div>
            {props.answers?.map((answer, i) => {
              return (
                <div className="answers-section-answers-container" key={i}>
                  <div className="answers-section-answers-X-button" onClick={() => {props.handleRemoveAnswer(i)}}><CloseOutlinedIcon /></div>
                  <SelectAnswer
                    answer={answer}
                    index={i}
                    handleUpdateAnswersCallBack={
                      props.handleUpdateAnswersCallBack
                    }
                  />
                </div>
              );
            })}
          </div>
        );
        break;

      case QuestionType.shortAnswer:
        ans = (
          <div>
            <ShortAnswer
              answer={props.answers[0]}
              handleUpdateAnswersCallBack={props.handleUpdateAnswersCallBack}
            />
          </div>
        );
        break;

      default:
        break;
    }

    return ans;
  };

  return <div>{detectAnswer()}</div>;
}

export default AnswersSection;
