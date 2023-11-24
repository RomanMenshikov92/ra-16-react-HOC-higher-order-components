import React, { Component } from "react";
import "./aggregation.css";
import MonthTableAggr from "./MonthTableChild";
import YearTableAggr from "./YearTableChild";
import SortTableAggr from "./SortTableChild";

export class Aggregation extends Component {
  state = { list: [] };
  componentDidMount() {
    fetch("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hoc/aggregation/data/data.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ list: data.list });
      });
  }
  render() {
    const { list } = this.state;

    return (
      <div id="Aggregation">
        <MonthTableAggr list={list} />
        <YearTableAggr list={list} />
        <SortTableAggr list={list} />
      </div>
    );
  }
}
