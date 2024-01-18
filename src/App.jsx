// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./Navbar";
// import { Link } from "react-router-dom";
import "./App";
const cardData = [
  {
    title: "BrihadeeswaraTemple(Thanjai Periya Kovil) ",
    image: "/images/Tanjore-Temple.png",
    description:
      `The temple is located in Thanjavur, 
       the temple was built 1010 AD by Raja Raja CholaI of the Chola Empire`,
    date: "27 December 2018",
    comments: "No Comments",
  },
  {
    title:
      "Tiruchirappalli Rockfort",
    image: "/images/img2.jpg",
    description:
      "Located in the city of Tiruchirappalli is another one of the Seven Wonders of Tamil Nadu. It is a fortification built on a rock and is named the Tiruchirappalli Rockfort.      ",
    date: "18 November 2022",
    comments: "224 Comments",
  },
  {
    title: " Meenakshi Temple",
    image: "/images/img3.jpg",
    description:
      "The temple is located on the Vaigai River’s southern banks in Madurai, a city that is nicknamed as the Temple City.",
    date: "21 October 2023",
    comments: "651 Comments",
  },
  {
    title: "Chettinadu Palace ",
    image: "/images/img4.jpg",
    description:
      "Chettinad is a region located mainly in the Sivaganga district ruled by Ramnad kingdom of Pandya Nadu and has a small portion extending into Pudukottai District of Chola Nadu in Tamil Nadu.  The marble was brought from Italy, chandeliers ",
    date: "9 January 2024",
    comments: "734 Comments",
  },
  {
    title:
      "Vivekananda Rock Memorial, Kanyakumari",
     
    image: "/images/img5.jpg",
    description:
      "The Vivekananda Rock Memorial was constructed in 1970, It is a sacred memorial built on a rock in the ocean 500m off the mainland. It is believed that Swami Vivekananda had swam to this rock for meditation",

         date: "22 July 2023",
    comments: "2523 Comments",
  },
  {
    title: "Shore temple, a world heritage site in Mamallapuram",
    image: "/images/img6.avif",
    description:
      "The Shore Temple (c. 725 AD) is a complex of temples and shrines that overlooks the shore of the Bay of Bengal. It is located in Mahabalipuram, about 60 kilometres (37 mi) south of Chennai in Tamil Nadu, India.It is a structural temple, built with blocks of granite, dating from the 8th century AD",
    date: "10 June 2023",
    comments: "1982 Comments",
  },
];

export default function App() {
  return (
    <div className="bg-info">
      <Navbar />
      <div className="container">
        <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
          {cardData.map((card, index) => (
            <div className="col-lg col-md-6" key={index}>
              <div className="card h-80 ">
                <div>
                  <img
                    src={card.image}
                    className="card-img-top"
                    alt="giri"
                  />
                </div>
                <div className="card-body mt-2">
                  <h5
                    className="card-title" 
                    style={{
                      fontSize: "21px",
                      lineHeight: "21px",
                      fontWeight: "400",
                      fontFamily: "sans-serif",
                    }}
                  >
                    {card.title}
                  </h5>
                  <p
                    className="card-text text-secondary"
                    style={{ fontSize: "14px" }}
                  >
                    {card.description}
                  </p>
                  <p
                    style={{
                      color: "#007dfe",
                      fontWeight: "bold",
                      fontSize: "12px",
                      lineHeight: "12px",
                    }}
                  >
                    READ MORE »
                  </p>
                </div>
                <div
                  className="card-footer bg-secondary"
                  style={{ lineHeight: "15px" }}
                >
                  <small className="text-white d-inline-flex w-100 text-align-left">
                    {card.date}{" "}
                    <ul>
                      <li>{card.comments}</li>
                    </ul>
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
