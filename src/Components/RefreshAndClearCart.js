import React, { Component } from 'react'
import { Button } from 'reactstrap'
import {Tooltip} from 'reactstrap'

export default class ClearAndRef extends Component {
    constructor(props) {
        super(props)

        this.setToolTipAOpen = this.setToolTipAOpen.bind(this);
        this.setToolTipBOpen = this.setToolTipBOpen.bind(this);
        this.state= {
            tootlTipAopen: false,
            tootlTipBopen: false
        }
    }
    setToolTipAOpen() {
        this.setState({
            toolTipAopen: !this.state.toolTipAopen
        })
    }
    setToolTipBOpen() {
        this.setState({
            toolTipBopen: !this.state.toolTipBopen
        })
    }

    render() {
        return(
            <div className="row mb-4">
                <div className="col-2">
                    <Button color="success" onClick={this.props.handleRefresh} id="refreshCart"><span className="fa fa-retweet fa-lg"/></Button>
                    <Tooltip placement="left" isOpen={this.state.toolTipAopen} target="refreshCart" toggle={this.setToolTipAOpen}>
                        Refresh Current Cart
                    </Tooltip>
                </div>
                <div className="col-2 mt-0">
                    <Button color="success" onClick={this.props.handleReset} id="clearCart"><span className="fa fa-recycle fa-lg"/></Button>
                    <Tooltip placement="right" isOpen={this.state.toolTipBopen} target="clearCart" toggle={this.setToolTipBOpen}>
                        Reload Cart
                    </Tooltip>
                </div>
            </div>
        )
    }
}