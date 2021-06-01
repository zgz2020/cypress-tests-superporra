const automationSelector = name => `[data-automation="${name}"]`

class Page {
    constructor () {
        this.homepageSignUpLink = automationSelector("sign-up-link")
    }
}

export default new Page()