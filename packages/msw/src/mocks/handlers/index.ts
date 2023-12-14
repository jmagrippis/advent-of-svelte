import {adventApiHandlers} from './api/advent'
import {relativeApiHandlers} from './api/relative'

export const handlers = [...adventApiHandlers, ...relativeApiHandlers]
