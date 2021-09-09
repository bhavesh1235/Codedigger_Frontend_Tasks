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
    <div className="col-md-4 animated fadeIn">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {`Name: ${name}`}
            <span
              style={{ marginLeft: "50px" }}
            >{`Username: ${username}`}</span>
          </h5>
          <p className="card-text">
            {`Email: ${email}`}
            <br />
          </p>
          <p className="card-text">
            {`Codeforces: ${codeforces}`}
            <br />
          </p>
          <p className="card-text">
            {`Codechef: ${codechef}`}
            <br />
          </p>
          <p className="card-text">
            {`Spoj: ${spoj}`}
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default List;
