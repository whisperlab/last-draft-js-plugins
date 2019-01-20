import {colors} from './colors'
import Picker from './Picker'

const styleMap = {}
colors.map((c, i) => {
  styleMap[`color-${c.replace('#', '')}`] = { color: c }
})

module.exports = {
  Picker: Picker,
  colorStyleMap: styleMap
}
