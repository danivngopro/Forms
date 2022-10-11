import * as Joi from 'joi';

const questionschema = Joi.object({
  questionId: Joi.string().default(''),
  members: Joi.array(),
});

export const createQuestionReqSchema = Joi.object({
  body: questionschema,
  query: {},
  params: {},
});

const question = Joi.object({
  RequestID: Joi.string().default(''),
  Status: Joi.boolean().default(false),
  ErrorID: Joi.string().default('').allow(null, ''),
});

export const getQuestion = Joi.object({
  body: question,
  query: {},
  params: {},
});

