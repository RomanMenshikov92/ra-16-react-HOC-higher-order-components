import { VideoProps } from "./interface/InterfaceTime";
import DateTimePretty from "./DateTimePretty";

export const VideoItemChild: React.FC<VideoProps> = (props) => {
  return (
    <li className="time-video__item">
      <iframe src={props.url} title="Video" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <DateTimePretty date={props.date} />
    </li>
  );
};

export default VideoItemChild;
