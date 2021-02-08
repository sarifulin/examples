import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import columns from "../config/jobTableConfig";
import JobDetails from "./JobDetails";

const MainTab = ({ jobs }) => {
  const [row, setRow] = useState([]);
  console.log("row", row.length);

  const pilledJobs = jobs.map((singleJob) => {
    return singleJob._source;
  });

  const showTable = () => {
    return (
      <div style={{ minHeight: 650, width: "100%" }}>
        <DataGrid
          columns={columns}
          rows={pilledJobs}
          pageSize={10}
          onRowSelected={({ data }) => {
            // console.log(data);
            setRow(data);
          }}
        />
      </div>
    );
  };

  return (
    <div>
      {showTable()}
      {row && row.length != 0 ? <JobDetails jobDetails={row} /> : null}
    </div>
  );
};

export default MainTab;
