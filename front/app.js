import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {observer} from "mobx-react";

import SplitPane from 'react-split-pane'
import Editor from './component/editor/index'
import ReactMarkDown from 'react-markdown'
import './normal.less'
import './split.less'
import text from './store/textStore'
@observer export default class EditorMarkDown extends Component {

    render () {
        return (
            <div className="App">
                <SplitPane split="vertical" defaultSize="50%">
                    <div className="editor-pane">
                        <Editor className="editor" />
                    </div>
                    <div className="view-pane">
                        <ReactMarkDown className="result" source={text.markdownText}/>
                    </div>
                </SplitPane>
            </div>
        )

    }
}


ReactDOM.render(<EditorMarkDown/>, document.getElementById('root'))