import React, { Component } from 'react';
import {
  TextFieldIcon,
  TextField
} from 'rmwc';
import {Grid, GridCell} from 'rmwc';
import BookThumbnail from '../components/BookThumbnail';
import server from '../server'
class Browse extends Component {
  constructor(props){
    super()
this.state={
books:[]
}
this.search=this.search.bind(this);
  }
    componentWillMount(){
        server.getAll().then((r)=>{
        this.setState({books:r.data})
        });
    }
    search(e){
      const q = e.target.value;
      server.search(q).then((r)=>{
        this.setState({books:r.data})
        });
    }
  render() {
    return (
      <div className="Browse">
      <Grid>
      <GridCell span="5">

      </GridCell>
      <GridCell span="7">
   
        <TextField onChange={this.search} withLeadingIcon={<TextFieldIcon use="search"/>} label="Search something..." /><br/>
    
      
      </GridCell>
      </Grid>
    <Grid>
      {this.state.books.map(book=>(
        <GridCell span="4" key={book.id}>
        <BookThumbnail book={book} />
        </GridCell>
      ))}
                </Grid>
      </div>
    );
  }
}

export default Browse;
