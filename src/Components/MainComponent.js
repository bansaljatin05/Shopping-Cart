import React, { Component } from 'react'
import Item from './ItemComponent'

import ClearAndRef from './RefreshAndClearCart';
import Display from './DisplayComponent';

export default class Main extends Component {
    constructor(props) {
        super(props)    
        
        this.state={
            count: 0,

        }
    } 

    render() {
        return(
            <div>
                <header className="jumbotron mb-0">
                    <h1>My Shopping Cart</h1>
                </header>
                <Display/>
                <div className="container">
                    <div className="col-5 offset-3">
                    <div className="container">
                        <ClearAndRef></ClearAndRef>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}