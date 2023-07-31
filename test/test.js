// @ts-check
import { test } from '@socketsupply/tapzero'

test('find an element', async t => {
    t.ok(document.querySelector('h1'), 'should find an h1')
})
