import React, { Component } from 'react';
import { getBookWithReviewer, clearBookWithReviewer  } from '../../actions';
import { connect } from 'react-redux';

class BookView extends Component {

	componentWillMount() {
		this.props.dispatch(getBookWithReviewer(this.props.match.params.id))
	}

	componentWillUnmount(){
		this.props.dispatch(clearBookWithReviewer());
	}

	renderBook = (books) => (
		books.book ?
			<div className="br_container">
				<div className="br_header">
					<h2>{books.book.name}</h2>
					<h5>{books.book.author}</h5>
					<div className="br_reviewer">
						<span>Review by:</span> {books.reviewer.name} {books.reviewer.lastname}
					</div>
				</div>
				<div className="br_review">
					{books.book.review}
				</div>
				<div className="br_box">
					<div className="left">
						<div>
							<span>Pages: {books.book.pages}</span>
						</div>
						<div>
							<span>Price: ${books.book.price}</span>
						</div>
					</div>
					<div className="right">
						<span>Rating</span>
						<div>{books.book.rating}/5</div>
					</div>
				</div>
			</div>
		: null
	)

	render() {
		console.log(this.props);
		let  books = this.props.books;

		return (
			<div>
				{this.renderBook(books)}
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		books: state.books
	}
}

export default connect(mapStateToProps)(BookView);