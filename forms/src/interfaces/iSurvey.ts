import { iQuestion } from "./iQuestion";

export interface iSurvey {
  id?: string;
  creatorId: string; //add in joi and stuff
  surveyName: string;
  content: Array<iQuestion>;
}
