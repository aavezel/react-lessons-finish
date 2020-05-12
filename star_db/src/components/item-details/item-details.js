import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Media from 'react-bootstrap/Media';
import ListGroup from 'react-bootstrap/ListGroup';

import Spiner from '../spiner';

import './item-details.css';

const Record = ({ item, field, label }) => {
	return (
		<ListGroup.Item>
			<span className="term">{label}</span>
			<span>{item[field]}</span>
		</ListGroup.Item>
	);
}

class ItemDetails extends Component {

	state = {
		item: null,
		image: null,
	}

	componentDidMount() {
		this.updateItem();
	}

	componentDidUpdate(prevProps) {
		if (this.props.itemId !== prevProps.itemId ||
			this.props.getData !== prevProps.getData ||
			this.props.getImageUrl !== prevProps.getImageUrl) {
			this.updateItem();
		}
	}

	updateItem = () => {
		const { itemId, getData, getImageUrl } = this.props;
		if (!itemId) return;
		this.setState({ loaded: true });
		getData(itemId)
			.then((item) => {
				this.setState({
					item,
					image: getImageUrl(item),
					loaded: false
				});
			})
			.catch((err) => {
				this.setState(() => { throw err; })
			})
	}

	getItemView = (item, imageUrl) => {
		//const { name, gender, height, mass, birthYear, eyeColor, hairColor } = item;
		const { name } = item;		
		return (
			<Media className="">
				<img src={imageUrl} className="item-details-images mr-3" alt={name} />
				<Media.Body>
					<h4>{name}</h4>
					<ListGroup variant="flush">
						{
							React.Children.map(
								this.props.children,
								(child) => {
									return React.cloneElement(child, { item });
								}
							)
						}

					</ListGroup>
				</Media.Body>
			</Media>
		);
	}

	render() {

		const { item, image, loaded } = this.state;

		const loading = loaded ? (
			<Row className="justify-content-md-center">
				<Spiner />
			</Row>) : null;

		const selectItem = !loaded && !item ? <span>Select a item from a list</span> : null;

		const view = !loaded && item ? this.getItemView(item, image) : null;

		return (
			<Card className="item-details border-secondary">
				<Card.Body>
					{loading}
					{selectItem}
					{view}
				</Card.Body>
			</Card>
		);
	}
}

export { Record };
export default ItemDetails;
