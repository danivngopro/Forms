/* eslint-disable @typescript-eslint/no-unused-vars */
import { QuestionRepository } from './questions.repository';
import { Question, Survey } from './questions.interface';
export class QuestionManager {
  static async createSurvey(surveyName: string, content: Array<Question>): Promise<Survey> {
    return QuestionRepository.createSurvey(surveyName, content);
  }
  
  static async updateSurvey(surveyId: string, surveyName: string, content: Array<Question>): Promise<Survey | null> {
    return QuestionRepository.updateSurvey(surveyId, surveyName, content);
  }

  static async getSurvey(surveyId: string): Promise<Survey | null> {
    return QuestionRepository.getSurvey(surveyId);
  }
  
  static async deleteSurvey(surveyId: string): Promise<Survey | null> {
    return QuestionRepository.deleteSurvey(surveyId);
  }
}
