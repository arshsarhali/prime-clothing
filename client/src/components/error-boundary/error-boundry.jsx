import React from "react";

import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundry.styles';

class ErrorBoundry extends React.Component{

    constructor() {
        super();

        this.state = {
            hasErrored:false
        }
    }


    static getDerivedStateFromError(error) {
        return { hasErrored: true };

    }

    componentDidCatch(error,info) {
        console.log(error)
    } 

    render() {
        if (this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/g3hgqe8.png' />
                    <ErrorImageText>This Page is Broken</ErrorImageText>
                </ErrorImageOverlay>

            )
        }

        return this.props.children;
    }
}

export default ErrorBoundry;