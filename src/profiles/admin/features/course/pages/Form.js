import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

import { withRouter } from 'react-router'

import { i18n } from '@i18n'

import { alerts } from '@utils/alert'
import { not } from '@utils/functions'

import App from '@containers/App'

import Align from '@components/Align'
import ButtonCancel from '@components/ButtonCancel'
import ButtonSuccess from '@components/ButtonSuccess'
import Card from '../components/card'
import Center from '@components/Center'
import Container from '../components/Container'
import Flex from '@components/Flex'
import Form from '@components/form'
import If from '@components/If'
import List from '@components/list'
import Loading from '@components/Loading'
import Margin from '@components/Margin'
import Modal from '@components/Modal'
import Padding from '@components/Padding'
import Width from '@components/Width'

import { clazz as classFields, course as courseFields, section as sectionFields } from '../fields'
import { clazz as classSchema, course as courseSchema, section as sectionSchema } from '../schemas'

const SECTIONS_WIDTH = 35
const COURSES_GAP = 3.5
const COURSES_WIDTH = 100 - SECTIONS_WIDTH - COURSES_GAP

const FormPage = ({ course, courses, dispatchGetCourse, dispatchSaveCourse, loading, match }) => {
    const { params } = match

    const [payload, updatePayload] = useState({})
    const [classes, updateClasses] = useState([])
    const [clazz, updateClazz] = useState({})
    const [section, updateSection] = useState({})
    const [showSectionModal, updateShowSectionModal] = useState(false)
    const [showClassModal, updateShowClassModal] = useState(false)

    useEffect(() => {
        if (params && params.id) {
            dispatchGetCourse({ id: params.id })
        }
    }, [dispatchGetCourse, params])

    useEffect(() => {
        updatePayload(course)
    }, [course])

    const handleAddSection = () => {
        updateShowSectionModal(true)
        updateSection({})
    }

    const handleAddClass = () => {
        updateShowClassModal(true)
        updateClazz({})
    }

    const handleCancelClass = () => {
        updateShowClassModal(false)
        updateClazz({})
    }

    const handleCancelSection = () => {
        updateShowSectionModal(false)
        updateSection({})
    }

    const handleClassSubmit = values => {
        if (section && section.name) {
            const newSection = { ...section }
            const newSections = [...payload.sections]

            if (clazz) {
                const newClasses = [...section.classes]
                newClasses.splice(newClasses.indexOf(clazz), 1, values)
                newSection.classes = newClasses
            } else {
                newSection.classes = [...(section.classes || []), values]
            }

            newSections.splice(payload.sections.indexOf(section), 1, newSection)
            updateSection(newSection)
            updateClasses(() => {
                if (clazz) {
                    const newClasses = [...classes]
                    newClasses.splice(newClasses.indexOf(clazz), 1, values)
                    return [...newClasses]
                }
                return [...classes, values]
            })
            updatePayload({ ...payload, sections: [...newSections] })
            updateShowClassModal(false)
        } else {
            alerts.error({
                text: i18n.t('texts.sectionNotSelected'),
                title: i18n.t('titles.sectionNotSelected'),
            })
        }
    }

    const handleCourseSubmit = values => dispatchSaveCourse({ ...values, sections: payload.sections || [] })

    const handleEditSection = data => {
        updateSection(data)
        updateShowSectionModal(true)
    }

    const handleEditClass = data => {
        updateClazz(data)
        updateShowClassModal(true)
    }

    const handleRemoveSection = data => {
        updatePayload({ ...payload, sections: [...(payload.sections || [])].filter(s => s.id !== data.id) })
        updateShowSectionModal(false)
    }

    const handleRemoveClass = data => {
        const newSection = { ...section }
        const newSections = [...payload.sections]
        const newClasses = [...section.classes].filter(c => c.id !== data.id)
        newSection.classes = newClasses
        newSections.splice(payload.sections.indexOf(section), 1, newSection)
        updateSection(newSection)
        updateClasses([...classes].filter(c => c.id !== data.id))
        updatePayload({ ...payload, sections: [...newSections] })
    }

    const handleSectionSubmit = values => {
        const newSections = [...(payload.sections || [])]
        if (section) {
            newSections.splice(newSections.indexOf(section), 1, values)
        } else {
            newSections.push(values)
        }
        updatePayload({ ...payload, sections: newSections })
        updateShowSectionModal(false)
    }

    const handleSelectSection = selectedSection => {
        updateClasses(selectedSection.classes || [])
        updateSection(selectedSection)
    }

    return (
        <App>
            <Padding all={3}>
                <Center>
                    <If condition={not(loading)} el={<Loading />}>
                        <Margin bottom={3}>
                            <Container>
                                <Form
                                    fields={courseFields}
                                    initialValues={course}
                                    onSubmit={handleCourseSubmit}
                                    schema={courseSchema}
                                    textButton={i18n.t('buttons.save')}
                                />
                            </Container>
                        </Margin>
                        <Flex>
                            <Width value={SECTIONS_WIDTH}>
                                <Card onAdd={handleAddSection} title={i18n.t('labels.sections')}>
                                    <List
                                        column="name"
                                        data={payload.sections || []}
                                        onEdit={handleEditSection}
                                        onItemClick={handleSelectSection}
                                        onRemove={handleRemoveSection}
                                    />
                                </Card>
                            </Width>
                            <Width value={COURSES_WIDTH}>
                                <Card onAdd={handleAddClass} title={i18n.t('labels.classes')}>
                                    <List column="name" data={classes} onEdit={handleEditClass} onRemove={handleRemoveClass} />
                                </Card>
                            </Width>
                        </Flex>
                        <Modal show={showSectionModal}>
                            <Form
                                actions={onClick => (
                                    <Align value="right">
                                        <ButtonCancel onClick={handleCancelSection}>{i18n.t('buttons.cancel')}</ButtonCancel>
                                        <ButtonSuccess onClick={onClick}>{i18n.t('buttons.save')}</ButtonSuccess>
                                    </Align>
                                )}
                                fields={sectionFields}
                                initialValues={section}
                                onSubmit={handleSectionSubmit}
                                schema={sectionSchema}
                            />
                        </Modal>
                        <Modal show={showClassModal}>
                            <Form
                                actions={onClick => (
                                    <Align value="right">
                                        <ButtonCancel onClick={handleCancelClass}>{i18n.t('buttons.cancel')}</ButtonCancel>
                                        <ButtonSuccess onClick={onClick}>{i18n.t('buttons.save')}</ButtonSuccess>
                                    </Align>
                                )}
                                fields={classFields}
                                initialValues={clazz}
                                onSubmit={handleClassSubmit}
                                schema={classSchema}
                            />
                        </Modal>
                    </If>
                </Center>
            </Padding>
        </App>
    )
}

FormPage.propTypes = {
    course: PropTypes.PropTypes.object.isRequired,
    courses: PropTypes.arrayOf(PropTypes.object).isRequired,
    dispatchGetCourse: PropTypes.func.isRequired,
    dispatchSaveCourse: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    match: PropTypes.object.isRequired,
}

export default withRouter(FormPage)
