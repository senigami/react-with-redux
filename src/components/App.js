import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
	state = { images: [], count: 0 };

	onSearchSubmit = async term => {
		console.log(term);
		const response = await unsplash.get('/search/photos', {
			params: { query: term },
		});
		this.setState({ images: response.data.results });
	};
	componentDidMount() {}
	componentDidUpdate() {}

	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				<ImageList images={this.state.images} />
			</div>
		);
	}
}

export default App;
