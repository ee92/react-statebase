import React from 'react';
import createState from 'statebase';

const Statebase = React.createContext(null);

export class StatebaseProvider extends React.Component {
	constructor(props) {
		super(props);
		this.statebase = createState(props.initialState);
	}
	componentDidMount() {
		this.unsub = this.statebase.listen(() => this.forceUpdate());
	}
	componentWillUnmount() {
		this.unsub && this.unsub();
	}
	render() {
		return (
			<Statebase.Provider value={this.statebase}>
				{this.props.children}
			</Statebase.Provider>
		)
	}
}

export const withStatebase = Component => props => (
	<Statebase.Consumer>
		{(state) => (
			<Component {...props} statebase={state} />
		)}
	</Statebase.Consumer>
);