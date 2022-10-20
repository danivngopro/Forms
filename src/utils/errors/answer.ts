import { UserError } from './errors';

export class ValidationError extends UserError {
  constructor() {
    /* istanbul ignore next */
    super('Validation error', 400);
  }
}

export class IdInvalidError extends UserError {
  /* istanbul ignore next */
  constructor(message = 'Id is invalid') {
    super(message, 400);
  }
}
/* istanbul ignore next */
export class UsernameInvalidError extends UserError {
  constructor(message = 'username is invalid') {
    super(message, 400);
  }
}
export class UserNotFound extends UserError {
  constructor() {
    super('Answer not found', 404);
  }
}