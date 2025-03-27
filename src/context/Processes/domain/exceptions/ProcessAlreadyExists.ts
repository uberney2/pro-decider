import { Process } from '../Process';

export class ProcessAlreadyExists extends Error {
  constructor(processDimension: Process) {
    super(
      `This Process Dimension already exists: ${processDimension.id.value}`
    );
  }
}
