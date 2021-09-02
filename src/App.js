import "./styles.css";
import React from "react";
import Table from "./Table";
import data from "./data.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Table data={data} />
    </div>
  );
}
