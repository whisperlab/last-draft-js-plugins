import {
  ColorModal,
  EmbedModal,
  EmojiModal,
  GifModal
} from '@whisperlab/draft-js-modal-plugin'

const getModalByType = (type) => {
  if (type === 'color') { return ColorModal }
  if (type === 'embed') { return EmbedModal }
  if (type === 'emoji') { return EmojiModal }
  if (type === 'gif') { return GifModal }
  return undefined
}

export default getModalByType
