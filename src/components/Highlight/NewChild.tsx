import { Component } from "react";
import { ItemProps } from "./interface/InterfaceHighlight";

export const NewChild: React.FC<ItemProps> = (props) => {
  return (
    <div className="wrap-item wrap-item-new">
      <span className="label">New!</span>
      <Component {...props} />
    </div>
  );
};
