import { UserError } from './errors';

export class SurveyNotFound extends UserError {
  constructor() {
    super('Survey not found', 404);
  }
}