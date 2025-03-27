import { ProcessId } from '../ProcessId';

export class ProcessNotUpdated extends Error {
  constructor(processId: ProcessId) {
    super(`The process with Id: ${processId} could not be updated`);
  }
}
