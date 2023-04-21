import React from "react";
import Title from "../Title";
import TourLocation from "./TourLocation";
import { tours } from "../../data";
const Tours = () => {
  return (
    <div>
      <section className="section" id="tours">
        <Title title="featured" subtitle="tools"></Title>
        <div className="section-center featured-center">
          {tours.map((tour) => {
            return <TourLocation key={tour.id} tour={tour}></TourLocation>;
          })}
        </div>
      </section>
    </div>
  );
};

export default Tours;
