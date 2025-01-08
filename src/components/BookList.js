import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BookCard from "./BookCard";

const BookList = ({ books }) => {
  return (
    <Container>
      {books.map((book, index) => (
        <Row key={index}>
          <Col>
            <BookCard book={book} />
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default BookList;
