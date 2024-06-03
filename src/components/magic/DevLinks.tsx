import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { Card, Button } from "react-bootstrap"; // Import Card and Button components

const DevLinks = ({
  primary = false,
  footer = false,
}: {
  primary?: boolean;
  footer?: boolean;
}) => (
  // <div className={`links ${footer? "footer-links" : ""} d-flex flex-wrap justify-content-center`}>
  <div className={`action-links ${footer? "footer-links" : ""} d-flex flex-wrap flex-column flex-sm-row justify-content-center`}>
    <Link
      href="https://aworldpeace.org"
      target="_blank"
      rel="noopener noreferrer"
      className="action-link"
    >
      <Card className="action-card">
        <Card.Body>
          <Card.Title>Learn How</Card.Title>
          {/* <Card.Text>PEACE</Card.Text> */}
        </Card.Body>
      </Card>
    </Link>
    <Link href="/peace" className="action-link">
      <Card className="action-card" >
        <Card.Body>
          <Card.Title>Proof of Peacemaking</Card.Title>
          {/* <Card.Text>
             PEACE
          </Card.Text> */}
        </Card.Body>
      </Card>
    </Link>
    <Link href="/recognition" className="action-link">
      <Card className="action-card">
        <Card.Body>
          <Card.Title>Proof of Recognition</Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    </Link>
  </div>
);

export default DevLinks;
