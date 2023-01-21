export const convertDate = (value) => {
  const date = new Date(value);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (month.toString().length === 1) {
    month = `0${month}`;
  }
  if (day.toString().length === 1) {
    day = `0${day}`;
  }

  return `${day} / ${month} / ${year}`;
};
