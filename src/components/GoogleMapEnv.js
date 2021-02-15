import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const GoogleMapEnv = withScriptjs(
  withGoogleMap((props) => {
    return (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 54.352024, lng: 18.646639 }}
      >
        {props.isMarkerShown && (
          <Marker position={{ lat: 18.646639, lng: 18.646639 }} />
        )}
      </GoogleMap>
    );
  })
);

export default GoogleMapEnv;
