var React = require('react');
var io = require('socket.io-client');
var Header = require('./parts/header');
var APP = React.createClass({
	getInitialState(){
		return {
			status:"disconnected"
		}
	},
	componentWillMount (){
		this.socket = io('http://localhost:3000');
		this.socket.on('connect',this.connect);
		this.socket.on('disconnect',this.disconnect);
	},
	connect (){
		this.setState({status:"connected"});
		console.log("connect " + this.socket.id);
	},
    disconnect (){
		this.setState({status:"disconnected"});
		console.log("disconnect " + this.socket.id);
	},
	render() {
		return (
			<div>
				<Header title="new header" status={this.state.status}/>
			</div>

		);
	}
});

module.exports = APP;