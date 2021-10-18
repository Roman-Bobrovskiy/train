import React, { Fragment } from "react";
import getTime from "../utils/timeCounter";

export default function Display({ result }) {
  //Расчет суммы
  let totalPrice = [];
  result.forEach((obj) =>
    totalPrice.push(
      Number(obj.reduce((acc, params) => acc + params.price, 0).toFixed(2))
    )
  );
  //Расчет времени
  let totalTime = getTime.getTotalTime(result);

  return (
    <div>
      {[...result].map((item, index) => {
        return (
          <Fragment key={index}>
            <ul>
              {item.map(
                (
                  {
                    namberTrain,
                    dispatchStation,
                    arrivalStation,
                    price,
                    travelTime,
                  },
                  indexLI
                ) => {
                  return (
                    <li key={indexLI}>
                      Train number: {namberTrain}, Dispatch: {dispatchStation}{" "}
                      {"  ==>  "} Arrival: {arrivalStation} Price: {price},
                      Travel time: {travelTime}
                    </li>
                  );
                }
              )}
            </ul>
            <p>Amount: {totalPrice[index]}</p>
            <p>Travel time: {totalTime[index]}</p>
          </Fragment>
        );
      })}
    </div>
  );
}
