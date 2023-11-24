import { ItemProps } from "./interface/InterfaceHighlight";

export const ArticleChild: React.FC<ItemProps> = (props) => {
  return (
    <div className="highlight-video__item item-article">
      <h3>
        <a href="/">{props.title}</a>
      </h3>
      <p className="highlight-video__views">Прочтений: {props.views}</p>
    </div>
  );
};

export default ArticleChild;
