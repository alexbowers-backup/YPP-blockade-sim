var Cell = React.createClass({
	render: function() {
		return (
			<div className="cell">
				{this.props.value}
			</div>
		);
	}
});
