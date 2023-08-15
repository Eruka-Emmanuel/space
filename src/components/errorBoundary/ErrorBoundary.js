import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
        this.fallback = this.fallback.bind(this);
    }
    fallback() {
        alert('an error occurred')
    }
    static getDerivedStateFromError(error) {
        return {hasError: true}
    }
    componentDidCatch(error, info) {
        console.log(`${error}`);
        console.log(`error ocurred in: ${info}`)
    }
    render() {
        if (this.state.hasError) {
            return (
                <>
                    <h4>Oops! An error occurred.</h4>
                    <button className="btn btn-primary" onClick={() => this.setState({hasError:false})}>retry</button>
                </>
            )
        }
        return this.props.children;
    }
}
export default ErrorBoundary;