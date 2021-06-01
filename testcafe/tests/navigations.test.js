import common from '../page-models/common-model'
import navigation from '../page-models/navigation-model'
import { baseUrl, viewports, languages, registeredUser, navigationAssertions } from '../support/testData'

fixture `navigation`
    .page `${baseUrl}`

viewports.forEach(viewport => {
    languages.forEach(language => {
        test(`Navigation - ${viewport.name} - ${language}`, async t => {
            await t.resizeWindow(viewport.width, viewport.height)
            await common.selectLanguage(language)
        
            await navigation.checkNavigationItemLabel(1, navigationAssertions(language).navItem1)
            await navigation.checkNavigationItemLabel(2, navigationAssertions(language).navItem2)
            await navigation.checkNavigationItemLabel(3, navigationAssertions(language).navItem3)
            await navigation.checkNavigationItemLabel(4, navigationAssertions(language).navItem4)
            await navigation.checkNavigationItemLabel(5, navigationAssertions(language).navItem5)
            await navigation.checkNavigationItemLabel(6, navigationAssertions(language).navItem6)
            await navigation.checkNavigationItemLabel(7, navigationAssertions(language).navItem7A)

        })
    })
})
