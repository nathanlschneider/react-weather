import React, { Component } from 'react';

export default class Location extends Component {
    constructor(props){
        super(props);
        this.handleSaveZip = this.handleSaveZip.bind(this);
    }

    handleSaveZip(){
        console.log(this.props.input);
    }

    render(){
        return (
            <>
           {this.props.form}
            </>
        )
    }
}