const DATE_UNITS = {
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1,
};

// obteniendo el numero de segundos que han pasado desde un timestamp
const getSecondsDiff = (timestamp: string): number =>
  (Date.now() - Date.parse(timestamp)) / 1000;
const getUnitAndValueData = (secondsElapsed: number) => {
  for (const [unit, secondsInUnit] of Object.entries(DATE_UNITS)) {
    if (secondsElapsed >= secondsInUnit || unit === "second") {
      const value = Math.floor(secondsElapsed / secondsInUnit) * -1;
      return { value, unit };
    }
  }
  return {
    value: 0,
    unit: "",
  };
};

const getTimeAgo = (timestamp: string, locale: string) => {
  const rtf = new Intl.RelativeTimeFormat(locale);
  const secondsElapsed = getSecondsDiff(timestamp);
  const { value, unit } = getUnitAndValueData(secondsElapsed);
  return rtf.format(value, unit);
};

const useTimeAgo = (timestamp: string) => {
  const locale = "es";
  const timeago = getTimeAgo(timestamp, locale);
  const date = new Date(timestamp);
  const formattedDate = new Intl.DateTimeFormat(locale, {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
  return {
    datetime: formattedDate,
    timeago,
  };
};

export { useTimeAgo };
// example implement
// const fecha = "2020-08-07T00:00:00.000Z";
// const { datetime, timeago } = useTimeAgo(fecha);
