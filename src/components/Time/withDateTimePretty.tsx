import React from "react";
import moment from "moment";
import { DateTimePrettyProps } from "./interface/InterfaceTime";

export const withDateTimePretty = <P extends object>(Component: React.ComponentType<P & DateTimePrettyProps>) => {
  const DateTimePretty: React.FC<P & DateTimePrettyProps> = (props) => {
    const formattedDate = (date: string) => {
      const now = moment();
      const publishedAt = moment(date);
      const diffHours = now.diff(publishedAt, "hours");

      if (diffHours < 1) {
        return `${now.diff(publishedAt, "minutes")} минут назад`;
      } else if (diffHours < 24) {
        return `${diffHours} часов назад`;
      } else {
        return `${now.diff(publishedAt, "days")} дней назад`;
      }
    };

    return <Component {...props} date={formattedDate(props.date)} />;
  };

  return DateTimePretty;
};

export default withDateTimePretty;
