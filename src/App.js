import React, { Component } from "react";
import getData from "./Components/utils/getCSVData";
import getObject from "./Components/utils/getObject";
import Display from "./Components/Display/Display";
import getWay from "./Components/utils/getWay";

export default class App extends Component {
  constructor() {
    super();
    this.load();
  }

  state = {
    dataCSV: null,
    result: null,
  };
  //Добавляет в state расписание
  load() {
    getData().then((req) => this.setState({ dataCSV: getObject(req.data) }));
  }

  componentDidUpdate() {
    //Запуск, результат записывается в state
    if (this.state.result === null) {
      this.setState({ result: getWay(this.state.dataCSV) });
    }
  }

  render() {
    //передаем результат из state в Display. Display выводит результат
    let { result } = this.state;
    return <div>{result !== null ? <Display result={result} /> : null}</div>;
  }
}
