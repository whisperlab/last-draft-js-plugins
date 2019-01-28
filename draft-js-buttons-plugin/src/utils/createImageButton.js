import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import insertDataBlock from './insertDataBlock'

export default ({ children }) => (
  class imageButton extends Component {

    onClick (e) {
      e.preventDefault()
      ReactDOM.findDOMNode(this.refs.fileInput).click()
    }

    inputChange = async (e) => {
      let src = null
      if (this.props.onUpload) {
        src = await this.props.onUpload({
          files: e.target.files,
        })
      } else {
        const file = e.target.files[0]
        src = window.URL.createObjectURL(file)
      }
      if (!src) { return }
      const imageData = {src: src, type: 'placeholder'}
      this.props.setEditorState(insertDataBlock(this.props.getEditorState(), imageData, 'image'))
    }

    preventBubblingUp = (event) => { event.preventDefault() }

    render () {
      const { theme } = this.props
      return (
        <div
          className={theme.buttonWrapper}
          onMouseDown={this.preventBubblingUp}
        >
          <button
            className={theme.button}
            onClick={::this.onClick}
            type='button'
            children={children}
          />

          <div className={theme.addImage}>
            <input
              type='file'
              ref='fileInput'
              onChange={::this.inputChange}
              style={{ display: 'none' }} />
          </div>
        </div>

      )
    }
  }
)
