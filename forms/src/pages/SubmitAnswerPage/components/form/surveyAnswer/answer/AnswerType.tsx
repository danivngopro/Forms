import "./AnswerType.scss";
import { Box, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Typography } from "@material-ui/core";
import { useState } from 'react';
import { SelectChangeEvent } from "@mui/material";


interface answerTypeProps {
  questionsAndAnswers: any[];
  handleSubmit: () => any;
}

function AnswerType({ questionsAndAnswers, handleSubmit }: answerTypeProps) {
  const [shortAnswer, setShortAnswer] = useState('');
  const [longAnswer, setLongAnswer] = useState('');
  const [select, setSelect] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value);
  };

  const handleAnswers = (type: string, answers: any[], question: string) => {
    switch (type) {
      case "checkbox":
        return (<div className="answers-div">{
          answers.map((element: any, index: number) => {
            return (
              <FormControlLabel
                key={index}
                value={index}
                control={<Checkbox color="primary" />}
                label={element}
                labelPlacement="start" />
            )
          })


        }</div>)

      case "radio":
        return (<div className="answers-div">{
          <FormControl component="fieldset">
            <RadioGroup aria-label="position" name="answer" defaultValue="top">
              {
                answers.map((element: any, index: number) => {
                  let indexAsStr = `${(index)}`;
                  return (
                    <FormControlLabel
                      key={index}
                      value={indexAsStr}
                      control={<Radio color="primary" />}
                      label={element}
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
          <div className="answers-div">
            <input
              type="text"
              className="survey-answer-type_short_answer"
              maxLength={70}
              value={shortAnswer}
              onChange={(e) => {
                setShortAnswer(e.target.value);
              }}
            />
          </div>
        );

      case "longAnswer":
        return (
          <div className="answers-div">
            <input
              type="text"
              className="survey-answer-type_long_answer"
              maxLength={1000}
              value={longAnswer}
              onChange={(e) => {
                setLongAnswer(e.target.value);
              }}
            />
          </div>

        )

      case "select":
        return (<div className="answers-div">
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
                      < MenuItem value={element} key={index}> {element}</MenuItem>
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
          console.log(questionAndAnswers)
          return <Box className="question-div" key={index}>
            <h3>{questionAndAnswers.question}</h3>
            {handleAnswers(questionAndAnswers.questionType, questionAndAnswers.answers, questionAndAnswers.question)}
          </Box>
        })
      }
    </>
  )


}

export default AnswerType;
