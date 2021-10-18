//Парсит результат запроса и создает массив
let getObject = (CSVData) => {
  let arr = CSVData.split("\r\n");

  let newArr = [];
  arr.forEach((elem) => newArr.push(createNewObj(elem)));
  return newArr;
};

//createNewObj добавляет в объект ключи
let createNewObj = (elem) => {
  let Object = [
    "namberTrain",
    "dispatchStation",
    "arrivalStation",
    "price",
    "dispatchTime",
    "arrivalTime",
  ];

  let result = elem.split(";");
  let newObj = {};

  result.forEach((item, index) => {
    if (index < 4) {
      newObj = { ...newObj, [Object[index]]: Number(item) };
    } else {
      newObj = { ...newObj, [Object[index]]: String(item) };
    }
  });
  return newObj;
};

export default getObject;
