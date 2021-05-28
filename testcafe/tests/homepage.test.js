import homepage from '../page-models/homepage-model'
import { languages } from '../support/testData'

fixture `homepage - desktop`
    .page `https://superporra-dev.herokuapp.com/`
    .beforeEach( async t => {
        await t
            .resizeWindow(1280, 670)
    })

languages.forEach(language => {
    test(`Homepage - Desktop - ${language}`, async t => {
        await homepage.selectLanguage(language)
    
        await t.click(homepage.homepageSignUpLink)
        
        await homepage.verifyUrl('/join')
    })
})


fixture `homepage - iPhone-6`
    .page `https://superporra-dev.herokuapp.com/`
    .beforeEach( async t => {
        await t
            .resizeWindow(375, 667)
    })
    
languages.forEach(language => {
    test(`Homepage - iPhone 6 - &{language}`, async t => {
        await homepage.selectLanguage(language)
    
        await t.click(homepage.homepageSignUpLink)
    
        await homepage.verifyUrl('/join')
    })
})
