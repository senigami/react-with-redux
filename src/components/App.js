import React from 'react';
import PostList from './PostList';

/*
class App extends React.Component {
	state = {};

	render() {
		return <div>App</div>;
	}
}
*/

const App = () => {
	return (
		<div className="ui container">
			<PostList />
		</div>
	);
};

export default App;
