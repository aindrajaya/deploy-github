import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import ImageShow from ".";
import TransferApp from "../day4/TransferApp";
import NavigationBar from "./Nav";

export default function RouterApp() {
  return (
    <div>
      <NavigationBar />
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <ImageShow />
        </Route>
        <Route path="/users">
          <TransferApp />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}