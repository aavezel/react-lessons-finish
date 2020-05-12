import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    Book: {
        display: "flex",
        flexFlow: "column wrap",
        alignContent: "flex-start",
        height: 210,
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    BookCover: {
        height: 210,
        width: 150,
        flex: "0 1 210x",
        alignSelf: "flex-start",
    },
    BookContent: {
        marginRight: 150,
        flex: "3 0.5 auto",
        alignSelf: "stretch",
    },
    BookActions: {
        marginRight: 150,
        flex: "1 3 auto",
        alignSelf: "flex-start",        
    }
}));

const BooksListItem = ({ book, onAddedToCart }) => {
    const classes = useStyles();

    return (
        <Card className={classes.Book}>
            <CardMedia
                image={'/img/books/' + book.id + '.jpg'}
                title="Image title"
                className={classes.BookCover}
            />
            <CardContent className={classes.BookContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    {book.title}
                </Typography>
                <Typography color="textSecondary" >
                    {book.author}
                </Typography>
                <Typography color="textPrimary"  >
                    {book.price}₽
                </Typography>
            </CardContent>
            <CardActions className={classes.BookActions}>
                <Button variant="contained" color="primary" onClick={onAddedToCart}> Add to cart </Button>
            </CardActions>
        </Card>

    )
}

export default BooksListItem;