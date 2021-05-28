import { Selector } from 'testcafe'

fixture `homepage`
    .page `https://superporra-dev.herokuapp.com/`

test('Homepage - desktop', async t => {
    await t
        .click('[data-automation="language-picker"]')
})

