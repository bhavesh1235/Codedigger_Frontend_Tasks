import React, { useState } from "react";
import List from "./List";
import axios from "axios";

const ApiFetchPage = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const Url = "https://api.codedigger.tech/auth/search-user?q=";

  const handleSubmit = (e) => {
    e.preventDefault();

    axios(`${Url}${name}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="section-center">
      <form className="form" onSubmit={handleSubmit}>
        <h3>Search Users</h3>
        <div className="form-control">
          <input
            type="text"
            className="search"
            placeholder="eg. shivam"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <button type="submit" className="submit-btn">
          {"submit"}
        </button>
      </form>
      <div className="cocktails-center">
        {data.map((item, index) => {
          return <List key={index} {...item} />;
        })}
      </div>
    </section>
  );
};

export default ApiFetchPage;
