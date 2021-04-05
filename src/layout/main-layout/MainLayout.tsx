import React, { Component } from "react";
import { Route, Switch } from "react-router";
import HomeComponent from "../../components/home/Home";
import PostComponent from "../../components/posts/PostComponent";
import PostItemComponent from "../../components/posts/PostItemComponent";
import TodoComponent from "../../components/todos/TodoComponent";
import UserComponent from "../../components/users/UserComponent";
import { FooterComponent } from "../footer/Footer";
import { NavbarComponent } from "../navbar/NavbarComponent";

export default class MainLayout extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <Switch>
          <Route path="/" exact component={HomeComponent} />
          <Route path="/todos" exact component={TodoComponent} />
          <Route path="/users" exact component={UserComponent} />
          <Route path="/posts" exact component={PostComponent} />
          <Route path="/posts/:id" exact component={PostItemComponent} />
        </Switch>
        <FooterComponent />
      </div>
    );
  }
}
