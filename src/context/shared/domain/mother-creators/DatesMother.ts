import { MotherCreator } from './MotherCreator';

export class DateMother {
  static randomSoon(): Date {
    return MotherCreator.random().date.soon();
  }

  static randomFuture(): Date {
    return MotherCreator.random().date.future();
  }

  static randomPast(): Date {
    return MotherCreator.random().date.past();
  }
}
