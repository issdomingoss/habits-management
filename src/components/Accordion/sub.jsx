import React from "react";
import { Lista } from "./styled";
import { BiCheckCircle } from "react-icons/bi";
const Sub = ({ activities }) => {
  return (
    <>
      {activities.map((item) => (
        <Lista key={item.id}>
          <BiCheckCircle className="check-icon" /> {item.title}
        </Lista>
      ))}
    </>
  );
};

export default Sub;
