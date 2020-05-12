import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import book_ico from './book_ico.svg';


const useStyles = makeStyles({
    root: {
        //maxWidth: 300,
        padding: "20px",
        boxShadow: "none",
    },
});


const ErrorIndicator = () => {
    const classes = useStyles();
    return (        
        <Card elevation={3} className={classes.root}>
            <CardMedia
                image={book_ico}
                title="Book error"
                component="img"
            />
            <CardContent>
                <Typography variant="h5" component="h2">
                    Something wrong!
                </Typography>
                <Typography variant="body1" component="p">
                    Our bookworms fixing it
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ErrorIndicator;
