import {setupWorker} from 'msw/browser'

import {handlers} from '@repo/msw'

export const mswBrowser = setupWorker(...handlers)
