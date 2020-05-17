import React from "react";
import Home from "./screens/Home.js";
import { LoadScript } from "@react-google-maps/api";
import { GoogleMap } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";

function App(props) {
  const onLoad = (marker) => {
    console.log("marker", marker);
  };
  const position = {
    lat: 49.260368,
    lng: -123.003769,
  };
  const { containerStyle, center } = props;
  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyCiFAWaUhuyFLDoprTBhbChbtWPPISVZBQ">
        <GoogleMap
          id="circle-example"
          mapContainerStyle={{
            height: "100vh",
            width: "100%",
          }}
          zoom={15}
          center={{
            lat: 49.260368,
            lng: -123.003769,
          }}
        >
          <Marker onLoad={onLoad} position={position} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default App;
