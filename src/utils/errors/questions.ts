import { QuestionError } from './errors';

export class ValidationError extends QuestionError {
  constructor() {
    /* istanbul ignore next */
    super('Validation error', 400);
  }
}

export class IdInvalidError extends QuestionError {
  /* istanbul ignore next */
  constructor(message = 'Id is invalid') {
    super(message, 400);
  }
}
/* istanbul ignore next */
export class QuestionnameInvalidError extends QuestionError {
  constructor(message = 'questionname is invalid') {
    super(message, 400);
  }
}
export class QuestionNotFound extends QuestionError {
  constructor() {
    super('question not found', 404);
  }
}