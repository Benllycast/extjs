var ComponentTable = React.createClass({

    render: function() {
        var headers = this.props.data.headers.map(function (header) {
            return (
                <th key={header}>{header}</th>
            );   
        });

        var rows = this.props.data.rows.map(function (row) {
            return (
                <ComponentRow data={row} />
            );
        });
        return (
            <table className="table table-condensed">
                <thead>
                    <tr>
                        {headers}
                    </tr> 
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }

});