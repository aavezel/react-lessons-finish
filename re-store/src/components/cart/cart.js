import React from 'react'
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CartItem from './cart-item';
import { bookAddedToCart, bookDecreaseFromCart, bookRemoveFromCart } from '../../actions';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "20px",
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    summRow: {
        borderTop: "1px solid rgba(0, 0, 0, 0.12)",
    }

}));

const EmptyCart = () => {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Typography variant="h5">
                Корзина пуста
            </Typography>
        </Container>
    );
}

const Cart = ({ items, total, totalCount, onIncrease, onDecrease, onDelete }) => {
    const classes = useStyles();

    if (totalCount === 0) return <EmptyCart />;

    const itemsElements = items.map((item) =>
        <CartItem book={item} key={item.id} onIncrease={onIncrease} onDecrease={onDecrease} onDelete={onDelete} />
    );

    return (
        <Container>
            <List className={classes.root} >
                {itemsElements}
                <ListItem key="Summa" className={classes.summRow}>
                    <ListItemText>
                        <Typography variant="h5">
                            Итого (x{totalCount})
                        </Typography>
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <Typography component="span" variant="h5">{total}₽</Typography>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        </Container>
    )
}

const mapStateToProps = ({ shopingCart: {cartItems, orderTotal, orderCount} }) => {
    return {
        items: cartItems,
        total: orderTotal,
        totalCount: orderCount,
    }
}
const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookDecreaseFromCart,
    onDelete: bookRemoveFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);