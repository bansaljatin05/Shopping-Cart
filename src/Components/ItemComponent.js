import React, {Component} from 'react';
import {Button, Badge} from 'reactstrap';

export default class Item extends Component {
    
    constructor(props) {
        super(props)

        this.state ={
            count: 0
        }
    }
    handleClickI = (e) => {
        console.log(this.state)
        
        this.setState({
            count: this.state.count + 1
        })
    }

    handleClickD = (e) => {
        console.log(this.state)
        
        if(this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            })
        }
    }

    handleClickDel = (e) => {
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-3">
                    <h2><Badge color="warning">{this.state.count}</Badge></h2>
                </div>
                <div className="col-2">
                    <Button color="primary" onClick={this.handleClickI} id="add"><span className="fa fa-plus-circle fa-lg"/></Button>
                </div>
                <div className="col-2">
                    <Button color="secondary" onClick={this.handleClickD} id="sub"><span className="fa fa-minus-circle fa-lg"/></Button>
                </div>
                <div className="col-2">
                    <Button color="success" onClick={this.handleClickDel}id="del"><span className="fa fa-trash fa-lg"/></Button>
                </div>
            </div>
        );
    }
}