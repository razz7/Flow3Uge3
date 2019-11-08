import React, { Component } from "react";
import ReactDOM from "react-dom";

class product extends Component {
  constructor(props) {
    super(props);
    this.state = { books: props.bookstore };
  }

  render() {
    return (
      <div className="container">
        <ul>
          {this.state.books._books.map(book => (
            <ul key={book.id}>{book.title}</ul>
          ))}
        </ul>
      </div>
    );
  }
}

export default product;
