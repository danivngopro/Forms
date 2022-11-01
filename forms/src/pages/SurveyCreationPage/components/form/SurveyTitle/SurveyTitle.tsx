import "./SurveyTitle.scss";
import { useState } from "react";
import TextField from "@mui/material/TextField/TextField";

function SurveyTitle(props: { surveyName: string }) {
  const [surveyName, setSurveyName] = useState(props.surveyName);

  if (surveyName === "" || !surveyName) setSurveyName("סקר חדש");

  return (
    <div className="survey-title-container">
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <h1>{surveyName}</h1>
      <h3>תיאור הסקר</h3>
    </div>
  );
}

export default SurveyTitle;
