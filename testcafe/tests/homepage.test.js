import homepage from '../page-models/homepage-model'
import { baseUrl, viewports, languages } from '../support/testData'

fixture `homepage`
    .page `${baseUrl}`

viewports.forEach(viewport => {
    languages.forEach(language => {
        test(`Homepage -  ${viewport.name} - ${language}`, async t => {
            await t.resizeWindow(viewport.width, viewport.height)

            await homepage.selectLanguage(language)
        
            await t.click(homepage.homepageSignUpLink)
            
            await homepage.verifyUrl('/join')
        })
    })
})
