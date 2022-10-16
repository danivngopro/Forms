export interface Survey {
  id?: string;
  surveyName: string;
  content: Array<Question>;
}

export interface Question {
  id?: string;
  questionName: string;
  questionType: QuestionType;
  answers?: Array<Answer>;
}
export interface Answer {
  id?: string;
  answer: string;
}

export enum QuestionType {
  shortAnswer = 'shortAnswer',
  longAnswer = 'longAnswer',
  radio = 'radio',
  checkbox = 'checkbox',
  select = 'select',
  title = 'title',
}


