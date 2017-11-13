var React = require('react');
var io = require('socket.io-client');
var Header = require('./parts/header');
var APP = React.createClass({
	componentWillMount (){
		this.socket = io('http://localhost:3000');
		this.socket.on('connect',this.connect);
	},
	connect (){
		console.log("connect " + this.socket.id);
	},
	render() {
		return (
			<div>
				<Header title="new header"/>
			</div>

		);
	}
});

module.exports = APP;