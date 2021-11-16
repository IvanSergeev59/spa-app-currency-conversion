import React, { Component } from "react";

export default class ErrorBoundry extends Component {

    state ={
        hasError: false
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    render () {
        const error = this.state.hasError;

        if (error) {
            return <h2>Error</h2>;
        }

        return this.props.children;
    
    }
}

