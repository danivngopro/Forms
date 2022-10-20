/* eslint-disable @typescript-eslint/no-unused-vars */
import { AnswerRepository } from './answers.repository';
import { iSurvey } from './answers.interface';
//import { UserNotFound } from '../utils/errors/answer';

export class UserManager {
  static async create(newSurvey: iSurvey): Promise<iSurvey> {
    return AnswerRepository.create(newSurvey);
  }
}
