import { AnswerError } from './errors';

export class SurveyNotFound extends AnswerError {
  constructor() {
    super('Survey not found', 404);
  }
}
