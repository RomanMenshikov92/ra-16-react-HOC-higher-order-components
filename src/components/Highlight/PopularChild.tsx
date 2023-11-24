import { Component } from "react";
import { ItemProps } from "./interface/InterfaceHighlight";

export const PopularChild: React.FC<ItemProps> = (props) => {
  return (
    <div className="wrap-item wrap-item-popular">
    <span className="label">Popular!</span>
    <Component {...props} />
  </div>
  );
};
