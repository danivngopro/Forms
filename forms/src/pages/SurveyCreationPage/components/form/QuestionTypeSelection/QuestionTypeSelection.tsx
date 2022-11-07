import { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { useTranslation } from "react-i18next";
import { QuestionType } from "../../../../../interfaces/iQuestion";

function QuestionTypeSelection(props: {
  selected: QuestionType;
  callback: any;
}) {
  const { t } = useTranslation();
  const [questionType, setQuestionType] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setQuestionType(event.target.value);
    props.callback(event.target.value);
  };

  useEffect(() => {
    switch (props.selected) {
      case t(QuestionType.checkbox):
        setQuestionType(t("selectQuestionType.checkbox") as string);
        break;
      case t(QuestionType.longAnswer):
        setQuestionType(t("selectQuestionType.longAnswer") as string);
        break;
      case t(QuestionType.select):
        setQuestionType(t("selectQuestionType.select") as string);
        break;
      case t(QuestionType.shortAnswer):
        setQuestionType(t("selectQuestionType.shortAnswer") as string);
        break;

      default:
        setQuestionType(t("selectQuestionType.radio") as string);
        break;
    }
  }, [props.selected]);

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <Select value={questionType} onChange={handleChange} label="hello">
        <MenuItem value={t("selectQuestionType.radio")}>
          {t("selectQuestionType.radio")}
        </MenuItem>
        <MenuItem value={t("selectQuestionType.checkbox")}>
          {t("selectQuestionType.checkbox")}
        </MenuItem>
        <MenuItem value={t("selectQuestionType.select")}>
          {t("selectQuestionType.select")}
        </MenuItem>
        <MenuItem value={t("selectQuestionType.shortAnswer")}>
          {t("selectQuestionType.shortAnswer")}
        </MenuItem>
        <MenuItem value={t("selectQuestionType.longAnswer")}>
          {t("selectQuestionType.longAnswer")}
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default QuestionTypeSelection;
