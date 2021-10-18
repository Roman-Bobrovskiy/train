import taskData from "./json/test_task_data.json";

let getStationList = () => {
  let stationListArr;

  stationListArr = [...new Set(taskData.map((a) => a.dispatchStation))];

  return stationListArr.sort();
};

export default getStationList;
