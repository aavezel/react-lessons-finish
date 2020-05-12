import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Delete from '@material-ui/icons/Delete'
import AddCircle from '@material-ui/icons/AddCircle'
import RemoveCircle from '@material-ui/icons/RemoveCircle'


const useStyles = makeStyles((theme) => ({
    bookImg: {
        width: '100px',
        marginRight: '20px',
    },
    bookP: {
        width: '300px',
    },
}));

const CartItem = ({ book, onIncrease, onDecrease, onDelete}) => {
    
    const classes = useStyles();
    const full_price = book.count * book.price;

    return (<ListItem>
        <ListItemAvatar>
            <img src={'/img/books/' + book.id + '.jpg'} alt={book.title} className={classes.bookImg} />
        </ListItemAvatar>
        <ListItemText primary={book.title} secondary={book.author} />
        <ListItemSecondaryAction className={classes.bookP}>
            <Grid container justify="space-between" alignItems="center">
                <Grid item>
                    <IconButton aria-label="sub" onClick={() => onDecrease(book.id)}>
                        <RemoveCircle />
                    </IconButton>
                    <Typography component="span" variant="body1">
                        {book.count}
                    </Typography>
                    <IconButton aria-label="add"  onClick={() => onIncrease(book.id)}>
                        <AddCircle />
                    </IconButton>
                </Grid>
                <Grid item>
                    <Typography variant="body2">
                        {book.price}₽
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h6">
                        {full_price}₽
                    </Typography>
                </Grid>
                <Grid item>
                    <IconButton aria-label="delete"  onClick={() => onDelete(book.id)}>
                        <Delete />
                    </IconButton>
                </Grid>
            </Grid>
        </ListItemSecondaryAction>
    </ListItem>);
};

export default CartItem;