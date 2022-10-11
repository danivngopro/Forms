/* eslint-disable @typescript-eslint/no-unused-vars */
import { QuestionRepository } from './questions.repository';
import { question } from './questions.interface';
import { default as axios } from 'axios';

export class QuestionManager {
  static async create(newQuestion: question): Promise<question> {
    return QuestionRepository.create(newQuestion);
  }

  static async addUsers(
    questionId: string,
    status: boolean,
  ): Promise<string> {
    try {
      if (!status) console.log('question already exist');
      else {
        const question = await QuestionRepository.findQuestion(questionId);
        axios.put('http://130.87.164.152/question/user', {
          id: questionId,
          type: 'AddToDistributionQuestion',
          data: {
            questionId: question?.questionId,
            userId: question?.members
              .map((member) => member.toLowerCase())
              .join(';'),
          },
        });
      }
    } catch (err) {
      console.log(err);
    }
    return '';
  }
}
