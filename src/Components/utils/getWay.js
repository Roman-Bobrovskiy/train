import getStationList from "./getStationList";
import getTime from "./timeCounter";

let arr = [];
let listVisitStation = [];

// Станции отправления
let firstStation = (taskData) => {
  let result = [];
  getStationList().forEach((station) => {
    getWay(taskData, station);
    if (arr && arr.length >= getStationList().length - 1) {
      result = [...result, arr];
    }
    listVisitStation = [];
    arr = [];
  });
  return result;
};

//Поиск маршрута
let getWay = (taskData, station) => {
  listVisitStation = [...listVisitStation, station];
  let previousStation = station;

  taskData.forEach((stat) => {
    let currentStation = stat.arrivalStation;

    if (
      previousStation === stat.dispatchStation &&
      !listVisitStation.includes(stat.arrivalStation)
    ) {
      time(taskData);
      arr = [...arr, stat];
      listVisitStation = [...listVisitStation, stat.arrivalStation];
      previousStation = currentStation;
      return arr;
    }
  });
};

//Time - рассчитывает время в пути и добавляет его в объект
let time = (taskData) => {
  taskData.forEach((item) => {
    if (!item.hasOwnProperty("travelTime")) {
      return (item["travelTime"] = getTime.getTravelTime(
        item.dispatchTime,
        item.arrivalTime
      ));
    }
  });
};
export default firstStation;
