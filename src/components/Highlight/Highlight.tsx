import React from "react";
import "./highlight.css";
import { ItemProps } from "./interface/InterfaceHighlight";
import dataHighlightJSON from "./data/highlightData.json";
import { ListChild } from "./ListChild";

export const Highlight: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [list, setList] = React.useState<ItemProps[]>(dataHighlightJSON);

  return <ListChild list={list} />;
};

export default Highlight;
