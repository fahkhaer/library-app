import dayjs from 'dayjs';

export const formatDate = (date?: string) => {
  if (!date) return '-';
  return dayjs(date).format('DD MMMM YYYY');
};

export const getDurationDays = (borrowedAt: string, dueAt: string) => {
  const start = new Date(borrowedAt);
  const end = new Date(dueAt);

  const diff = Math.floor(
    (end.setHours(0, 0, 0, 0) - start.setHours(0, 0, 0, 0)) /
      (1000 * 60 * 60 * 24)
  );

  return `Duration ${diff} Days`;
};
