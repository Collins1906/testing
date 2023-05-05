import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Info from "./subBody/Info";
import Shoping from "../Shoping/Shoping";
import "./Body.scss";

export default function Body() {
  return (
    <>
      <div className="row">
        <Info></Info>
      </div>
      

      <div className="row bg-img">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: 16 + "px",
          }}
        >
          <h1>Air Jordan 6 Travis Scott</h1>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: 16 + "px",
          }}
        >
          <h6>7,349,000₫</h6>
        </div>
      </div>


      <div className="row ">
        <div className="col-1"></div>

        <div
          className="col-6"
          style={{
            backgroundColor: "gray",
          }}
        >
          <div className="row ">
            <div className="col-6 paddingBottom paddingTop">
              <div className="img-card">
              <img
                className="img"
                src="https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/49f6ae8b-43cb-4ddf-a0b6-f0abb145baa4/air-jordan-6-travis-scott-release-date.jpg"
                alt=""
              />
              </div>
            </div>
            <div className="col-6 paddingBottom paddingTop">
              <div className="img-card">
              <img
                className="img"
                src="https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/129ded23-4f47-419e-9283-1fc104afe167/air-jordan-6-travis-scott-release-date.jpg"
                alt=""
              />
              </div>
            </div>
          </div>

          <div className="row ">
            <div className="col-6 paddingBottom ">
              <div className="img-card">
              <img
                className="img"
                src="https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/3a7a98a2-756f-4f4f-80db-593caba08ec7/air-jordan-6-travis-scott-release-date.jpg"
                alt=""
              />
              </div>
            </div>
            <div className="col-6 paddingBottom">
              <div className="img-card">
              <img
                className="img "
                src="https://static.nike.com/a/images/t_prod_sc/w_640,c_limit,f_auto/57a28c52-e5f1-450c-876b-a97fc4837267/air-jordan-6-travis-scott-release-date.jpg"
                alt=""
              />
              </div>
            </div>
          </div>

          <div className="row ">
            <div className="col-6 ">
              <div className="img-card">
              <img
                className="img"
                src="https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/0d0a30ff-8672-4a2f-b084-6686e75a446c/air-jordan-6-travis-scott-release-date.jpg"
                alt=""
              />
              </div>
            </div>
            <div className="col-6">
              <div className="img-card">
                <img
                  className="img"
                  src="https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/044aee54-95a6-4be0-b15c-8b48a1f3d91f/air-jordan-6-travis-scott-release-date.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-4">
        <Card style={{ width: "30rem" }} className="marginTop">
            <Card.Body>
              <iframe
                width= "450"
                height="310"
                src="https://www.youtube.com/embed/KEPqpFHaBPw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Card.Body>
          </Card>

          <Card style={{ width: "30rem" }} className="marginTop">
            <Card.Body>
              <Card.Title>Travis Scott’s Sneaker Collaborations</Card.Title>
              <Card.Text>
                Despite no official signature sneaker to speak of like the
                aforementioned names, Nike has let Scott put his spin on various
                silhouettes.{" "}
              </Card.Text>
              <Button
                style={{
                  backgroundColor: '#d3c89a',
                  color: 'black',
                  border: 'none'
                }}
                className="buttons"
                href="https://complexphilippines.com/sneakers/travis-scott-sneaker-collaborations-ranked/"
              >
                Read More
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "30rem" }} className="marginTop">
            <Card.Body>
              <Card.Title>
                When did Travis Scott start his relationship with Nike?
              </Card.Title>
              <Card.Text>
                Travis Scott started working with Nike in summer 2018 and has
                recently released a new colour-way of the Air Jordan 1 Low with
                the brand.
              </Card.Text>
              <Button
                style={{
                  backgroundColor: '#d3c89a',
                  color: 'black',
                  border: 'none'
                }}
                className="buttons"
                href="https://www.capitalxtra.com/artists/travis-scott/nike-jordan-air-force-low-collaboration-date-timeline-endorsement-sneaker/#:~:text=When%20did%20Travis%20Scott%20and,football%20team%20of%20Scott%27s%20childhood."
              >
                Read More
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      

      <div className="row">
        <Shoping></Shoping>
      </div>


    
    </>
  );
}
