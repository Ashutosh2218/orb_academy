import { CleaningServices } from "@mui/icons-material";
import React, { useEffect, useRef } from "react";

function Blob(props) {
  // console.log(props.color, `w-[${props.width}]`);

  return (
    <div>
      <div id="blob_container" className={` absolute `}>
        <svg
          style={{ width: `${props.width}` }}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill={`${props.color}`} transform="translate(100 100)">
            <animate
              attributeName="d"
              dur={"40000ms"}
              repeatCount={"indefinite"}
              values="
              M38.7,-66.2C52.7,-59,68.3,-53.7,71.5,-43C74.6,-32.3,65.3,-16.2,63.5,-1C61.7,14.1,67.4,28.2,65.6,41.1C63.7,53.9,54.2,65.6,42,67.8C29.8,69.9,14.9,62.5,-0.8,63.9C-16.5,65.4,-33.1,75.6,-40.4,70.7C-47.7,65.7,-45.7,45.5,-47.9,31.2C-50,16.9,-56.3,8.4,-62.1,-3.4C-67.9,-15.1,-73.3,-30.3,-69,-41C-64.8,-51.6,-50.9,-57.9,-37.8,-65.6C-24.7,-73.4,-12.3,-82.6,0,-82.6C12.4,-82.6,24.7,-73.4,38.7,-66.2Z;
               M30.2,-55.9C38,-47.7,42.7,-37.5,46,-27.9C49.4,-18.2,51.5,-9.1,51.2,-0.2C50.9,8.8,48.2,17.5,44.1,25.8C40,34.1,34.3,41.9,26.7,48.8C19.1,55.7,9.6,61.7,-1.4,64.1C-12.3,66.5,-24.7,65.3,-32.7,58.6C-40.8,52,-44.6,40,-49.7,29.3C-54.8,18.6,-61.2,9.3,-67.3,-3.5C-73.3,-16.3,-79,-32.6,-73.5,-42.6C-68,-52.7,-51.4,-56.5,-37.3,-61.1C-23.2,-65.8,-11.6,-71.4,-0.2,-71C11.1,-70.5,22.3,-64.2,30.2,-55.9Z;
               M36.4,-57.3C50.1,-55.2,65.9,-51.2,75.4,-41.3C84.9,-31.5,88.1,-15.7,88,-0.1C87.9,15.6,84.5,31.2,74,39.3C63.4,47.3,45.6,47.8,32.1,55.9C18.6,64.1,9.3,79.9,-3.1,85.2C-15.5,90.6,-30.9,85.5,-38.4,73.8C-45.8,62.2,-45.2,44,-52.2,30.6C-59.1,17.2,-73.7,8.6,-76.6,-1.7C-79.4,-11.9,-70.6,-23.8,-62.1,-34.5C-53.6,-45.3,-45.4,-54.9,-35.1,-58.9C-24.8,-62.9,-12.4,-61.4,-0.5,-60.5C11.4,-59.6,22.8,-59.5,36.4,-57.3Z;
               M31,-49.3C42.8,-46.9,56.8,-43.9,62.5,-35.5C68.3,-27.2,65.9,-13.6,61.9,-2.3C57.8,9,52.2,17.9,45.9,25.4C39.6,32.8,32.6,38.6,24.9,44.2C17.1,49.8,8.6,55.2,-0.1,55.3C-8.7,55.4,-17.4,50.3,-31.5,48.4C-45.6,46.4,-65.1,47.6,-72.4,40.1C-79.7,32.6,-74.8,16.3,-73.6,0.7C-72.4,-14.9,-74.8,-29.7,-68.6,-39.2C-62.5,-48.7,-47.7,-52.9,-34.8,-54.6C-22,-56.4,-11,-55.7,-0.7,-54.5C9.6,-53.3,19.2,-51.6,31,-49.3Z;
               M36.4,-57.3C50.1,-55.2,65.9,-51.2,75.4,-41.3C84.9,-31.5,88.1,-15.7,88,-0.1C87.9,15.6,84.5,31.2,74,39.3C63.4,47.3,45.6,47.8,32.1,55.9C18.6,64.1,9.3,79.9,-3.1,85.2C-15.5,90.6,-30.9,85.5,-38.4,73.8C-45.8,62.2,-45.2,44,-52.2,30.6C-59.1,17.2,-73.7,8.6,-76.6,-1.7C-79.4,-11.9,-70.6,-23.8,-62.1,-34.5C-53.6,-45.3,-45.4,-54.9,-35.1,-58.9C-24.8,-62.9,-12.4,-61.4,-0.5,-60.5C11.4,-59.6,22.8,-59.5,36.4,-57.3Z;
               M38.7,-66.2C52.7,-59,68.3,-53.7,71.5,-43C74.6,-32.3,65.3,-16.2,63.5,-1C61.7,14.1,67.4,28.2,65.6,41.1C63.7,53.9,54.2,65.6,42,67.8C29.8,69.9,14.9,62.5,-0.8,63.9C-16.5,65.4,-33.1,75.6,-40.4,70.7C-47.7,65.7,-45.7,45.5,-47.9,31.2C-50,16.9,-56.3,8.4,-62.1,-3.4C-67.9,-15.1,-73.3,-30.3,-69,-41C-64.8,-51.6,-50.9,-57.9,-37.8,-65.6C-24.7,-73.4,-12.3,-82.6,0,-82.6C12.4,-82.6,24.7,-73.4,38.7,-66.2Z;
             
               M30.2,-55.9C38,-47.7,42.7,-37.5,46,-27.9C49.4,-18.2,51.5,-9.1,51.2,-0.2C50.9,8.8,48.2,17.5,44.1,25.8C40,34.1,34.3,41.9,26.7,48.8C19.1,55.7,9.6,61.7,-1.4,64.1C-12.3,66.5,-24.7,65.3,-32.7,58.6C-40.8,52,-44.6,40,-49.7,29.3C-54.8,18.6,-61.2,9.3,-67.3,-3.5C-73.3,-16.3,-79,-32.6,-73.5,-42.6C-68,-52.7,-51.4,-56.5,-37.3,-61.1C-23.2,-65.8,-11.6,-71.4,-0.2,-71C11.1,-70.5,22.3,-64.2,30.2,-55.9Z;
               M43.2,-67.7C56.9,-66.9,69.6,-57.2,71.6,-44.4C73.5,-31.7,64.8,-15.8,59.9,-2.8C55.1,10.2,54.2,20.5,49.7,29C45.3,37.4,37.3,44.2,28.5,48C19.6,51.9,9.8,52.9,-1.5,55.5C-12.8,58.1,-25.6,62.2,-34.6,58.5C-43.6,54.7,-48.8,42.9,-57.7,31.9C-66.5,20.8,-79,10.4,-80.5,-0.9C-82.1,-12.2,-72.8,-24.4,-64.9,-37.2C-57,-49.9,-50.6,-63.2,-40,-65.8C-29.4,-68.5,-14.7,-60.4,0,-60.4C14.7,-60.5,29.5,-68.5,43.2,-67.7Z;
              M38.7,-66.2C52.7,-59,68.3,-53.7,71.5,-43C74.6,-32.3,65.3,-16.2,63.5,-1C61.7,14.1,67.4,28.2,65.6,41.1C63.7,53.9,54.2,65.6,42,67.8C29.8,69.9,14.9,62.5,-0.8,63.9C-16.5,65.4,-33.1,75.6,-40.4,70.7C-47.7,65.7,-45.7,45.5,-47.9,31.2C-50,16.9,-56.3,8.4,-62.1,-3.4C-67.9,-15.1,-73.3,-30.3,-69,-41C-64.8,-51.6,-50.9,-57.9,-37.8,-65.6C-24.7,-73.4,-12.3,-82.6,0,-82.6C12.4,-82.6,24.7,-73.4,38.7,-66.2Z;

               "
            ></animate>
          </path>
        </svg>
      </div>
    </div>
  );
}

