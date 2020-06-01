import React, {Component} from 'react';
import {Button, Badge} from 'reactstrap';

export default class Item extends Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="row">
                <div className="col-3">
                    <h2><Badge color="warning">{this.props.value}</Badge></h2>
                </div>
                <div className="col-2">
                    <Button color="primary" onClick={() => this.props.handleIncrement(this.props.item)} id="add"><span className="fa fa-plus-circle fa-lg"/></Button>
                </div>
                <div className="col-2">
                    <Button color="secondary" disabled={this.props.item.value === 0} onClick={() => this.props.handleDecrement(this.props.item)} id="sub"><span className="fa fa-minus-circle fa-lg"/></Button>
                </div>
                <div className="col-2">
                    <Button color="success" onClick={() => this.props.handleDelete(this.props.item.id)} id="del"><span className="fa fa-trash fa-lg"/></Button>
                </div>
            </div>
        );
    }
}