import React from "react";
import { Route, Switch } from "react-router-dom";
import Error from "./path/error";
import Menu from "./path/Menu";
import Setme from "./path/dynamicpage";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Mycard from "./mycard";
// axios.get(`http://localhost/simplephpapi/api.php?order_id=181`).then((res) => {
//   const persons = res.data;
//   this.setState({ persons });
// });
function App() {
  const [value, updatevalue] = useState(0);
  const [fatchdata, updatedata] = useState(["default", "default", "default"]);
  useEffect(() => {
    async function getdata() {
      const res = await axios.get("http://localhost/apiall.php");
      console.log(res.data);
      const arrdata = res.data;
      updatedata(arrdata);
      // console.log("hlw");
    }
    console.log(fatchdata);
    getdata();
  }, []);

  if (value > 0) {
    document.title = `You Click it ${value} times `;
  } else {
    document.title = "welcome";
  }

  return (
    <>
      <button
        onClick={() => {
          updatevalue(value + 1);
        }}
      >
        Click me
      </button>
      <Menu />
      <Switch>
        <Route exact path="/about" component={() => <Setme name="About" />} />
        <Route
          exact
          path="/contact"
          component={() => <Setme name="contact" />}
        />
        <Route exact path="/" component={() => <Setme name="Index" />} />
        <Route exact path="/home" component={() => <Setme name="Home" />} />
        <Route component={Error} />
      </Switch>

      {fatchdata.map((value) => {
        return (
          <div style={{ background: "aqua", border: "5px red solid" }}>
            {/* <h1 className="heading" style={{ color: "red" }}>
              Name is {value.AGENT_NAME}
            </h1>
            <h3 className="subheading">Phone-{value.PHONE_NO}</h3>
            <h3>Working Area :- {value.WORKING_AREA}</h3> */}
            <Mycard
              name={value.AGENT_NAME}
              phone={value.PHONE_NO}
              working={value.WORKING_AREA}
            />
          </div>
        );
      })}
    </>
  );
}
export default App;
