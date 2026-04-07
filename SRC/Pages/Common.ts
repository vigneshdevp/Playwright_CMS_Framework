import {Locator, Page,expect} from "@playwright/test"
import { sitemap } from "../Constants/Const"


export class common {
     page : Page
     spinner : Locator
     roleHeading : Locator
     userHeading : Locator
     addRole : Locator
     addingUser : Locator
     roleAddHeading: Locator
     userAddHeading : Locator
    

     constructor(page:Page)
     {
        this.page = page
        this.spinner = this.page.locator('.rzi-circle-o-notch')
        this.roleHeading = this.page.getByRole('heading', { name: 'Roles' })
        this.userHeading = this.page.getByRole('heading', { name: 'Users' })
        this.addRole = this.page.getByRole("button", {name:"Add"})
        this.addingUser = this.page.getByRole("button", {name:"Add"})
        this.roleAddHeading = this.page.getByText('Add Application Role')
        this.userAddHeading =  this.page.getByText('Add Application User')
    }

     
    async commonpagesitemapcheck(){

        for (let site of sitemap) {  

        expect(this.page.locator("//span [@class='rz-navigation-item-text']").getByText(site,{exact:true})).toBeVisible({timeout:250000})

        }}

    async navigateviacommon(parentMenu: string, childMenu?: string) {
        await this.page.getByText(parentMenu, { exact: true }).waitFor({ state: 'visible', timeout: 60000 })
        await this.page.getByText(parentMenu, { exact: true }).click()
        
        if (childMenu) {
            await this.page.getByRole('link', { name: childMenu }).waitFor({ state: 'visible', timeout: 60000 })
            await this.page.getByRole('link', { name: childMenu }).click()
        }
    }

    randomNumber(){
        let randomNum : number = (Math.floor(Math.random() * 10000));
        return randomNum;
}

}

      
 

        


     



