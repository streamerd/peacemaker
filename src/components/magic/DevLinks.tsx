import Link from "next/link";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap"; // Import Card and Button components

const DevLinks = ({
  primary = false,
  footer = false,
}: {
  primary?: boolean;
  footer?: boolean;
}) => (
  <div
    className={`action-links ${
      footer ? "footer-links" : ""
    } d-flex flex-wrap flex-column flex-sm-row justify-content-center`}
  >
    <OverlayTrigger
      placement="bottom"
      overlay={
        <Tooltip id="tooltip-bottom" className="custom-tooltip">
          Visit aworldpeace.org and learn about your right to make peace.
        </Tooltip>
      }
    >
      <Link
        href="https://aworldpeace.org"
        target="_blank"
        rel="noopener noreferrer"
        className="action-link"
      >
        <Card className="action-card">
          <Card.Body>
            <Card.Title>Learn More</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </OverlayTrigger>
    <OverlayTrigger
      placement="bottom"
      overlay={
        <Tooltip id="tooltip-bottom" className="custom-tooltip">
          PoP is a certificate which signifies the joint efforts of two parties
          to engage in a peace treaty as sovereign individuals; representing
          their fellow countries in the peacemaking, as rightful citizens.
        </Tooltip>
      }
    >
      <Link href="/peace" className="action-link">
        <Card className="action-card">
          <Card.Body>
            <Card.Title>Proof of Peacemaking</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </OverlayTrigger>
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
