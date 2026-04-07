import {Page,expect} from "@playwright/test"
import { Locator } from "@playwright/test"
import { common } from "./Common"



export class role extends common {
     page : Page
     num : number = 0
    


     constructor(page:Page)
     {
        super(page)
        this.page = page

    }

    async checkrolepageland()
     {   
         await this.spinner.waitFor({state:"detached"})
         await expect(this.roleHeading).toBeVisible({timeout:250000})
        
      }   
     async checkaddrolepage(){
         await this.addRole.click()
         await this.roleHeading.waitFor({state: 'visible', timeout: 60000})
         await expect(this.roleHeading).toBeVisible()   

     }

     
     async addnewrole(){
         this.num  = this.randomNumber()
         await this.page.locator("// input [@name='Name']").fill(`test_${this.num}`)
         await this.page.getByRole('button', { name: 'save Save' }).click()
         
         

     }
     async addduplicaterole(){
        
        
        await this.page.waitForTimeout(6000)
        await expect(this.roleHeading).toBeVisible({timeout:250000})
        await this.addRole.click()
        await this.roleAddHeading.waitFor({state: 'visible', timeout: 60000})
        await expect(this.roleAddHeading).toBeVisible()
        
        // fill details//
        await this.page.locator("// input [@name='Name']").fill(`test_${this.num}`)
        await this.page.getByRole('button', { name: 'save Save' }).click()
        await this.page.getByText("Cannot create role").waitFor({state: 'visible', timeout: 30000})
        await expect(this.page.getByText("Cannot create role")).toBeVisible()

    }

    async deleteRole(){
        await this.page.waitForTimeout(6000)
        await expect(this.roleHeading).toBeVisible({timeout:250000})
        await this.page.locator("//tbody/tr/td[2]").nth(4).click()
        await expect(this.page.getByText("Confirm")).toBeVisible({timeout:250000})
        await this.page.getByRole("button",{name:"Ok"}).click()
        }


    }