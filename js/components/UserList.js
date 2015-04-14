var UserList = React.createClass({
    render: function() {
        return (
            <ul>
                {this.props.users.map(function(user) {
                    return <User user={user}/>;
                })}
            </ul>
        );
    }
});
