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

enum QuestionType {
  shortAnswer = 'shortAnswer',
  LongAnswer = 'LongAnswer',
  radio = 'radio',
  tickable = 'tickable',
  select = 'select',
  title = 'title',
}


