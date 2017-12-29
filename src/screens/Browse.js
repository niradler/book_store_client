import React, { Component } from 'react';
import {
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarMenuIcon,
  ToolbarTitle,
  ToolbarIcon
} from 'rmwc';
import {Grid, GridCell} from 'rmwc';
import BookThumbnail from '../components/BookThumbnail';
class Browse extends Component {
  render() {
    return (
      <div className="Browse">

    <Grid>
    <GridCell span="3">
<BookThumbnail book={{"title":"Test title",
            "description": "dfsf",
            "publication_date": "2001-01-01",
            "author": "nir",
            "ISBN": "324324324",
            "genre": "action",
            "price": "156"}} />
    </GridCell>

                </Grid>
      </div>
    );
  }
}

export default Browse;
