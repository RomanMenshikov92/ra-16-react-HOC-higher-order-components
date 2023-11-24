import { VideoListProps } from "./interface/InterfaceTime";
import VideoItemChild from "./VideoItemChild";

export const VideoListChild: React.FC<VideoListProps> = (props) => {
  return (
    <ul className="time-video__list">
      {props.list.map((item, index) => (
        <VideoItemChild key={index} url={item.url} date={item.date}></VideoItemChild>
      ))}
    </ul>
  );
};

export default VideoListChild;
