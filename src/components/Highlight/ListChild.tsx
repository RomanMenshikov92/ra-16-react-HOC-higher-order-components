import { ListProps } from "./interface/InterfaceHighlight";
import VideoChild from "./VideoChild";
import ArticleChild from "./ArticleChild";
import withHighlight from "./withHighlight";

export const ListChild: React.FC<ListProps> = (props) => {
  return (
    <ul className="highlight-video__list">
      {props.list.map((item) => {
        switch (item.type) {
          case "video":
            const HighlightedVideo = withHighlight(VideoChild);
            return <HighlightedVideo {...item} />;
          case "article":
            const HighlightedArticle = withHighlight(ArticleChild);
            return <HighlightedArticle {...item} />;
          default:
            return null;
        }
      })}
    </ul>
  );
};

export default ListChild;
