import React from "react";
import Form from "./Form";

export default {
  title: "Views/LoginForm",
  component: Form,
};

export const Primary = () => (
  <Form handleSubmit={(values) => console.log(values)} btnText="Login" />
);
