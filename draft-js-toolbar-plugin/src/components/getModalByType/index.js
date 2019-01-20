import {
  ColorModal,
  EmbedModal,
  EmojiModal,
  GifModal,
  LinkModal
} from '@whisperlab/draft-js-modal-plugin'

const getModalByType = (type) => {
  if (type === 'color') { return ColorModal }
  if (type === 'embed') { return EmbedModal }
  if (type === 'emoji') { return EmojiModal }
  if (type === 'gif') { return GifModal }
  if (type === 'link') { return LinkModal }

  return undefined
}

export default getModalByType
