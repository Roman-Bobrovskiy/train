import axios from "axios";
import csvFile from "./json/test_task_data.csv";

//запрос csvFile
let getData = () => {
  return axios.get(csvFile);
};

export default getData;
