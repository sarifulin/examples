const columns = [
  { field: "id", headerName: "ID", hide: true },
  {
    field: "posted",
    headerName: "Posted Time",
    type: "datetime",
    width: 200,
  },
  {
    field: "updated",
    headerName: "Updated Time",
    type: "datetime",
    width: 200,
  },
  { field: "title", headerName: "Title", width: 300 },
  {
    field: "hourly.gte",
    headerName: "hourly.gte",
    valueGetter: ({ row }) => {
      if (row && row.hourly) {
        return row.hourly.gte;
      } else {
        return "-";
      }
    },
    width: 100,
  },
  {
    field: "hourly.lte",
    headerName: "hourly.lte",
    valueGetter: ({ row }) => {
      if (row && row.hourly) {
        return row.hourly.lte;
      } else {
        return "-";
      }
    },
    width: 100,
  },
  {
    field: "budget",
    headerName: "Budget",
    valueGetter: ({ row }) => {
      if (row && row.budget) {
        return row.budget;
      } else {
        return "-";
      }
    },
    width: 100,
  },
  { field: "country", headerName: "Country", width: 150 },
  { field: "skills", headerName: "Country", width: 300 },
  {
    field: "href",
    headerName: "Link",
    width: 200,
  },
];
export default columns;
