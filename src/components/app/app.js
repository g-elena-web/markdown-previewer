import React, { Component } from "react";
import Editor from "../editor";
import Previewer from "../previewer";
import placeholder from "./placeholder";

import './app.css';

export default class App extends Component {
    state = {
        input: placeholder,
        editorState: 'normal',
        previewerState: 'normal'
    }

    handleChange = (input) => {
        this.setState({
            input
        })
    }

    maximizeEditor = () => {
        this.setState({

        })
    }

    maximizeWindow = (window) => {
        if (window === 'editor') {
            this.setState({
                editorState: 'max',
                previewerState: 'hidden'
            })
        } else if (window === 'previewer') {
            this.setState({
                editorState: 'hidden',
                previewerState: 'max'
            })
        }
    }

    restoreWindow = (window) => {
        this.setState({
            editorState: 'normal',
            previewerState: 'normal'
        })
    }

    render() {
        const { editorState, previewerState } = this.state;
        return (
            <div className="app">
                {(editorState !== 'hidden') && <Editor handleChange={this.handleChange} markdown={this.state.input} 
                    display={this.state.editorState} onMaximize={() => this.maximizeWindow('editor')}
                    onRestore={() => this.restoreWindow('editor')} />}
                {(previewerState !== 'hidden') && <Previewer markdown={this.state.input} display={this.state.previewerState}
                    onMaximize={() => this.maximizeWindow('previewer')} onRestore={() => this.restoreWindow('previewer')} />}
            </div>
        )
    }
}