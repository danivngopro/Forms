export interface iSurvey {
  surveyId: string;
  userId: string;
  content: Array<iSection>;
}

export interface iSection {
  questionId: string;
  answers: Array<String>;
}