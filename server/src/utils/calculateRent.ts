type TRates = {
  hourly: number;
  daily: number;
  weekly: number;
};

const calculateRent = (hours: number, rate: TRates): number => {
  const day = 24;
  const week = day * 7;

  const weeks = Math.floor(hours / week);
  const remainingHoursAfterWeeks = hours % week;

  const days = Math.floor(remainingHoursAfterWeeks / day);
  const remainingHoursAfterDays = remainingHoursAfterWeeks % day;

  const weekRate = weeks * rate.weekly;
  const dayRate = days * rate.daily;
  const hourRate = remainingHoursAfterDays * rate.hourly;

  const totalRent = weekRate + dayRate + hourRate;

  return totalRent;
};
export default calculateRent;
