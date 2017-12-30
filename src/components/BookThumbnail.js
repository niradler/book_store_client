import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {
  Card,
  CardPrimary,
  CardTitle,
  CardAction,
  CardSupportingText,
  CardActions,
  CardMedia,
  CardSubtitle,
  Icon
} from 'rmwc';
import moment from 'moment'
const barStyle={
  textDecoration: 'none'
}
class BookThumbnail extends Component {
  render() {
    return (
      <div className="BookThumbnail">
        
    <Card style={{width: '320px'}} >
	<CardMedia >
    <img src="/book_store_client/book_cover.jpg" alt="" style={{
		height: '16.313rem'
	}}/>
	</CardMedia>
	<CardPrimary>
		<CardTitle large>{this.props.book.title}</CardTitle>
		<CardSubtitle>{this.props.book.author}</CardSubtitle>
	</CardPrimary>
	<CardSupportingText>
    {moment(this.props.book.publication_date,'YYYY-MM-DD').format('MMM Do YYYY') }
	</CardSupportingText>
	<CardActions>
	 <CardAction>{this.props.book.genre}</CardAction>
		<CardAction>{this.props.book.ISBN}</CardAction> 
        <CardAction>{this.props.book.price}$</CardAction> 
        <CardAction><Link to={`/update/${this.props.book.id}`} style={barStyle}><Icon>edit</Icon></Link></CardAction> 
	</CardActions>
</Card>
</div>
    );
  }
}

export default BookThumbnail;
