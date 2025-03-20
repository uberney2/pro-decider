import { QA } from '../QA';

export class QAAlreadyExists extends Error {
  constructor(qaDimension: QA) {
    super(`This QA Dimension already exists: ${qaDimension.id.value}`);
  }
}
