export interface FormattedRes {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

/**
 * 根据时间戳计算时间戳对应的天，时，分，秒，毫秒数
 * @param {number} milliseconds 时间戳
 * @returns days, hours, minutes, seconds
 */
export const parseMs = (milliseconds: number): FormattedRes => {
  const oneDay = 1000 * 60 * 60 * 24,
        oneHour = 1000 * 60 * 60,
        oneMinute = 1000 * 60,
        oneSecond = 1000
  return {
      days: Math.floor(milliseconds / oneDay),
      hours: Math.floor(milliseconds / oneHour) % 24,
      minutes: Math.floor(milliseconds / oneMinute) % 60,
      seconds: Math.floor(milliseconds / oneSecond) % 60,
      milliseconds: Math.floor(milliseconds) % 1000,
  }
}