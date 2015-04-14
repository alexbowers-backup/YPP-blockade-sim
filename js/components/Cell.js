var Cell = React.createClass({
	render: function() {
		// Content of the cell
		var content;

		var classes = BlockadeSim.classes(this.props.value);

		var class_array = classes.split(' ');

		if(class_array.indexOf('cannon_ball') !== -1) {
			content = "●";
		}

		if(class_array.indexOf('rock') !== -1) {
			content = '×';
		}

		return (
			<div className={classes}>
				{content}
			</div>
		);
	}
});
