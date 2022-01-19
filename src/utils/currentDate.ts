const currentDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  if (date.getDay() < 10 && (date.getMonth() + 1) < 10) {
    const day = "0" + date.getDay();
    const month = "0" + (date.getMonth() + 1);
    return `${day}/${month}/${year} ${hours}:${minutes}`;

  } else {
    const day = date.getDay();
    const month = date.getMonth() + 1;
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }
};

export default currentDate;
