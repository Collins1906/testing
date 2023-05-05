import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsCart4 } from "react-icons/bs";

export default function Shoping() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        width: "100%",
      }}
    >
      <Card style={{ width: "70%", marginTop: "2rem", marginBottom: "2rem" }}>
        <Card.Body>
          <div style={{display: 'flex',flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
          <Card.Title style={{width: "100%"}}>
            <BsCart4></BsCart4> Order Now
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Air Jordan 6 Travis Scott
          </Card.Subtitle>
          </div>
          <Card.Text>
            The upper of the Air Jordan 6 Retro Travis Scott British Khaki is
            made of British Khaki suede. From there, hits of Bright Crimson
            appear on the heel and tongue embroidered logos. The upper also has
            two cargo pockets: one with a snap enclosure on the lateral ankle
            and one with a zip enclosure on the medial ankle. A translucent
            tongue, heel tab, and outsole that glows in the dark adds the
            finishing touches to this latest Travis Scott Jordan.
          </Card.Text>
          <form action="/shopping" style={{display: 'flex',flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
            <Button style={{ backgroundColor: "#d3c89a", border: "none", width:"20%" }} href="shopping">
              Order Here
            </Button>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}
