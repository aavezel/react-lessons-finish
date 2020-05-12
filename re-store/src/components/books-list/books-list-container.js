import React, { Component } from 'react'
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';

import { fetchBooks, bookAddedToCart } from '../../actions';
import { withBookstoreService } from '../hoc';

import BooksList from './books-list';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';


class BooksListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { books, loading, error, onAddedToCart } = this.props;

        if (loading) {
            return (<Spinner />)
        }

        if (error) {
            return (
                <Grid container justify="center">
                    <Grid item>
                        <ErrorIndicator />
                    </Grid>
                </Grid>            
            )
        }        

        return <BooksList onAddedToCart={onAddedToCart} books={books}/>
    }    
}

const mapBookstoreMethodsToProps = ({ getBooks }) => ({ getBooks });

const mapStateToProps = ({ booksList: { books, loading, error } }) => ({ books, loading, error });

const mapDispatchToProps = (dispatch, {getBooks}) => {
    return bindActionCreators({
        fetchBooks: fetchBooks(getBooks),   
        onAddedToCart: bookAddedToCart,
    }, dispatch);
};

export default compose(
    withBookstoreService(mapBookstoreMethodsToProps),
    connect(mapStateToProps, mapDispatchToProps),
)(BooksListContainer);