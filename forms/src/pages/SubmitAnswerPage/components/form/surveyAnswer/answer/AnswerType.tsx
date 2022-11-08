import "./AnswerType.scss";
import SurveyCreationPage from "../../../../SubmitAnswerPage";
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, Typography } from "@material-ui/core";
import React, { useState } from 'react';
import { render } from "react-dom";


interface answerTypeProps {
  questionsAndAnswers: any[];
  handleSubmit: () => any;
}

function AnswerType({ questionsAndAnswers, handleSubmit }: answerTypeProps) {

  const createRadio = (answers: any[]) => {
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

  const handleAnswers = (type: string, answers: any[]) => {
    console.log({ type, answers })
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
      default:
        return <></>;
    }
  }
  console.log({ questionsAndAnswers })

  return (
    // <div className="daniel"> {
    //   props.array[0].map((value: any, i: number) => {
    //     <h1 style={{backgroundColor:'black'}}> 7gfhhchg</h1>
    //     switch (value.questionType) {
    //       case "checkbox":
    //         return (value.answers.map((element: any, index: number) => {
    //           return (
    //             <div className="uri" key={i}>
    //               <FormGroup row>
    //                 {/* <FormControlLabel
    //                   control={<Checkbox checked={false} onChange={handleChange} name={element} className="cg" />}
    //                   label={element}
    //                 /> */}

    //                 <FormControlLabel
    //                      value={i}
    //                      control={<Checkbox color="primary" />}
    //                      label={element}
    //                      labelPlacement="start" />
    //               </FormGroup>
    //             </div>
    //           )
    //         }))

    //       default:
    //         break;
    //     }

    //     // if(props.array[2] === "checkbox") {
    //     //   return <h1 key={i}>my name is may</h1>
    //     // } else if(props === 2) return <h3 key={i}>hello fk every1</h3>
    //     // else {
    //     //   return <span key={i}>;ldfjg;dljgflfdg</span>
    //     // }

    //   })
    // }
    // </div>
    <>
      {
        questionsAndAnswers.map((questionAndAnswers) => {
          console.log(questionAndAnswers)
          return <Box>
            <Typography>{questionAndAnswers.question}</Typography>
            {/* <Typography>{questionAndAnswers.questionType}</Typography>
        {
          questionAndAnswers.answers.map((answer:string)=><Typography>{answer}</Typography>)
        } */}
            {handleAnswers(questionAndAnswers.questionType, questionAndAnswers.answers)}
          </Box>
        })
      }
    </>
  )


}

export default AnswerType;
{/* <FormControl>
  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value={indexAsStr} control={<Radio />} label={element} />
  </RadioGroup>
</FormControl> */}