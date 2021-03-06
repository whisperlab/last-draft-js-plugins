import decorateComponentWithProps from 'decorate-component-with-props'
import {
  BoldButton,
  ItalicButton,
  UnderlineButton,
  BlockquoteButton,
  CodeBlockButton,
  UnorderedListButton,
  OrderedListButton
} from 'draft-js-buttons' // eslint-disable-line import/no-unresolved

import {
  AddLinkButton,
  AddColorButton
} from '@whisperlab/draft-js-buttons-plugin'

import createStore from './utils/createStore'
import Toolbar from './components/Toolbar'
import Separator from './components/Separator'
import buttonStyles from './buttonStyles.css'
import toolbarStyles from './toolbarStyles.css'
import modalStyles from './modalStyles.css'
import colorPickerStyles from './colorPickerStyles.css'
import getModalByType from './components/getModalByType'

const createToolbarPlugin = (config = {}) => {
  const defaultTheme = { buttonStyles, toolbarStyles, modalStyles, colorPickerStyles }

  const defaultaddLink = undefined

  const {
    theme = defaultTheme,
    addLink = defaultaddLink,
    structure = [
      BoldButton,
      ItalicButton,
      UnderlineButton,
      AddLinkButton,
      BlockquoteButton,
      CodeBlockButton,
      UnorderedListButton,
      OrderedListButton,
      AddColorButton
    ]
  } = config

  const store = createStore({
    isVisible: false,
    addLink
  })

  const toolbarProps = {
    store,
    structure,
    getModalByType,
    theme
  }

  return {
    initialize: ({ getEditorState, setEditorState, getEditorRef }) => {
      store.updateItem('getEditorState', getEditorState)
      store.updateItem('setEditorState', setEditorState)
      store.updateItem('getEditorRef', getEditorRef)
    },
    // Re-Render the text-toolbar on selection change
    onChange: (editorState) => {
      const selection = editorState.getSelection()
      if (selection.getHasFocus() && !selection.isCollapsed()) {
        store.updateItem('isVisible', true)
      } else {
        store.updateItem('isVisible', false)
      }
      return editorState
    },
    Toolbar: decorateComponentWithProps(Toolbar, toolbarProps)
  }
}

export default createToolbarPlugin

export {
  Separator
}
