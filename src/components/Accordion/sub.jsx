import React from "react";
import { Lista } from "./styled";
const Sub = ({ activities }) => {
  return (
    <ul>
      {activities.map((item) => (
        <Lista key={item.id}>{item.title}</Lista>
      ))}
    </ul>
  );
};

export default Sub;
