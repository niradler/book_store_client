import React, { Component } from 'react';
import {LinearProgress,Card,CardSupportingText,Button,Typography} from 'rmwc';
import BookForm from '../components/BookForm'
import server from '../server'
class Update extends Component {
  constructor(props){
    super()
    this.state={
            book:{},
            title:"Update",
            btnTitle:'Update',
            dialog:{
                title:"Book updated!",
                body:"Congrats! the book as updated, back to Browse?"
        }
    }

    this.formSubmit=this.formSubmit.bind(this);
    this.dialogOnAccept=this.dialogOnAccept.bind(this);
    this.delete=this.delete.bind(this);
  }
  componentWillMount(){
      server.get(this.props.match.params.id).then((r)=>{
          this.setState((prevState)=>{
            prevState.book = r.data
              return prevState
          })
      })
  }
  dialogOnAccept(){
    this.props.history.push('/')
  }
  formSubmit(book){
    this.setState({book},()=>{
        server.update(book.id,book).then((r)=>{
            console.log('book updated',r.data);
        })
    });
    }
    delete(){
        const id = this.state.book.id;
        server.delete(id).then((r)=>{
          this.props.history.push('/')
        })
    }
  render() {
    return (
      <div className="Update">
          {this.state.book.id ? (
              <div>

            <BookForm properties={this.state} dialogOnAccept={this.dialogOnAccept} formSubmit={this.formSubmit} type='update'/> 
            <Card style={{width: '520px'}} >
	<CardSupportingText>
        <Typography use="headline">This operation is permanent!  </Typography>
    <Button raised onClick={this.delete} theme={['secondary-bg', 'text-primary-on-secondary']}>Delete</Button>
	</CardSupportingText>

</Card>
            </div>
            ):
            <LinearProgress determinate={false}></LinearProgress>
          }
      </div>
    );
  }
}

export default Update;
