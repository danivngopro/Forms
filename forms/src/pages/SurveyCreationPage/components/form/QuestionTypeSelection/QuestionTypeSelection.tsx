import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { useTranslation } from "react-i18next";

function QuestionTypeSelection(props: { callback: any }) {
  const { t } = useTranslation();
  const [questionType, setQuestionType] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setQuestionType(event.target.value as string);
    props.callback(event.target.value);
  };

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <Select value={questionType} onChange={handleChange} label="hello">
        <MenuItem value={t('selectQuestionType.radio')}>{t('selectQuestionType.radio')}</MenuItem>
        <MenuItem value={t('selectQuestionType.checkbox')}>{t('selectQuestionType.checkbox')}</MenuItem>
        <MenuItem value={t('selectQuestionType.select')}>{t('selectQuestionType.select')}</MenuItem>
        <MenuItem value={t('selectQuestionType.shortAnswer')}>{t('selectQuestionType.shortAnswer')}</MenuItem>
        <MenuItem value={t('selectQuestionType.longAnswer')}>{t('selectQuestionType.longAnswer')}</MenuItem>
      </Select>
    </FormControl>
  );
}

export default QuestionTypeSelection;
