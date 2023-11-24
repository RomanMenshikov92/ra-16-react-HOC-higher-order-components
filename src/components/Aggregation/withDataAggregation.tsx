import { useEffect, useState } from "react";
import { SortItem, GroupedListItem, GroupByOption } from "./interface/InterfaceAggregation";

export const withDataAggregation = <P extends object>(WrappedComponent: React.ComponentType<P>, groupBy: GroupByOption) => {
  return (props: P & { list: SortItem[] }) => {
    const [data, setData] = useState<GroupedListItem[]>([]);

    useEffect(() => {
      const newData: GroupedListItem[] = [];
      for (let item of props.list) {
        const newDate = new Date(item.date);
        newData.push({
          year: newDate.getFullYear(),
          month: newDate.getMonth(),
          date: item.date,
          amount: item.amount,
        });
      }

      newData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      setData(newData);
    }, [props.list]);

    const groupList = (data: GroupedListItem[], groupBy: GroupByOption): GroupedListItem[] => {
      if (groupBy === undefined) {
        return data;
      } else {
        return data.reduce((acc: GroupedListItem[], curr: GroupedListItem) => {
          if (groupBy === "year") {
            const existingYear = acc.find((item) => item.year === curr.year);
            if (existingYear) existingYear.amount += curr.amount;
            else acc.push(curr);
          } else if (groupBy === "month") {
            const existingMonth = acc.find((item) => item.month === curr.month);
            if (existingMonth) existingMonth.amount += curr.amount;
            else acc.push(curr);
          }
          return acc;
        }, []);
      }
    };

    return <WrappedComponent {...props} list={groupList(data, groupBy)} />;
  };
};

export default withDataAggregation;
