import React, { useState } from "react";
import { Card, Row, Col, Collapse, Button } from "react-bootstrap";

const BookCard = ({ book }) => {
  const [open, setOpen] = useState(false);

  return (
    <Card
      className="mb-4"
      onClick={() => setOpen(!open)}
      aria-controls="book-description"
      aria-expanded={open}
    >
      <Row noGutters>
        <Col md={2} className="cover-art">
          <Card.Img
            variant="top"
            src={book.volumeInfo.imageLinks?.thumbnail}
            className="book-cover"
          />
        </Col>
        <Col md={10}>
          <Card.Body>
            <Card.Title>{book.volumeInfo.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {book.volumeInfo.authors?.join(", ")} <br />
              {book.volumeInfo.publishedDate
                ? `Year: ${new Date(
                    book.volumeInfo.publishedDate
                  ).getFullYear()}`
                : ""}{" "}
              <br />
              Rating:{" "}
              {book.volumeInfo.averageRating
                ? book.volumeInfo.averageRating
                : "N/A"}
            </Card.Subtitle>
            {!open && (
              <Card.Text>
                {book.volumeInfo.description
                  ? `${book.volumeInfo.description
                      .split(" ")
                      .slice(0, 10)
                      .join(" ")}...`
                  : ""}
              </Card.Text>
            )}
            <Collapse in={open}>
              <div id="book-description">
                <Card.Text>{book.volumeInfo.description}</Card.Text>
                <Button
                  variant="primary"
                  href={`https://www.google.com/search?q=${encodeURIComponent(
                    book.volumeInfo.title
                  )}+book`}
                  target="_blank"
                >
                  Buy
                </Button>
              </div>
            </Collapse>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default BookCard;
