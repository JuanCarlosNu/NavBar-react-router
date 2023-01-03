import React from "react";
import courses from "../../data.json";
import Item from "../Item/Item.js";
import "./ItemList.css";

const ItemList = () => {
 
  if (courses.length === 0) return "no items found";
  return (
    <div className="courses">
      {courses.map(course => (
        <Item key={course.id} course={course} />
      ))}
    </div>
  );
};

export default ItemList;
