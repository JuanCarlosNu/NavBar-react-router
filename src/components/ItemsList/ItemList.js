import React from "react";
import courses from "../../data.json";
import Item from "../Item/Item.js";
import "./ItemList.css";

class ItemList extends React.Component {
  constructor(){
    super()
    this.state= {
      courses

    }

  }
 
  render(){  return (
    <div className="courses">
      {this.state.courses.map(course => (
        <Item key={course.id} course={course} />
      ))}
    </div>
  )}  ;
};

export default ItemList;
