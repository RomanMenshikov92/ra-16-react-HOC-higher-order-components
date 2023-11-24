import React from "react";
import { MonthItem, MonthProps } from "./interface/InterfaceAggregation";
import withDataAggregation from "./withDataAggregation";

export const MonthTableChild: React.FC<MonthProps> = (props) => {
  console.log("MonthTable", props);
  return (
    <div>
      <h2>Month Table</h2>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {props.list.map((item: MonthItem) => (
            <tr key={item.month}>
              <td>{item.month}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const MonthTableAggr = withDataAggregation(MonthTableChild, "month");
export default MonthTableAggr;
