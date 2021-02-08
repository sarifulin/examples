import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tab, Tabs } from "react-bootstrap";
import MainTab from "./MainTab";
import MyCabinet from "./MyCabinet";
import Visualisations from "./Visualisations";
import data from "../data/jobs_base.json";

const App = () => {
  return (
    <div>
      <Tabs defaultActiveKey="main" id="uncontrolled-tab-example">
        <Tab eventKey="main" title="Jobs">
          <MainTab jobs={data} />
        </Tab>
        <Tab eventKey="mycabinet" title="My Cabinet">
          <MyCabinet />
        </Tab>
        <Tab eventKey="visualisations" title="Visualisations">
          <Visualisations />
        </Tab>
      </Tabs>
    </div>
  );
};

export default App;
