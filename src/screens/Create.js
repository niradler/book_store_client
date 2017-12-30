import React, { Component } from 'react';
import BookForm from '../components/BookForm'
import server from '../server'
class Create extends Component {
    constructor(props){
        super()
        this.state={
                book:{},
                title:"Add new Book",
                btnTitle:'Add',
                dialog:{
                    title:"Book Added!",
                    body:"Congrats! new book added, back to Browse?"
            }
        }
    
        this.formSubmit=this.formSubmit.bind(this);
        this.dialogOnAccept=this.dialogOnAccept.bind(this);
      }

      dialogOnAccept(){
        this.props.history.push('/')
      }
      formSubmit(book){
        this.setState({book},()=>{
            server.add(book).then((r)=>{
                console.log('book added',r.data);
            })
        });
        }
  render() {
    return (
      <div className="Create">

            <BookForm properties={this.state} dialogOnAccept={this.dialogOnAccept} formSubmit={this.formSubmit} type='create'/>
            

      </div>
    );
  }
}

export default Create;
