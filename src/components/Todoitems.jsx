import React from "react";
import { Todoitem } from "./Todoitem";
import '../App'

export const Todoitems = ({ todoItems }) => {
  return (
    <>
      <div className="container">
        {todoItems.map((item, index) => (
          <Todoitem
            key={index}
            ToDo_Time={item.name}
            ToDo_WOrk={item.dueDate}
          ></Todoitem>
        ))}
      </div>
    </>
  );
};

export default Todoitems;
