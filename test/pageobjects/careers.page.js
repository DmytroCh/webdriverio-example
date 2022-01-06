const Page = require('./page');
const MenuBar = require('../pageobjects/menu.bar');

class CareersPage extends Page {

    DEPARTMENTS = {
        QA: "QA",
        ALL: "All departments"
    }

    get listOfOffers(){
        return $$('.job-offers__wrapper .job-offer__title')
    }

    async open(){
        await super.open() // open baseUrl
        return MenuBar.btnCareers.click()
    }

    /**
    * @param {string} department One of DEPARTMENTS enum values
    */
    async selectDepartment(department){
        const dropDown = await $('button.select--desktop').$(`span=${this.DEPARTMENTS.ALL}`)
        //console.log("HTML", await dropDown.getHTML())
        await dropDown.scrollIntoView({block: "center"}) // This is funny, default scrolling makes element hovered by cookie bar or navbar
        await dropDown.click()

        const option = await $(`li=${department}`)
        await option.scrollIntoView({block: "center"}) // This is funny, default scrolling makes element hovered by cookie bar or navbar
        await option.click()
    }
}

module.exports = new CareersPage()