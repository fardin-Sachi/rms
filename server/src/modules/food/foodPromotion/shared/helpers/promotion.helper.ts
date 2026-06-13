import { BadRequestError } from '../../../../../shared/errors/BadRequestError.js';

export class PromotionHelper {
  static isActive(
    startTime: Date | null,
    endTime: Date | null,
    isPermanent: boolean,
  ) {
    if (isPermanent) {
      return true;
    }

    const now = new Date();

    return !!startTime && !!endTime && now >= startTime && now <= endTime;
  }

  static validatePromotionPeriod(startTime: Date, endTime: Date) {
    if (startTime >= endTime) {
      throw new BadRequestError('Start time must be before end time');
    }
  }
}
