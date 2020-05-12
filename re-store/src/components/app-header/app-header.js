import React from 'react'

import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';
import ShoppingCartFilled from '@material-ui/icons/ShoppingCart';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import * as Router from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 3
    },
    title: {
        flexGrow: 1,
        color: "inherit",
        textDecoration: "none",
    },
    cartLink: {
        color: "inherit",
        textDecoration: "none",
    }
}));

const AppHeader = ({count, sum}) => {
    const classes = useStyles();

    const shopIcon = count > 0 ? <ShoppingCartFilled /> : <ShoppingCartOutlined />;
    const title  = count > 0 ? (
        <Typography variant="subtitle2" component="span" color="inherit" noWrap>
            {count} items ({sum}₽)
        </Typography>
    ): null;

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Router.Link to="/" className={classes.title}>
                        <Typography variant="h6" color="inherit" noWrap >
                            React Book Store
                        </Typography>
                    </Router.Link>
                    <Router.Link to="/cart" className={classes.cartLink}>
                        <IconButton
                            color="inherit"
                        >
                            {shopIcon}
                        </IconButton>
                        { title }
                    </Router.Link>
                </Toolbar>

            </AppBar>
        </div>

    )

}

const mapStateToProps = ({shopingCart: {orderTotal, orderCount}}) => ({sum: orderTotal, count: orderCount});

export default connect(mapStateToProps)(AppHeader);