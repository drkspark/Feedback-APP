import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage(props) {
  return (
    <Card>
      <div className={"about"}>
        <h1>About Page</h1>
        <p>
          This is my first react app, that can be used to leave feedback for a
          product or service
        </p>
        <p>Version: 1.0.0</p>

        <p>
          <Link to={"/"}>back To Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
