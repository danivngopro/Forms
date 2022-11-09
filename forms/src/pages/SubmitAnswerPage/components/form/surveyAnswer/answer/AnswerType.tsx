import "./AnswerType.scss";
import { Box, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Typography } from "@material-ui/core";
import { useState } from 'react';


interface answerTypeProps {
  questionsAndAnswers: any[];
  handleSubmit: () => any;
}

function AnswerType({ questionsAndAnswers, handleSubmit }: answerTypeProps) {
  const [shortAnswer, setShortAnswer] = useState('');
  const [longAnswer, setLongAnswer] = useState('');
  const [select, setSelect] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelect(event.target.value);
    console.log(event.target.value);
  };

  const handleAnswers = (type: string, answers: any[]) => {
    switch (type) {
      case "checkbox":
        return (<div>{
          answers.map((element: any, index: number) => {
            return (
              <FormControlLabel
                value={index}
                control={<Checkbox color="primary" />}
                label={element}
                labelPlacement="start" />
            )
          })


        }</div>)

      case "radio":
        return (<div>{
          <FormControl component="fieldset">
            <RadioGroup row aria-label="position" name="answer" defaultValue="top">
              {
                answers.map((element: any, index: number) => {
                  let indexAsStr = `${(index)}`;
                  return (
                    <FormControlLabel
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
          <input
            type="text"
            className="survey-section-input_question_name"
            maxLength={70}
            value={shortAnswer}
            onChange={(e) => {
              setShortAnswer(e.target.value);
            }}
          />
        );

      case "longAnswer":
        return (
          <input
            type="text"
            className="survey-section-input_question_name"
            maxLength={1000}
            value={longAnswer}
            onChange={(e) => {
              setLongAnswer(e.target.value);
            }}
          />
        )

      case "select":
        return (<div>
          {
            answers.map((element: any, index: number) => {
              return (
                <FormControl variant="standard">
                  <InputLabel id="demo-simple-select-standard-label">Select</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={select}
                    onChange={handleChange}
                    label={element}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={element}>{element}</MenuItem>
                  </Select>
                </FormControl>
              )
            })
          }
        </div>


        )
      default:
        return <></>;
    }
  }

  return (
    <>
      {
        questionsAndAnswers.map((questionAndAnswers) => {
          console.log(questionAndAnswers)
          return <Box>
            <Typography>{questionAndAnswers.question}</Typography>
            {handleAnswers(questionAndAnswers.questionType, questionAndAnswers.answers)}
          </Box>
        })
      }
    </>
  )


}

export default AnswerType;
