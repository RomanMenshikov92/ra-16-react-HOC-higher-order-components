import React from "react";
import { SortItem, SortProps } from "./interface/InterfaceAggregation";
import withDataAggregation from "./withDataAggregation";

export const SortTableChild: React.FC<SortProps> = (props) => {
  console.log("SortTable", props);
  return (
    <div>
      <h2>Sort Table</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {props.list.map((item: SortItem) => (
            <tr key={item.date}>
              <td>{item.date}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export const SortTableAggr = withDataAggregation(SortTableChild, undefined);
export default SortTableAggr;
