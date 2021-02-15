import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tab, Tabs } from "react-bootstrap";
import MainTab from "./MainTab";
import MyCabinet from "./MyCabinet";
import Visualisations from "./Visualisations";
import GoogleMapEnv from "./GoogleMapEnv";
import data from "../data/jobs_base.json";

const App = () => {
  const pilledJobs = data.map((singleJob) => {
    return singleJob._source;
  });
  return (
    <div>
      <Tabs defaultActiveKey="main" id="uncontrolled-tab-example">
        <Tab eventKey="main" title="Jobs">
          <MainTab jobs={pilledJobs} />
        </Tab>
        <Tab eventKey="mycabinet" title="My Cabinet">
          <MyCabinet />
        </Tab>
        <Tab eventKey="visualisations" title="Visualisations">
          <Visualisations data={pilledJobs} />
        </Tab>
        <Tab eventKey="googleMap" title="Google Map">
          <div style={{ width: "100vw", height: "100vh" }}>
            <GoogleMapEnv
              isMarkerShown={true}
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default App;
