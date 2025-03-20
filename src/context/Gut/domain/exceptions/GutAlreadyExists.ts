import { Gut } from '../Gut';

export class GutAlreadyExists extends Error {
  constructor(gutDimension: Gut) {
    super(`This Gut Dimension already exists: ${gutDimension.id.value}`);
  }
}
