const currentDate = () => {
  const date = new Date();
  const day = date.getDay();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${day < 10 ? "0" + day : day}/${
    month < 10 ? "0" + month : month
  }/${year} ${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }`;

};

export default currentDate;
