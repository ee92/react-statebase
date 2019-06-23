import React from 'react';
import createState from 'statebase';

const Statebase = React.createContext(null);

export class StatebaseProvider extends React.Component {
	constructor(props) {
		super(props);
		this.state = createState(props.initialState);
	}
	componentDidMount() {
		this.unsub = this.state.listen((ref) => {
			this.setState(ref.val());
		});
	}
	componentWillUnmount() {
		this.unsub && this.unsub();
	}
	render() {
		return (
			<Statebase.Provider value={this.state}>
				{this.props.children}
			</Statebase.Provider>
		)
	}
}

export const withStatebase = Component => {
	return props => {
		return (
			<Statebase.Consumer>
				{state => (
					<Component {...props} state={state} />
				)}
			</Statebase.Consumer>
		);
	};
};