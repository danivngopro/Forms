import { iSurvey } from './answers.interface';
import { AnswerModel } from './answers.model';

export class AnswerRepository {
  static create(newSurvey: iSurvey): Promise<iSurvey> {
    return AnswerModel.create(newSurvey);
  }
}
