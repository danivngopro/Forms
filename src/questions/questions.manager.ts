/* eslint-disable @typescript-eslint/no-unused-vars */
import { QuestionRepository } from './questions.repository';
import { Question, Survey } from './questions.interface';
import { QuestionNotFoundError, surveyNotFoundError } from '../utils/errors/questions';
export class QuestionManager {
  static async createSurvey(
    surveyName: string,
    creatorId: string,
    content: Array<Question>,
  ): Promise<Survey> {
    return QuestionRepository.createSurvey(surveyName, creatorId, content);
  }

  static async updateSurvey(
    surveyId: string,
    surveyName: string,
    content: Array<Question>,
  ): Promise<Survey | null> {
    let survey;
    if (!surveyName)
      survey = QuestionRepository.updateSurveyWithoutName(surveyId, content);
    survey = QuestionRepository.updateSurvey(surveyId, surveyName, content);

    if (!survey) throw new surveyNotFoundError;
    return survey;
  }

  static async getSurvey(surveyId: string): Promise<Survey | null> {
    const survey = QuestionRepository.getSurvey(surveyId);

    if (!survey) throw new surveyNotFoundError;
    return survey;
  }

  static async deleteSurvey(surveyId: string): Promise<Survey | null> {
    const survey = QuestionRepository.deleteSurvey(surveyId);

    if (!survey) throw new surveyNotFoundError;
    return survey;
  }

  static async getQuestion(
    surveyId: string,
    questionId: string,
  ): Promise<Question | null> {
    const tempSurvey = await QuestionRepository.getSurvey(surveyId);
    if (!tempSurvey) throw new surveyNotFoundError;

    const survey = tempSurvey as unknown as Survey;

    for (let index = 0; index < survey.content.length; index++) {
      if (survey.content[index].id === questionId) {
        return survey.content[index];
      }
    }

    throw new QuestionNotFoundError;
  }

  static async deleteQuestion(
    surveyId: string,
    questionId: string,
  ): Promise<Survey | null> {
    const question = (await this.getQuestion(
      surveyId,
      questionId,
    )) as unknown as Question;

    if (!question) throw new QuestionNotFoundError;

    const survey = QuestionRepository.deleteQuestion(surveyId, question);

    if (!survey) throw new surveyNotFoundError;
    return survey;
  }

  static async updateQuestion(
    surveyId: string,
    questionId: string,
    content: Array<Question>,
  ): Promise<Survey | null> {
    const survey = await this.deleteQuestion(surveyId, questionId);

    if (!survey) throw new surveyNotFoundError;
    
    const updatedSurvey = QuestionRepository.updateSurveyWithoutName(surveyId, content);
    
    if (!updatedSurvey) throw new surveyNotFoundError;
    return updatedSurvey;
  }
}
