import { ItemProps } from "./interface/InterfaceHighlight";

export const withHighlight = (Component: React.FC<ItemProps>) => {
  return (props: ItemProps) => {
    if (props.views === undefined) {
      return <Component {...props} />;
    } else if (props.views >= 1000) {
      return (
        <li className="highlight-video__wrap-item wrap-item-popular">
          <span className="highlight-video__span">Popular!</span>
          <Component {...props} />
        </li>
      );
    } else if (props.views <= 100) {
      return (
        <li className="highlight-video__wrap-item wrap-item-new">
          <span className="highlight-video__span">New!</span>
          <Component {...props} />
        </li>
      );
    } else {
      return (
        <li className="highlight-video__wrap-item">
          <Component {...props} />
        </li>
      );
    }
  };
};
export default withHighlight;
