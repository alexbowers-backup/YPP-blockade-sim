var Board = React.createClass({
	render: function() {
		var grid = [
			[1,2,3,1],
			[1,1,6,1],
			[1,1,1,1]
		];

		return (
			<div>
				{grid.transpose().map(function(x) {
					return <Row columns={x} />;
				})}
			</div>
		);
	}

});

React.render(<Board />, document.body);