/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import * as mongoose from 'mongoose';
import { question } from './questions.interface';

const questionschema: mongoose.Schema = new mongoose.Schema({
  questionId: {
    type: String,
    required: true,
    unique: true,
  },
  members: {
    type: Array,
    required: true,
  },
  connectedAt: {
    type: Date,
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

questionschema.index({ firstName: 1, lastName: 1 });

export const QuestionModel = mongoose.model<question & mongoose.Document>('question', questionschema);
