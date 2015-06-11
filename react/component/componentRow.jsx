var ComponentRow = React.createClass({

    render: function() {
        var cells = [];
        var row = this.props.data;
        for(var k in row){
            cells.push(<td key={row[k]}>{row[k]}</td>);
        }
        return (
            <tr>
                {cells}   
            </tr>
        );
    }

});
