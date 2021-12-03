//src/App.js
import React from "react";
import { VictoryPie } from "victory-pie";
 
const myData = [
  { x: "Aptitude", y: 35 },
  { x: "Reasoning", y: 20 },
  { x: "Verbal", y: 15 },
  { x: "FIRO-B", y: 30 },
];
 
const GraphApp = () => {
  return (
    <div className="text-center"> 
    <svg  width="800" height="500" viewBox="-100 -1 400 300">

    <VictoryPie
      data={myData}
      colorScale={["blue", "yellow", "red","green"]}
      standalone={false}
      origin={{ x: 100, y: 100 }}
      radius={40}
    />
    <VictoryPie
      data={myData}
      labelRadius={20}
      colorScale={["blue", "yellow", "red","green"]}
      labels={({ datum }) => `${datum.y}%`}
      standalone={false}
      origin={{ x: 100, y: 100 }}
      radius={50}
    />
  </svg>
  </div>
   
  );
};
 
export default GraphApp;