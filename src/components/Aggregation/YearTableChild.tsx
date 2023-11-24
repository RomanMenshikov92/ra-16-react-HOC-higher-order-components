import React from "react";
import { YearItem, YearProps } from "./interface/InterfaceAggregation";
import withDataAggregation from "./withDataAggregation";

export const YearTableChild: React.FC<YearProps> = (props) => {
  console.log("YearTable", props);
  return (
    <div>
      <h2>Year Table</h2>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {props.list.map((item: YearItem) => (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const YearTableAggr = withDataAggregation(YearTableChild, "year");
export default YearTableAggr;
