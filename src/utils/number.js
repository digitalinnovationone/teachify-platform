const DECIMAL_BASE = 10

const toInt = s => (s === '' ? 0 : parseInt(s, DECIMAL_BASE))

export { toInt }
