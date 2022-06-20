import React from "react";
import Input from "./Input";

export default {
  title: "Input",
  component: Input,
};

export const Primary = () => (
  <Input type="text" label="Name" placeholder="Petras" />
);
