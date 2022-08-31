import React, { Component } from "react";
import { marked } from "marked";

import './previewer.css';

export default class Previewer extends Component {

    render() {
        const { display, onMaximize, onRestore, markdown } = this.props;
        let previewMax = {};
        if (display === 'max') {
            previewMax = {
                width: '100%', 
                height: '100vh', 
                margin: 0,
                borderRadius: 0
            };
        }

        marked.setOptions({
            breaks: true,
            gfm: true
          });

        return (
            <div className="previewer window" style={previewMax}>
                <div className="window-header">
                    <span>&lt; previewer &gt;</span>
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
                <div className="preview text" dangerouslySetInnerHTML={{__html: marked.parse(markdown)}}></div>
            </div>
        )
    }
}