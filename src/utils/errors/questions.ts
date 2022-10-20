import { QuestionError } from './errors';

export class ValidationError extends QuestionError {
  constructor() {
    /* istanbul ignore next */
    super('Validation error', 400);
  }
}

export class surveyNotFoundError extends QuestionError {
  /* istanbul ignore next */
  constructor(message = 'survey not found') {
    super(message, 404);
  }
}
/* istanbul ignore next */
export class QuestionNotFoundError extends QuestionError {
  constructor() {
    super('question not found', 404);
  }
}