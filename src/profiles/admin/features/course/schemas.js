import { object } from 'yup'

import { schemas } from '@helpers/schemas'

const clazz = object().shape({
    name: schemas.className,
    source: schemas.source,
})

const course = object().shape({
    categories: schemas.categories,
    describe: schemas.describe,
    name: schemas.courseName,
    published: schemas.published,
    thumbnail: schemas.thumbnail,
})

const section = object().shape({
    name: schemas.sectionName,
})

export { clazz, course, section }
