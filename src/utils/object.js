const _clone = obj => Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj))

const compare = (o1, o2) => JSON.stringify(o1) === JSON.stringify(o2)
const deepFreeze = obj => Object.freeze(obj) && Object.values(obj).forEach(value => typeof value === 'object' && deepFreeze(value))
const isObject = o => typeof o === 'object'
const removeKeys = (obj, keys) => {
    if (obj && keys.length) {
        const cloned = _clone(obj)
        keys.forEach(key => delete cloned[key])
        return cloned
    }
    return {}
}

export { compare, deepFreeze, removeKeys, isObject }
