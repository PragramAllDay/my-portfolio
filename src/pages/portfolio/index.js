import React, { useEffect } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-left");
        } else {
          entry.target.classList.remove("show-left");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".hidden-left");
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });

    const observerTwo = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-right");
        } else {
          entry.target.classList.remove("show-right");
        }
      });
    });
    const hiddenElementsTwo = document.querySelectorAll(".hidden-right");
    hiddenElementsTwo.forEach((element) => {
      observerTwo.observe(element);
    });
  }, []);
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3 hidden-left">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item project hidden-left">
                <img src={data.img} alt="" />

                <div className="content">
                  <p>{data.description}</p>
                  <a href={data.link} target="blank">
                    view project
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
