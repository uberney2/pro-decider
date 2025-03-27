import { QAId } from '../QAId';

export class QANotUpdated extends Error {
  constructor(qaId: QAId) {
    super(`The qa with Id: ${qaId} could not be updated`);
  }
}
