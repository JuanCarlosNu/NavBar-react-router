import React from "react";
import courses from "../../data.json";
import Item from "../Item/Item.js";
import "./ItemList.css";

class ItemList extends React.Component {
  constructor(){
    super()
    this.state= {
      courses,
      inputSearch: "",


    }

  }
handleChange = event=> {
  //console.log(event.target.value)
  this.setState({
    inputSearch: event.target.value
  });
  console.log(this.state.inputSearch);
 } 
 
  render(){ 
    const filtered = this.state.courses.filter(c => c.title.includes(this.state.inputSearch))
     return (
     <div className="ItemList">
      <form className="search__form">
        <input className="search__input" type="text" placeholder="search course" onChange={this.handleChange} value={this.state.inputSearch}></input>
      </form>
     

    <div className="courses">

      {filtered.map(course => (
        <Item key={course.id} course={course} />
      ))}
    </div>
    </div>
  )};
};

export default ItemList;
