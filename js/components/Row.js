var Row = React.createClass({
	render: function() {
		return (
			<div className="row">
				{this.props.columns.map(function(cell) {
					return <Cell value={cell} />;
				})}
			</div>
		);
	}
});
