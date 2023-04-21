import React from "react";

const TourLocation = (props) => {
  const { img, date, title, text, location, duration, amount } = props.tour;
  return (
    <div>
      <article className="tour-card">
        <div className="tour-img-container">
          <img src={img} className="tour-img" alt="" />
          <p className="tour-date">{date}</p>
        </div>
        <div className="tour-info">
          <div className="tour-info">
            <h4>{title}</h4>
          </div>
          <p>{text}</p>
          <div className="tour-footer">
            <p>
              <span>
                <i className="fas fa-map"></i>
              </span>
              {location}
            </p>
            <p>{duration}</p>
            <p>{amount}</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default TourLocation;
