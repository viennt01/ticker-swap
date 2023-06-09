import dayjs from 'dayjs';

export const formatDateTime = (date: Date) => {
  return dayjs(date).format('HH:mm DD/MM/YYYY');
};

export const formatDate = (date: Date) => {
  return dayjs(date).format('DD/MM/YYYY');
};

export const formatNumber = (value: number | string) => {
  return new Intl.NumberFormat().format(Number(value));
};

export const getClientTimezone = () => {
  const offset = new Date().getTimezoneOffset();
  const sign = offset < 0 ? '+' : '-';
  const hours = ('00' + Math.floor(Math.abs(offset) / 60)).slice(-2);
  return sign + hours;
};

export function formatCurrency(number: number) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'VND',
  });
  return formatter.format(number);
}
