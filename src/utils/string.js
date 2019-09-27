import { firstPosition, lastPosition } from './array'

const firstLetter = s => s.charAt(0)
const isString = s => typeof s === 'string'
const space = () => ' '
const upper = s => s.toUpperCase()

const nameToPhoto = s => {
    const split = s.split(space())
    return `${upper(firstLetter(firstPosition(split)))}${upper(firstLetter(lastPosition(split)))}`
}

export { isString, nameToPhoto }
