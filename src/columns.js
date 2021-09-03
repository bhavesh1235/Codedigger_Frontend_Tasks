import data from "./data.js";
import { ColumnFilter } from "./components/ColumnFilter";

export const Columns = [
  {
    Header: "First_Name",
    accessor: "name.first",
    Filter: ColumnFilter
  },
  {
    Header: "Last_Name",
    accessor: "name.last",
    Filter: ColumnFilter
  },
  {
    Header: "City",
    accessor: "location.city",
    Filter: ColumnFilter
  },
  {
    Header: "State",
    accessor: "location.state",
    Filter: ColumnFilter
  },
  {
    Header: "Country",
    accessor: "location.country",
    Filter: ColumnFilter
  },
  {
    Header: "Age",
    accessor: "dob.age",
    Filter: ColumnFilter
  },
  {
    Header: "Gender",
    accessor: "gender",
    Filter: ColumnFilter
  }
];
