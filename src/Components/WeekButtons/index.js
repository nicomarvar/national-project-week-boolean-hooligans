// import React, { useState } from "react";

// // const weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // const days = [1, 2, 3, 4, 5];

// let data = {
//   success: true,
//   message: "found all the weeks",
//   payload: [
//     { weekid: 1, weekname: "Week One", daysid: [1, 2, 3, 4] },
//     { weekid: 2, weekname: "Week Two", daysid: [5, 6, 7, 8] },
//     { weekid: 3, weekname: "Week Three", daysid: [9, 10, 11, 12] },
//     { weekid: 4, weekname: "Week Four", daysid: [13, 14, 15, 16] },
//     { weekid: 5, weekname: "Week Five", daysid: [17, 18, 19, 20] },
//     { weekid: 6, weekname: "Week Six", daysid: [21, 22, 23, 24] },
//     { weekid: 7, weekname: "Week Seven", daysid: [25, 26, 27, 28] },
//     { weekid: 8, weekname: "Week Eight", daysid: [29, 30, 31, 32] },
//   ],
// };
// function WeekButtons() {
  
//   return (
//     <ul id="weekList">
//       {data.payload.map(({ weekname, weekid, daysid }) => {
//         return (
//           <li>
//             <button onClick={dropDown}> {weekname}</button>
//             <ul id={weekid} className={isOn ? "display-show" : "display-none"}>
//               {daysid.map((day) => {
//                  if(day%4 === 0) {
//                   return <li>Day 4</li>;
//                 } else {
//                   return <li>Day {day%4}</li>
//                 }
//               })}
//                
//             </ul>
//           </li>
//         );
//       })}
//     </ul>
//   );
// }

// export default WeekButtons;
