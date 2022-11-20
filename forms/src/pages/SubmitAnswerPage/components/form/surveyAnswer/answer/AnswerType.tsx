import "./AnswerType.scss";
import { Box, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextareaAutosize } from "@material-ui/core";
import { useEffect, useState } from 'react';
import { SelectChangeEvent } from "@mui/material";
import ReactDOM from "react-dom";



interface answerTypeProps {
  questionsAndAnswers: any[];
  handleSubmit: () => any;
}

function AnswerType({ questionsAndAnswers, handleSubmit }: answerTypeProps) {
  const [shortAnswer, setShortAnswer] = useState('');
  const [longAnswer, setLongAnswer] = useState('');
  const [select, setSelect] = useState<string>('');
  const [checkbox, setCheckbox] = useState('');
  const [radio, setRadio] = useState('');
  const [survey, setSurvey] = useState([]);




  setSelect(select => select + "p")


  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value);
  };


  useEffect(() => {
    
  }, [shortAnswer, longAnswer, select, checkbox, radio])


  const handleAnswers = (type: string, answers: any) => {
    switch (type) {
      case "checkbox":
        return (<div className="survey-answer-type_answers_div">{
          answers.map((element: any, index: number) => {
            return (
              <FormControlLabel
                key={index}
                value={checkbox}
                onClick={(event) => {
                  setCheckbox((event.target as HTMLInputElement).value);
                }}
                control={<Checkbox color="primary" />}
                label={element.answer}
                labelPlacement="start" />
            )
          })


        }</div>)

      case "radio":
        return (<div className="survey-answer-type_answers_div">{
          <FormControl>
            <RadioGroup aria-label="position" name="answer" defaultValue="top">
              {
                answers.map((element: any, index: number) => {
                  return (
                    <FormControlLabel
                      key={index}
                      value={radio}
                      onClick={(event) => {
                        setRadio((event.target as HTMLInputElement).value);
                      }}
                      control={<Radio color="primary" />}
                      label={element.answer}
                      labelPlacement="start"
                    />

                  )
                })
              }

            </RadioGroup>
          </FormControl>

        }</div>)


      case "shortAnswer":
        return (
          <div className="survey-answer-type_answers_div" dir="rtl">
            <TextareaAutosize
              className="survey-answer-type_short_answer"
              maxLength={70}
              minRows={1}
              value={shortAnswer}
              onChange={(e) => {
                setShortAnswer(e.target.value);
              }}
            />
          </div>
        );

      case "longAnswer":
        return (
          <div className="survey-answer-type_answers_div" dir="rtl">
            <TextareaAutosize
              className="survey-answer-type_long_answer"
              maxLength={1000}
              minRows={4}
              value={longAnswer}
              onChange={(e) => {
                setLongAnswer(e.target.value);
              }}
            />
          </div>

        )

      case "select":
        return (<div className="survey-answer-type_answers_div">
          {
            <FormControl variant="standard">
              <InputLabel id="demo-simple-select-standard-label">Select</InputLabel>
              <Select
                className="survey-answer-type_select_answer"
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={select}
                onChange={(e) => { handleChange(e as SelectChangeEvent) }}
                label="select"
              >
                {
                  answers.map((element: any, index: number) => {
                    return (
                      < MenuItem value={element.answer} key={index}> {element.answer} </MenuItem>
                    )
                  })
                }
              </Select>
            </FormControl>
          } </div >)
      default:
        return <></>;
    }
  }





  return (
    <>
      {
        questionsAndAnswers.map((questionAndAnswers, index) => {
          return (
            <div key={index}>
              {questionAndAnswers.content.map((questions: any, i: number) => {
                return <Box className="survey-answer-type_questions_div" key={`surveyבםמדא${i}`}>
                  <h3>{questions.questionName}</h3>
                  {handleAnswers(questions.questionType, questions.answers)}
                </Box>
              })}
            </div>
          )
        })
      }
    </>
  )


}

export default AnswerType;