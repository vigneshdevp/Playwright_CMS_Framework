import {Page,expect} from "@playwright/test"
import { Locator } from "@playwright/test"


export class login {
     page : Page
     baseurl : string
     username : string
     password : string
     userField: Locator
     passwordField: Locator
     loginbtn : Locator



     constructor(page:Page)
     {
        this.page = page
        this.baseurl = process.env.APP_BASE_URL || " "
        this.username = process.env.APP_USERNAME || " "
        this.password = process.env.APP_PASSWORD || " "
        this.userField = this.page.locator("// input [@name='Username']")
        this.passwordField = this.page.locator("// input [@name='Password']")
        this.loginbtn = this.page.getByRole("button", {name:"Login"})

     }

     async loginapp(){
        await this.page.goto(`${this.baseurl}/Login`,{waitUntil:'load'})
        await this.userField.fill(this.username)
        await this.passwordField.fill(this.password)
        await this.page.getByRole('button', { name: 'Login' }).click()
        
        await this.page.locator('[class="rz-menu rz-profile-menu"]').waitFor({ state: 'visible', timeout: 60000 })
        await expect(this.page.locator('[class="rz-menu rz-profile-menu"]')).toBeVisible()
    }


     }



