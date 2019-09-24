import * as faIcons from '@fortawesome/free-solid-svg-icons'

import { dom, library } from '@fortawesome/fontawesome-svg-core'

const icons = Object.entries(faIcons)
    .map(([, value]) => value)
    .filter(({ icon }) => !!icon)

library.add(icons)
dom.watch()
