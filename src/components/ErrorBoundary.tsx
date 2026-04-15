import { Component } from "react";
// import type {ErrorInfo } from "react"

interface State{
    hasError: boolean
}

interface Props{
    children: React.ReactNode
}

export default class ErrorBoundary extends Component<Props, State>{
    public state: State = {
        hasError: false
    }

    public static getDerivedStateFromError(_: Error): State{
        return {
            hasError: true
        }
    }

    // public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    //     console.log("Uncaught Error: ", error, errorInfo )
    // }

    public render(){
        if(this.state.hasError){
            return (
                <div className="min-h-screen flex justify-center items-center">
                    <h1 className="text-5xl font-bold">Oops! Something went wrong!</h1>
                </div>
            )
        }

        return this.props.children;
    }

    
}