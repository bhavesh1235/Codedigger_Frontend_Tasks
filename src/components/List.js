import React from "react";

const List = ({
  name,
  codeforces,
  codechef,
  atcoder,
  spoj,
  uva_handle,
  username,
  email,
  about_user,
  about_mentor
}) => {
  return (
    <div className="card-container">
      <header>
        <h1 className="bold-text">
          {name} <span className="normal-text">{username}</span>
        </h1>
      </header>
      <h2 className="normal-text">{`Email: ${email}`}</h2>
      <div className="search-container">
        <div className="codechef">
          <h1 className="bold-text">{codechef}</h1>
          <h2 className="smaller-text">Codechef</h2>
        </div>
        <div className="codeforces">
          <h1 className="bold-text">{codeforces}</h1>
          <h2 className="smaller-text">Codeforces</h2>
        </div>
        <div className="atcoder">
          <h1 className="bold-text">{atcoder}</h1>
          <h2 className="smaller-text">Atcoder</h2>
        </div>
        <div className="spoj">
          <h1 className="bold-text">{spoj}</h1>
          <h2 className="smaller-text">Spoj</h2>
        </div>
      </div>
    </div>
  );
};

export default List;
