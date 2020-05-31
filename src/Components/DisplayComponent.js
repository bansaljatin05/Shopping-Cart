import React, { Component } from 'react'
import { Badge } from 'reactstrap'

export default class Display extends Component {
    render() {
        return(
            <div className="row display-row">
                <div className="col-1"><span className="fa fa-shopping-cart fa-3x"/></div>
                <div className="col-1 self-align-center"><h3>Items</h3></div>
                <div className="col-1"><h3><Badge color="success" pill>Zero</Badge></h3></div>
            </div>
        )
    }
}