import * as Joi from 'joi';
import { QuestionType } from '../questions.interface';

const questionschema = Joi.object({
  surveyId: Joi.string(),
  surveyName: Joi.string().optional(),
  content: Joi.array().items(Joi.object({
    questionName: Joi.string(),
    questionType: Joi.string().valid(...Object.values(QuestionType)),
    answers: Joi.array().items(Joi.object({
      answer: Joi.string(),
    })),
  })),
});

const surveySchema = Joi.object({
  surveyName: Joi.string(),
  creatorId: Joi.string(),
  content: Joi.array().items(Joi.object({
    questionName: Joi.string(),
    questionType: Joi.string().valid(...Object.values(QuestionType)),
    answers: Joi.array().items(Joi.object({
      answer: Joi.string(),
    })),
  })),
});

const surveyId = Joi.object({
  id: Joi.string(),
});

const questionId = Joi.object({
  surveyId: Joi.string(),
  questionId: Joi.string(),
});

export const createSurveyReqSchema = Joi.object({
  body: surveySchema,
  query: {},
  params: {},
});

export const addQuestionReqSchema = Joi.object({
  body: questionschema,
  query: {},
  params: {},
});

export const getSurveyReqSchema = Joi.object({
  body: {},
  query: {},
  params: surveyId,
});

export const getQuestionReqSchema = Joi.object({
  body: {},
  query: questionId,
  params: {},
});

export const updateQuestionReqSchema = Joi.object({
  body: questionschema,
  query: questionId,
  params: {},
});
