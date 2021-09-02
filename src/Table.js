import React from "react";

export default function Table({ data }) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table border="1" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>First_Name</th>
            <th>Last_Name</th>
            <th>City</th>
            <th>State</th>
            <th>Country</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person, id) => (
            <tr key={id} style={{ textAlign: "left" }}>
              <td>{person.name.first}</td>
              <td>{person.name.last}</td>
              <td>{person.location.city}</td>
              <td>{person.location.state}</td>
              <td>{person.location.country}</td>
              <td>{person.dob.age}</td>
              <td>{person.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
