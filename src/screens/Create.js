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

import server from '../server'
class Create extends Component {
  constructor(props){
    super()
    this.state={book:{}}
  }

  render() {
    return (
      <div className="Create">
          {/*     width: 313px; */}
      <Card style={{width: '520px'}}>
	<CardPrimary>
		<CardTitle large>Add Book</CardTitle>
	</CardPrimary>
	<CardSupportingText>
        <form onSubmit={(e)=>{
            e.preventDefault();
            this.setState({dialogIsOpen: true});
            }}>
    <Grid>
    <GridCell span="12">
    <FormField>
	<TextField label="Title" id="title" type="text"/>
    <TextFieldHelperText persistent validationMsg>The field is required.</TextFieldHelperText>
</FormField>

    </GridCell>
    <GridCell span="12">
    <FormField>
	<TextField label="Author" id="author" type="text"/>
</FormField>

    </GridCell>
    <GridCell span="12">
    <FormField>
	<TextField label="ISBN Number" id="ISBN" type="text"/>
</FormField>

    </GridCell>
    <GridCell span="12">
    <FormField>
	<TextField label="Genre" id="genre" type="text" />
</FormField>

    </GridCell>
    <GridCell span="12">


<FormField>
<TextField label="Description" id="description" textarea />
</FormField>

    </GridCell>
    <GridCell span="12">
    <FormField>
    <label htmlFor="publication_date">Publication Date</label>
	<TextField id="publication_date" type="date"/>
</FormField>

    </GridCell>
    <GridCell span="12">

<FormField>
<Button raised type="submit">ADD</Button>
</FormField>
    </GridCell>
                </Grid>
                </form>
	</CardSupportingText>
</Card>
<Dialog
	title="Book Added!"
	body="Congrats! the book as added, back to Browse?"
	open={this.state.dialogIsOpen}
	onClose={evt => this.setState({dialogIsOpen: false})}
	onAccept={evt => this.props.history.push('/')}
	onCancel={evt => console.log('Cancelled')}
/>
      </div>
    );
  }
}

export default Create;
