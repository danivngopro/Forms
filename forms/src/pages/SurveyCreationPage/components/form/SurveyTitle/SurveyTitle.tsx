import "./SurveyTitle.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import TextField from "@mui/material/TextField";

function SurveyTitle(props: { surveyName: string }) {
  const { t } = useTranslation();

  const [surveyName, setSurveyName] = useState(props.surveyName);

  if (surveyName === "" || !surveyName) setSurveyName(t('newSurvey') as string);

  return (
    <div className="survey-title-container">
      <input type='text' className='survey-title-text-input_survey_name' placeholder={surveyName}/>
      <input type='text' className='survey-title-text-input_survey_description' placeholder={t('surveyDescription')}/>
    </div>
  );
}

export default SurveyTitle;
