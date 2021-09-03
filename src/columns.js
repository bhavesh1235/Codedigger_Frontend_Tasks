import data from "./data.js";

export const Columns = [
  {
    Header: "First_Name",
    accessor: "name.first"
  },
  {
    Header: "Last_Name",
    accessor: "name.last"
  },
  {
    Header: "City",
    accessor: "location.city"
  },
  {
    Header: "State",
    accessor: "location.state"
  },
  {
    Header: "Country",
    accessor: "location.country"
  },
  {
    Header: "Age",
    accessor: "dob.age"
  },
  {
    Header: "Gender",
    accessor: "gender"
  }
];
