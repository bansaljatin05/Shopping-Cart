import React, { Component } from 'react'
import Item from './ItemComponent'
import ClearAndRef from './RefreshAndClearCart';
import Display from './DisplayComponent';

export default class Main extends Component {
    constructor(props) {
        super(props)    
        
        this.state={
            items: [
                { id:1, value:0 },
                { id:2, value:0 },
                { id:3, value:0 },
                { id:4, value:0 }
            ]

        }
    }

    handleDecrement = (item) => {
        const items = [...this.state.items];
        const index = items.indexOf(item);
        items[index] = {...items[index] };
        items[index].value--;
        this.setState({items});
    }

    handleIncrement = (item) => {
        const items = [...this.state.items];
        const index = items.indexOf(item);
        items[index] = {...items[index] };
        items[index].value++;
        this.setState({items});
    }

    handleReset = () => {
        const items = this.state.items.map(item => {
            item.value = 0;
            return item;
        });
        this.setState({items});
    }
    
    handleDelete = (itemId) => {
        const items = this.state.items.filter(item => item.id !== itemId);
        this.setState({items});
    } 

    handleRefresh = () => {
        window.location.reload();
    }

    render() {
        return(
            <div>
                <header className="jumbotron mb-0">
                    <h1>My Shopping Cart</h1>
                </header>
                <Display Total = {this.state.items.filter(item => item.value > 0).length}/>
                <div className="container">
                    <div className="col-5 offset-3">
                    <div className="container">
                        <ClearAndRef 
                        handleReset={this.handleReset}
                        handleRefresh={this.handleRefresh}/>

                        {this.state.items.map((item) => {
                            console.log(this.state.items);
                        return (<Item key={item.id} 
                            value={item.value}
                            handleDecrement={this.handleDecrement}
                            handleIncrement={this.handleIncrement}
                            item={item}
                            handleDelete={this.handleDelete}
                            />)
                        })}
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}