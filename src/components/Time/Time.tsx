import React from "react";
import "./time.css";
import VideoListChild from "./VideoListChild";
import { VideoProps } from "./interface/InterfaceTime";
import dataTimeJSON from "./data/timeData.json";

export const Time: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [list, setList] = React.useState<VideoProps[]>(dataTimeJSON);

  return <VideoListChild list={list} />;
};

export default Time;
