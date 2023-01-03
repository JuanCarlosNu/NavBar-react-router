import React from "react";
import { Link } from "react-router-dom";
import courses from "../../data.json";
import "./ItemDetails.css";

const ItemDetails = props => {
  const courseID = props.match.params.id;
  const course = courses.find(c => c.id === Number(courseID)); // we are turning the id that we got from the link to a number, cause it was a string and didnt match the json file property

  return (
    <div className="item__details">
      <div className="course__img--container-d">
        <img
          src={course.courseImage}
          alt={course.title}
          className="course__img-d"
        />
      </div>

      <div className="item__details--content">
        <Link to={`/courses/${course.id}`}  >
        <h4 className="course__title-d">{course.title}</h4>
        </Link>
        <p className='course__desc-d'>{course.desc}</p>
        <span className="course__author-d">By: {course.author}</span>
        <span className="course__price-d">{course.price}$</span>
        <span
          className={course.isHot ? "course__status-d hot-d" : "course__status-d"}
        >
          {course.isHot ? "Hot" : null}
        </span>
        <div className="catigories-d">
          {course.catigories.map((cat, index) => {
            return (
              <span key={index} className="cat-d">
                {cat}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
