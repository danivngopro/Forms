import { Question, Survey } from './questions.interface';
import { QuestionModel } from './questions.model';

export class QuestionRepository {
  static createSurvey(
    surveyName: string,
    content: Array<Question>,
  ): Promise<Survey> {
    return QuestionModel.create({ surveyName, content } as Survey);
  }

  static updateSurvey(
    surveyId: string,
    surveyName: string,
    content: Array<Question>,
  ): Promise<Survey | null> {
    return QuestionModel.findByIdAndUpdate(
      surveyId,
      { surveyName, $push: { content: content } },
      { new: true },
    ).exec();
  }

  static getSurvey(surveyId: string): Promise<Survey | null> {
    return QuestionModel.findById(surveyId).exec();
  }

  static deleteSurvey(surveyId: string): Promise<Survey | null> {
    return QuestionModel.findByIdAndDelete(surveyId).exec();
  }

  static deleteQuestion(
    surveyId: string,
    question: Question,
  ): Promise<Survey | null> {
    return QuestionModel.findByIdAndUpdate(
      surveyId,
      {
        $pull: { content: question },
      },
      { new: true },
    ).exec();
  }

  // static removeQuestion(questionId: string): Promise<Question | null> {
  //   return QuestionModel.findByIdAndDelete(questionId).exec();
  // }

  // static findQuestion(questionId: string): Promise<Question | null> {
  //   return QuestionModel.findById(questionId).exec();
  // }
}
