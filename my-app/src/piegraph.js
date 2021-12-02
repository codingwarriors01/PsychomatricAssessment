//src/App.js
import React from "react";
import { VictoryPie } from "victory-pie";
// import {  VictoryTheme } from "victory";
 
const myData = [
  { x: "PHP", y: 50 },
  { x: "Python", y: 40 },
  { x: "Java", y: 10 },
  { x: "React", y: 30 },
];
 
const GraphApp = () => {
  return (
    <div style={{ height: 420 }}> 
    <svg  width="800" height="900" viewBox="-200 -1 400 300">
    {/* <rect width="100" height="100" x="100" y="100" /> */}

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





//     <div style={{ height: 620 }}>
//       <svg viewBox="0 10 250 500">   
//       <VictoryPie
        
//         style={{
//             data: {
//               fillOpacity: 0.9, stroke: "#fff", strokeWidth: 3
//                  } }}


//         // data={
//         //     [
//         //            { x: "PHP", y: 500 },
//         //            { x: "Python", y: 400 },
//         //            { x: "Javascript", y: 300 },
//         //            { x: "React", y: 300 },
//         //          ]
//         // }
//         data={myData}
//         // theme={VictoryTheme.material}
//         standalone={false}
//         colorScale={["blue", "yellow", "red","green"]}
//         origin={{ x: 100, y: 100 }}
//         radius={35}
//       />

//       <VictoryPie
//         style={{
//             data: {
//               fillOpacity: 0.9, stroke: "#fff", strokeWidth: 3
//                  } }}
//         data={myData}
//         labelRadius={20}
//         // theme={VictoryTheme.material}
//         colorScale={["blue", "yellow", "red","green"]}
//         labels={({ datum }) => `${datum.y}%`}
//         standalone={false}
//         origin={{ x: 100, y: 100 }}
//         radius={50}
//       />
//  </svg>
//     </div>
   
  );
};
 
export default GraphApp;