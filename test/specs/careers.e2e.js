const CareersPage = require('../pageobjects/careers.page')


describe('Execute tests on Careers page', () => {
    it('Should be offers on the careers page', async () => {

        await CareersPage.open(); // Open Careers page from main page
        await expect(browser).toHaveUrlContaining("/careers") // check if it's proper URL

        const offers = await CareersPage.listOfOffers //get List of available offers
        await expect(offers).toBeElementsArrayOfSize({gte: 1}) // list must have at least one offer
    });
    
    it('Should work department filter', async () => {

        await CareersPage.open() // Open Careers page from main page
        await expect(browser).toHaveUrlContaining("/careers") // check if it's proper URL

        const offers = await CareersPage.listOfOffers //get List of available offers
        const expectedOffers = []
        for(let i=0; i < offers.length; i++){
            const title = await offers[i].getText()
            if(title.includes('QA'))
                expectedOffers.push(title)
        }
        await CareersPage.selectDepartment(CareersPage.DEPARTMENTS.QA)
        const filteredOffers = await CareersPage.listOfOffers //get List of filtered offers

        await expect(filteredOffers).toBeElementsArrayOfSize(expectedOffers.length)
        for(el of filteredOffers){
            console.log(el)
            await expect(el).toHaveTextContaining('QA')
        }
    });
});
