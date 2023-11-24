import { ItemProps } from "./interface/InterfaceHighlight";

export const VideoChild: React.FC<ItemProps> = (props) => {
  return (
    <div className="highlight-video__item item-video">
      <iframe src={props.url} title="Video" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <p className="highlight-video__views">Просмотров: {props.views}</p>
    </div>
  );
};

export default VideoChild;
