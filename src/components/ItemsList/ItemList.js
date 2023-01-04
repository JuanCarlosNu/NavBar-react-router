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
handleChange = event=> {
  console.log(event.target.value)
 } 
  render(){ 

     return (
     <div className="ItemList">
      <form className="search__form">
        <input className="search__input" type="text" placeholder="search course" onChange={this.handleChange}></input>
      </form>
     

    <div className="courses">

      {this.state.courses.map(course => (
        <Item key={course.id} course={course} />
      ))}
    </div>
    </div>
  )};
};

export default ItemList;
