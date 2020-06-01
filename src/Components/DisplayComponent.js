import React, { Component } from 'react'
import { Badge } from 'reactstrap'

export default class Display extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return(
            <div className="row display-row">
                <div className="col-1"><span className="fa fa-shopping-cart fa-3x"/></div>
                <div className="col-1 self-align-center"><h3>Items</h3></div>
                <div className="col-1"><h3><Badge color="success" pill>{this.props.Total}</Badge></h3></div>
            </div>
        )
    }
}