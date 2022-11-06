import "./AnswerType.scss";
import SurveyCreationPage from "../../../../SubmitAnswerPage";
import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from "@material-ui/core";
import React, { useState } from 'react';


interface answerTypeProps {
  questionsAndAnswers: any[];
  handleSubmit: () => any;
}

export function AnswerType({questionsAndAnswers, handleSubmit} :answerTypeProps ) {


  const handleAnswers=(type:string, answers:any[]) =>{
    console.log({type,answers})
      switch (type) {
        case "checkbox":
        return(<>{
        answers.map((element: any, index: number) => {
              return (
                    <FormControlLabel
                         value={index}
                         control={<Checkbox color="primary" />}
                         label={element}
                         labelPlacement="start" />
              )
            })
        

          }</>)
        
        default:
         return<></>;
     }
    }
  console.log({questionsAndAnswers})

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
    questionsAndAnswers.map((questionAndAnswers)=>{
      console.log(questionAndAnswers)
      return <Box>
        <Typography>{questionAndAnswers.question}</Typography>
        {/* <Typography>{questionAndAnswers.questionType}</Typography>
        {
          questionAndAnswers.answers.map((answer:string)=><Typography>{answer}</Typography>)
        } */}
        {handleAnswers(questionAndAnswers.questionType,questionAndAnswers.answers)}
      </Box>})
   }
    </>
  )


}

