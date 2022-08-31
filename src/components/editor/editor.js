import React, { Component } from "react";

import './editor.css';

export default class Editor extends Component {

    handleChange = (event) => {
        this.props.handleChange(event.target.value);
    }

    render() {
        const { display, onMaximize, onRestore, markdown } = this.props;
        let editorMax = {};
        if (display === 'max') {
            editorMax = {
                width: '100%', 
                height: '100vh',
                margin: 0, 
                borderRadius: 0
            };
        }

        return (
            <div className="editor window" style={editorMax}>
                <div className="window-header">
                    <span>&lt; editor &gt;</span>
                    {
                        (display === 'normal') ? 
                            <span className="window-control" onClick={onMaximize}>
                                <i className="fa-regular fa-window-maximize"></i>
                            </span>
                            : <span className="window-control" onClick={onRestore}>
                            <i className="fa-regular fa-window-restore"></i>
                            </span>
                        }
                </div>
                <textarea className="text" value={markdown} onChange={this.handleChange}></textarea>
            </div>
        );
    }
}