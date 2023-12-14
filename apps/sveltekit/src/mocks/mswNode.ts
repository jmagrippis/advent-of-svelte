import {setupServer} from 'msw/node'

import {handlers} from '@repo/msw'

export const mswNode = setupServer(...handlers)
