import { GutId } from '../GutId';

export class GutNotUpdated extends Error {
  constructor(gutId: GutId) {
    super(`The gut with Id: ${gutId} could not be updated`);
  }
}
