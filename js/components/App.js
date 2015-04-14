var App = React.createClass({
    getInitialState: function () {
        return {
            users: [
                {
                    player: 1,
                    name: "string",
                    position: {
                        x: 3,
                        y: 7,
                        direction: "east",
                        type: "wb"
                    },
                    team: "left"
                },
                {
                    player: 2,
                    name: "string",
                    position: {
                        x: 34,
                        y: 11,
                        direction: "west",
                        type: "wb"
                    },
                    team: "left"
                }
            ],
            grid: [
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [2, 8448, 8448, 8448, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8704, 8704, 8704, 2],
                [2, 8448, 8448, 8448, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8704, 8704, 8704, 2],
                [2, 8448, 8448, 8448, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8704, 8704, 8704, 2],
                [2, 8448, 8448, 8448, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8704, 8704, 8704, 2],
                [2, 8448, 8448, 8448, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8704, 8704, 8704, 2],
                [2, 8448, 8448, 8448, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8704, 8704, 8704, 2],
                [2, 8448, 8448, 8448, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8704, 8704, 8704, 2],
                [2, 8448, 8448, 8448, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8704, 8704, 8704, 2],
                [2, 8448, 8448, 8448, 0, 0, 0, 129, 129, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8704, 8704, 8704, 2],
                [2, 8448, 8448, 8448, 0, 0, 0, 129, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8704, 8704, 8704, 2],
                [2, 8448, 8448, 8448, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8704, 8704, 8704, 2],
                [2, 8448, 8448, 8448, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8704, 8704, 8704, 2],
                [2, 8448, 8448, 8448, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8704, 8704, 8704, 2],
                [2, 8448, 8448, 8448, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8704, 8704, 8704, 2],
                [2, 8448, 8448, 8448, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8704, 8704, 8704, 2],
                [2, 8448, 8448, 8448, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8704, 8704, 8704, 2],
                [2, 8448, 8448, 8448, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8704, 8704, 8704, 2],
                [2, 8448, 8448, 8448, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8704, 8704, 8704, 2],
                [2, 8448, 8448, 8448, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8704, 8704, 8704, 2],
                [2, 8448, 8448, 8448, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8704, 8704, 8704, 2],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
            ],
            game_started: false,
            is_user: false,
            pirate_number: 0,
            user_form: {
                temp_username: '',
                enabled: false
            },
            pirates_per_side: {
                left: 0,
                right: 0
            }
        }
    },
    setupGrid: function() {
        var grid = this.state.grid;

        this.state.users.map(function(user) {
            var value = 0;
            if(user.player === 1) {
                value += 1048576;
            } else if(user.player === 2) {
                value += 2097152;
            } else if(user.player === 3) {
                value += 4194304;
            } else if(user.player === 4) {
                value += 8388608;
            }

            if(user.position.direction === 'north') {
                value += 8;
            } else if(user.position.direction === 'east') {
                value += 16;
            } else if(user.position.direction === 'south') {
                value += 32;
            } else if(user.position.direction === 'west') {
                value += 64;
            }

            if(user.position.type === 'wb') {
                value += 2048;
            } else if(user.position.type === 'wf') {
                value += 4096;
            }

            value += grid[user.position.y][user.position.x];

            grid[user.position.y][user.position.x] = value;

            console.log(value);
        });

        this.setState({grid: grid});
    },
    move: {
        forwards: function (user) {

        }
    },
    componentDidMount: function() {
        //this.checkGameHasStarted();
        if(!this.state.game_started) {
            this.setupGrid();
        } else {
            this.drawGrid();
        }
    },

    createNewUser: function() {
        var pirate_name = this.state.user_form.temp_username;
        var pirate_number = this.state.users.length + 1;

        var chosen_side = 0;
        var coords = null;
        var direction = 'east';
        var side_string = 'left';

        var pirates_before_left_side = this.state.pirates_per_side.left;
        var pirates_before_right_side = this.state.pirates_per_side.right;

        if(pirates_before_left_side == pirates_before_right_side) {
            chosen_side = Math.round(Math.random());
        } else if(pirates_before_left_side > pirates_before_right_side) {
            chosen_side = 1; // right
        } else {
            chosen_side = 0; // left
        }

        if(chosen_side === 0) {
            this.setState({
                pirates_per_side: {
                    left: pirates_before_left_side + 1,
                    right: pirates_before_right_side
                }
            });

            coords = {
                x: 5,
                y: 6
            };

            direction = 'east';
            side_string = 'left';
        } else {
            this.setState({
                pirates_per_side: {
                    left: pirates_before_left_side,
                    right: pirates_before_right_side + 1
                }
            });

            coords = {
                x: 34,
                y: 6
            };

            direction = 'west';
            side_string = 'right';
        }

        var users = this.state.users;

        users.push({
            player: pirate_number,
            name: pirate_name,
            position: {
                x: coords.x,
                y: coords.y,
                direction: direction,
                type: "wb"
            },
            team: side_string
        });

        this.setState({users: users});
    },

    changeUserName: function(e) {
        if(e.target.value.length >= 1) {
            this.setState({user_form: {enabled: true, temp_username: e.target.value}});
        } else {
            this.setState({user_form: {enabled: false, temp_username: e.target.value}});
        }

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

        if(!this.state.game_started && !this.state.is_user) {
            return (
                <div>
                    <h1>You need to enter your pirates name</h1>
                    <input type="text" value={this.state.user_form.temp_username} onChange={this.changeUserName} autoFocus="autofocus" />
                    <button onClick={this.createNewUser} disabled={!this.state.user_form.enabled}>Login</button>
                </div>
            );
        } else {
            return (
                <div>
                    <div>

                        <Board grid={this.state.grid} />
                    </div>
                    <div>
                        <p>Pirate List</p>
                        <UserList users={this.state.users} />
                    </div>
                </div>
            );
        }
    }

});

React.render(<App />, document.body);