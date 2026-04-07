import {test as baseTest, Page} from '@playwright/test'
import { login } from '../Pages/Login'

type LoginFixtures = {
    pageWithLogin: Page
}


export const test = baseTest.extend<LoginFixtures>({
    pageWithLogin: async({page}, use)=> {
        const loginPage = new login(page)
        await loginPage.loginapp()
        await use(page)
    }
})

