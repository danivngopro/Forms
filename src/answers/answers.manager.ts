/* eslint-disable @typescript-eslint/no-unused-vars */
import { AnswerRepository } from './answers.repository';
import { iSurvey } from './answers.interface';
import { SurveyNotFound } from '../utils/errors/answer';

export class AnswerManager {
  static async create(newSurvey: iSurvey): Promise<iSurvey> {
    return AnswerRepository.create(newSurvey);
  }

  static async showSurveyById(surveyId: string): Promise<iSurvey[]> {
    const survey = await AnswerRepository.showSurveyById(surveyId);
    if (survey.length !== 0) {
      return survey;
    } else {
      throw new SurveyNotFound;
    }
  }
}
