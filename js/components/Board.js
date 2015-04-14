var Board = React.createClass({
    getInitialState: function () {
        return {
            turn: 0,
            turn_time: 30
        }
    },
    process: function() {
        // Four moves per round

        var interval = setInterval(function() {

            if(turn_time > 0) {
                this.state.turn_time = this.state.turn_time - 1;
            } else {
                this.state.turn_time = 30;
            }

            this.setState({turn_time: turn_time});
        }, 1000);

    },
    render: function () {
        /**
         * 1 = Open Water
         * 2 = Rock
         * 4 = Wind
         * 8 = North
         * 16 = East
         * 32 = South
         * 64 = West
         * 128 = Whirlpool (MUST BE 4 adjacent squares)
         * 256 = Friendly (LEFT TEAM)
         * 512 = Enemy (RIGHT TEAM)
         * 1024 = Neutral
         * 2048 = WB
         * 4096 = WF
         * 8192 = Safe Zone
         * 16384 = Cannon Ball
         *
         * 1048576 = Player 1
         * 2097152 = Player 2
         * 4194304 = Player 3
         * 8388608 = Player 4
         *
         */

        return (
            <div>
                {this.props.grid.transpose().map(function (x) {
                    return <Row columns={x}/>;
                })}
            </div>
        );
    }
});