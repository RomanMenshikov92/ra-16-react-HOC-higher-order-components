import withDateTimePretty from "./withDateTimePretty";
import { DateTimeProps } from "./interface/InterfaceTime";

const DateTime: React.FC<DateTimeProps> = (props) => {
  return <p className="video-time__date">{props.date}</p>;
};

export const DateTimePretty = withDateTimePretty(DateTime);

export default DateTimePretty;
