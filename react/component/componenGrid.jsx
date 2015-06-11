var ComponentGrid = React.createClass({
    
    render: function() {
        return (
            <div className="componentGrid">
                <ComponentTable data={this.props.data}/>
            </div>
        );
    }
});
React.render(
             <ComponentGrid data={data}/>,
             document.getElementById('content-pane')
            );
