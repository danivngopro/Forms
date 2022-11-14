import { iAnswer } from "../../../../../interfaces/iAnswer";
import { QuestionType } from "../../../../../interfaces/iQuestion";
import CheckBoxAnswer from "./AnswerType/CheckBoxAnswer";
import LongAnswer from "./AnswerType/LongAnswer";
import RadioAnswer from "./AnswerType/RadioAnswer";
import SelectAnswer from "./AnswerType/SelectAnswer";
import ShortAnswer from "./AnswerType/ShortAnswer";

function AnswersSection(props: {
  answers: iAnswer[];
  questionType: QuestionType;
  handleUpdateAnswersCallBack: any;
}) {
  const detectAnswer = () => {
    let ans = <div></div>;
    switch (props.questionType) {
      case QuestionType.checkbox:
        console.log(1);
        ans = (
          <div>
            {props.answers?.map((answer, i) => {
              return (
                <div key={i}>
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
                <div key={i}>
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
                <div key={i}>
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
