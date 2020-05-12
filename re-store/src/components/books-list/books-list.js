import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import BooksListItem from './books-list-item';


const useStyles = makeStyles((theme) => ({
    BookGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    }
}));

const BooksList = ({books, onAddedToCart }) => {
    const classes = useStyles();
    return (
        <Container className={classes.BookGrid}>
            <Grid container spacing={2}>
                {books.map(book => (
                    <Grid item xs={6} key={book.id}>
                        <BooksListItem 
                            book={book} 
                            onAddedToCart = {() => onAddedToCart(book.id)}
                            />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default BooksList;