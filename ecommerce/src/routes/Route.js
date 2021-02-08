import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../Context/Auth";
export default function RouteRedirect({
  component: Component,
  isPrivate = false,
  isLogin = false,
  isRegister = false,
  ...rest
}) {
  const { user } = useAuth();
  if(!user && isPrivate ) {
    return <Redirect to="/login"/>
  }
  if(user && isLogin ) {
    return <Redirect to="/"/>
  }
  if(user && isRegister ) {
    return <Redirect to="/"/>
  }
  return <Route {...rest} component={Component} />;
}