{
  // <path fill="#08BDBA" d="M43.2,-67.7C56.9,-66.9,69.6,-57.2,71.6,-44.4C73.5,-31.7,64.8,-15.8,59.9,-2.8C55.1,10.2,54.2,20.5,49.7,29C45.3,37.4,37.3,44.2,28.5,48C19.6,51.9,9.8,52.9,-1.5,55.5C-12.8,58.1,-25.6,62.2,-34.6,58.5C-43.6,54.7,-48.8,42.9,-57.7,31.9C-66.5,20.8,-79,10.4,-80.5,-0.9C-82.1,-12.2,-72.8,-24.4,-64.9,-37.2C-57,-49.9,-50.6,-63.2,-40,-65.8C-29.4,-68.5,-14.7,-60.4,0,-60.4C14.7,-60.5,29.5,-68.5,43.2,-67.7Z" transform="translate(100 100)" />
}

// id="svg_blob_1"
// d="M38.7,-66.2C52.7,-59,68.3,-53.7,71.5,-43C74.6,-32.3,65.3,-16.2,63.5,-1C61.7,14.1,67.4,28.2,65.6,41.1C63.7,53.9,54.2,65.6,42,67.8C29.8,69.9,14.9,62.5,-0.8,63.9C-16.5,65.4,-33.1,75.6,-40.4,70.7C-47.7,65.7,-45.7,45.5,-47.9,31.2C-50,16.9,-56.3,8.4,-62.1,-3.4C-67.9,-15.1,-73.3,-30.3,-69,-41C-64.8,-51.6,-50.9,-57.9,-37.8,-65.6C-24.7,-73.4,-12.3,-82.6,0,-82.6C12.4,-82.6,24.7,-73.4,38.7,-66.2Z"

export default Blob;