import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MiddleCard.css";
import Orphan from "../../images/Orphan_ 1.png";
import homeless_people from "../../images/homeless_people_active_1.png";
import Malnutritio_child from "../../images/Malnutritio_ Child_2.png";
import HelpCard from "../HelpCard/HelpCard";
import { Row, Col, Card, Button } from "react-bootstrap";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function MiddleCard() {
  const [data] = useState([
    {
      heading: "MALNUTRITION CHILDREN’S",
      para:
        "Trace Malnutrition Children’s and provides them proper meal so they can grow up better",
      imgs: Malnutritio_child,
    },
    {
      heading: "Homeless People",
      para:
        "Feed homeless people and assist them to get back on their feet by providing job opportunities",
      imgs: homeless_people,
    },
    {
      heading: "Orphans",
      para: "Provide them nutritional meals and gifts so they don’t feel alone",
      imgs: Orphan,
    },
  ]);

  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200, // Extra-large screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992, // Large screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // iPad mini and similar small screens
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  

  const slideNext = () => {
    sliderRef.current.slickNext();
  };

  const slidePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="middle-container">
      <center>
        <div className="work-header ">
          <Row >
          <h1 className="pt-5">For Whom We Work</h1>
          </Row>
          <br />
          <Row className="m-2">
            <Col >
            <p >
            We Work Selflessly to help homeless people, malnutrition
            children’s and unemployed women’s seeking support
          </p>
            </Col>
          </Row>
        </div>
        <div className="slider-container">
          <Slider {...settings} ref={sliderRef}>
            {data.map((dta, id) => (
              <div className="helpingcards" key={id}>
                <Card  className="card-spacing mt-5">
                  <Card.Body className="d-flex flex-column ">
                    <div className="flex-grow-1">
                      <Card.Title className="heading">{dta.heading}</Card.Title>
                      <div className="position-relative mt-3">
                        <div className="position-absolute bottom-0 end-0 card-line"></div>
                      </div>
                      <div className="mb-5 position-relative" style={{marginBottom:"50px"}}>
                        <Card.Text variant="top" className="position-absolute mt-4 card-text ">
                          {dta.para}
                        </Card.Text>
                      </div>
                    </div>
                    <div className="position-relative">
                      <Card.Img
                        variant="top"
                        className="position-absolute bottom-0 end-0"
                        style={{ width: "100px" }}
                        src={dta.imgs}
                      />
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Slider>
          <div className="slider-buttons">
            <Button className="slider-button" onClick={slidePrev}>
              <FaAngleLeft />
            </Button>
            <Button className="slider-button" onClick={slideNext}>
              <FaAngleRight />
            </Button>
          </div>
        </div>
        <Button className="mt-5 " id="member_but">
          Become A Member
        </Button>
      </center>

      <div className="mt-5">
        <HelpCard />
      </div>
    </div>
  );
}

export default MiddleCard;
