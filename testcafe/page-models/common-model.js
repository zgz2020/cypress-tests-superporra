import { t } from 'testcafe'
import { ClientFunction } from 'testcafe'

const getLocation = ClientFunction(() => document.location.href)

const automationSelector = name => `[data-automation="${name}"]`

class Page {
    constructor () {
        this.languagePicker = automationSelector("language-picker")
        this.languageOption = language => `[value=${language}]`
    }

    async selectLanguage (language) {
        await t 
            .click(this.languagePicker)
            .click(this.languageOption(language))
    }

    async verifyUrl (text) {
        await t.expect(getLocation()).contains(text)
    } 
}

export default new Page()