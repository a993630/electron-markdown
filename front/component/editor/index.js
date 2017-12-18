import React, { Component } from 'react'
import CodeMirror from '@skidding/react-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/python/python'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/theme/monokai.css'
import './index.less'
import text  from '../../store/textStore'
export default class Editor extends Component {

    render() {
        const options = {
            mode: 'markdown',
            theme: 'monokai',
        }

        return (
            <CodeMirror onChange={(e) => {text.markdownText = e}}  value={text.markdownText} options={options} height="100%"/>
        )
    }

}