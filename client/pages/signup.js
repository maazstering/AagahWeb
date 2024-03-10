import { useState } from "react";
import axios from "axios";

const signup = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  //Function for submit button
  const handleSubmit = e=> {
    e.preventDefault();
    axios.post('http://localhost:8000/api/signup',{
        name,email,password
    })
    .then((res)=> console.log(res))
    .catch((err)=> console.log(err))
    //console.log(name, email, password);
  };

  return (
    <div className="container-fluid">
      <div className="row py-5">
        <div className="col text-light text-center">
          <h1>Signup to Aagah</h1>
          <p>Stay informed, Stay updated</p>
        </div>

        <div className="row p-3">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={handleSubmit}>
              {/*Form*/}

              <div className="form-group p-2">
                <label
                  className="text-muted"
                  style={{ color: "white !important" }}
                >
                  Name
                </label>
                <input
                  onChange={(e) => setname(e.target.value)}
                  value={name}
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group p-2">
                <label
                  className="text-muted"
                  style={{ color: "white !important" }}
                >
                  Email
                </label>
                <input
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group p-2">
                <label
                  className="text-muted"
                  style={{ color: "white !important" }}
                >
                  Password
                </label>
                <input
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                />
              </div>
              <div className="form-group-2 p-4 text-center">
  <button type="submit" className="btn btn-outline-secondary">Submit</button>
</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signup;
