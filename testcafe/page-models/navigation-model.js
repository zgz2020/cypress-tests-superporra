import { Selector, t } from 'testcafe'

const automationSelector = name => `[data-automation="${name}"]`

class Page {
    constructor () {
        this.navItem = position => Selector(`${automationSelector("nav-item")}:nth-child(${position})`)
    }

    async checkNavigationItemLabel (position, label) {
        await t.expect(this.navItem(position).textContent).contains(label)
    }
}

export default new Page()