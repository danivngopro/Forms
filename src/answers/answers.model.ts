/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import * as mongoose from 'mongoose';
import { iSurvey } from './answers.interface';

const sectionSchema: mongoose.Schema = new mongoose.Schema({
  questionId: {
    type: String,
    required: true,
  },
  answers: {
    type: [String],
    required: true,
  },
}, {
  toJSON: {
    virtuals: true,
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    transform(_doc, ret) {
      delete ret._id;
    },
  },
  versionKey: false,
  id: true,
  timestamps: { createdAt: true, updatedAt: false },
});

const answerSchema: mongoose.Schema = new mongoose.Schema({
  surveyId: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  userId: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  content: {
    type: [sectionSchema],
    required: true,
  },
}, {
  toJSON: {
    virtuals: true,
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    transform(_doc, ret) {
      delete ret._id;
    },
  },
  versionKey: false,
  id: true,
  timestamps: { createdAt: true, updatedAt: false },
});

answerSchema.index({ surveyId: 1, userId: 1 });

export const AnswerModel = mongoose.model<iSurvey & mongoose.Document>('iSurvey', answerSchema);
