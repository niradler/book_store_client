import React, { Component } from 'react';
import {
    Grid,
    GridCell,
    FormField,
    TextField,
    Card,
    CardPrimary,
    CardTitle,
    CardSupportingText,
    Button,
    TextFieldHelperText,
    Dialog
} from 'rmwc';

import Validator from '../util/Validator'

class BookForm extends Component {
  constructor(props){
    super()
    this.state={
        book:{},
        hasErrors:{},
        dialogIsOpen:false,
        title:"",
        btnTitle:"",
        dialog:{
            title:"",
            body:""
    }
    }
    this.onSubmit=this.onSubmit.bind(this);
    this.onChange=this.onChange.bind(this);
  }
componentWillMount(){
    this.setState(this.props.properties)
}
  onSubmit(e){
    e.preventDefault();
    const state = this.state
    const book = state.book;
    Validator.validateAll(book,this.props.type).then(r=>{
        this.setState({dialogIsOpen: true,book:{}},()=>{
            this.props.formSubmit(book);
        });
    }).catch(e=>{
       const hasErrors= {}
       const errors = e.map((err)=>hasErrors[err.field]=err);
       state.hasErrors=hasErrors;
       this.setState(state);
    })
    
    }
onChange(e){
    const field_name = e.target.id,field_value=e.target.value;
   this.setState((prevState, props)=>{
    prevState.book[field_name]=field_value;
       return {book: prevState.book}
    })
}
  render() {
    return (
      <div className="BookForm">
          {/*     width: 313px; */}
      <Card style={{width: '520px'}}>
	<CardPrimary>
		<CardTitle large>{this.state.title}</CardTitle>
	</CardPrimary>
	<CardSupportingText>
        <form onSubmit={this.onSubmit}>
    <Grid>
    <GridCell span="12">
    <FormField>
	<TextField label="Title" id="title" type="text" value={this.state.book.title} onChange={this.onChange}/>
    {this.state.hasErrors.title? <TextFieldHelperText persistent validationMsg>{this.state.hasErrors.title.message}</TextFieldHelperText>:''}
</FormField>

    </GridCell>
    <GridCell span="12">
    <FormField>
	<TextField label="Author" id="author" type="text" value={this.state.book.author} onChange={this.onChange}/>
    {this.state.hasErrors.author? <TextFieldHelperText persistent validationMsg>{this.state.hasErrors.author.message}</TextFieldHelperText>:''}
</FormField>

    </GridCell>
    <GridCell span="12">
    <FormField>
	<TextField label="ISBN Number" id="ISBN" type="text" value={this.state.book.ISBN} onChange={this.onChange}/>
    {this.state.hasErrors.ISBN? <TextFieldHelperText persistent validationMsg>{this.state.hasErrors.ISBN.message}</TextFieldHelperText>:''}
</FormField>

    </GridCell>
    <GridCell span="12">
    <FormField>
	<TextField label="Genre" id="genre" type="text" value={this.state.book.genre} onChange={this.onChange}/>
    {this.state.hasErrors.genre? <TextFieldHelperText persistent validationMsg>{this.state.hasErrors.genre.message}</TextFieldHelperText>:''}
</FormField>

    </GridCell>
    <GridCell span="12">


<FormField>
<TextField label="Description" id="description" textarea value={this.state.book.description} onChange={this.onChange} />
{this.state.hasErrors.description? <TextFieldHelperText persistent validationMsg>{this.state.hasErrors.description.message}</TextFieldHelperText>:''}
</FormField>

    </GridCell>
    <GridCell span="12">
    <FormField>
    <label htmlFor="publication_date">Publication Date</label>
	<TextField id="publication_date" type="date" value={this.state.book.publication_date} onChange={this.onChange}/>
    {this.state.hasErrors.publication_date? <TextFieldHelperText persistent validationMsg>{this.state.hasErrors.publication_date.message}</TextFieldHelperText>:''}
</FormField>

    </GridCell>
    <GridCell span="12">
    <FormField>
	<TextField id="price" type="number" label="Price" value={this.state.book.price} onChange={this.onChange}/>
    {this.state.hasErrors.price? <TextFieldHelperText persistent validationMsg>{this.state.hasErrors.price.message}</TextFieldHelperText>:''}
</FormField>

    </GridCell>
    <GridCell span="12">

<FormField>
<Button raised type="submit">{this.state.btnTitle}</Button>
</FormField>
    </GridCell>
                </Grid>
                </form>
	</CardSupportingText>
</Card>
<Dialog
	title={this.state.dialog.title}
	body={this.state.dialog.body}
	open={this.state.dialogIsOpen}
	onClose={evt => this.setState({dialogIsOpen: false})}
	onAccept={evt => this.props.dialogOnAccept()}
	onCancel={evt => console.log('Cancelled')}
/>
      </div>
    );
  }
}

export default BookForm;
