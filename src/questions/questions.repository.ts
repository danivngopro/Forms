import { question } from './questions.interface';
import { QuestionModel } from './questions.model';

export class QuestionRepository {
  static create(newQuestion: question): Promise<question> {
    return QuestionModel.create(newQuestion);
  }

  static removeQuestion(questionId: string): Promise<question | null> {
    return QuestionModel.findByIdAndDelete(questionId).exec();
  }

  static findQuestion(questionId: string): Promise<question | null> {
    return QuestionModel.findById(questionId).exec();
  }
}