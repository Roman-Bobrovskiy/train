//Время в пути
let getTravelTime = (onDispatchTime, onArrivalTime) => {
  let getDate = (string) =>
    new Date(
      0,
      0,
      0,
      string.split(":")[0],
      string.split(":")[1],
      string.split(":")[2]
    );
  let different = getDate(onArrivalTime) - getDate(onDispatchTime);
  const seconds = Math.round(Math.abs((different / 1000) % 60));
  const minutes = Math.round(Math.abs((different / 1000 / 60) % 60));
  const hours = Math.round(Math.abs((different / (1000 * 60 * 60)) % 24));

  let result = hours + ":" + minutes + ":" + seconds;
  return result;
};

//getTotalTime- Возвращает общее время в пути
let getTotalTime = (travelTime) => {
  let summTime = [];
  travelTime.forEach((obj) => summTime.push(getSumm(obj)));
  return summTime;
};

//getSumm - складывает время
let getSumm = (obj) => {
  let rez = obj.reduce((acc, items) => {
    return acc + (getDate(items.travelTime) - getDate("00:00:00"));
  }, 0);

  // const seconds = Math.round(Math.abs((rez / 1000) % 60));
  const minutes = Math.round(Math.abs((rez / 1000 / 60) % 60));
  const hours = Math.round(Math.abs((rez / (1000 * 60 * 60)) % 24));
  const day = Math.round(Math.abs(rez / (1000 * 60 * 60 * 24)));

  let result =
    "day" +
    " " +
    day +
    ":" +
    " " +
    "hours" +
    " " +
    hours +
    ":" +
    " " +
    "minutes" +
    " " +
    minutes +
    ":" +
    " ";

  return result;
};

let getDate = (string) => {
  let nowData = new Date();
  let ms = new Date(
    nowData.getFullYear(),
    nowData.getMonth(),
    nowData.getDate(),
    string.split(":")[0],
    string.split(":")[1],
    string.split(":")[2]
  );
  return Date.parse(ms);
};

let getTime = {
  getTravelTime,
  getTotalTime,
};

export default getTime;
