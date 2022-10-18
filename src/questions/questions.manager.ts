/* eslint-disable @typescript-eslint/no-unused-vars */
import { QuestionRepository } from './questions.repository';
import { Question, Survey } from './questions.interface';
export class QuestionManager {
  static async createSurvey(
    surveyName: string,
    content: Array<Question>,
  ): Promise<Survey> {
    return QuestionRepository.createSurvey(surveyName, content);
  }

  static async updateSurvey(
    surveyId: string,
    surveyName: string,
    content: Array<Question>,
  ): Promise<Survey | null> {
    return QuestionRepository.updateSurvey(surveyId, surveyName, content);
  }

  static async getSurvey(surveyId: string): Promise<Survey | null> {
    return QuestionRepository.getSurvey(surveyId);
  }

  static async deleteSurvey(surveyId: string): Promise<Survey | null> {
    return QuestionRepository.deleteSurvey(surveyId);
  }

  static async getQuestion(
    surveyId: string,
    questionId: string,
  ): Promise<Question | null> {
    const temp = await QuestionRepository.getSurvey(surveyId);
    if (!temp) return null;

    const survey = temp as unknown as Survey;

    for (let index = 0; index < survey.content.length; index++) {
      if (survey.content[index].id === questionId) {
        return survey.content[index];
      }
    }

    return null;
  }

  static async deleteQuestion(
    surveyId: string,
    questionId: string,
  ): Promise<Survey | null> {
    const question = await this.getQuestion(surveyId, questionId) as unknown as Question;
    if (!question) return null;
    return QuestionRepository.deleteQuestion(surveyId, question);
  }
}
