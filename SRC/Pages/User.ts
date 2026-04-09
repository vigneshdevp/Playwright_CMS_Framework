import {Page,expect} from "@playwright/test"
import { common } from "./Common"
import { confirmPassword, userSuccess } from "../Constants/Const"



export class User extends common {
     page : Page
     num : number


     constructor(page:Page)
     {
        super(page)
        this.page = page
        this.num = this.randomNumber()
        

    }

    async addUser(){
        
        await this.spinner.waitFor({state:"detached"})
        await expect(this.userHeading).toBeVisible({timeout:250000})
        await this.addingUser.click()
        await this.userAddHeading.waitFor({state: 'visible', timeout: 60000})
        await expect(this.userAddHeading).toBeVisible()

        
        //fill details//
        await this.page.locator("//input[@name='Email']").fill(`Testcase${this.num}@test.com`) 
        await this.page.locator('//label[@class="rz-dropdown-label rz-inputtext "]').nth(0).click()
        await this.page.getByRole('option', { name: "Auditor" }).click()
        await this.page.waitForTimeout(5000)
        await this.page.locator("//input[@name='Password']").fill("Hello@123",{timeout:100000}) 
        await this.page.locator("//input[@name='ConfirmPassword']").fill("Hello@123",{timeout:90000})
        await this.page.getByRole('button', { name: 'save Save' }).click({timeout:90000})
        await expect(this.page.getByText(userSuccess)).toBeVisible({timeout:600000})
         


    }
    async addUserEmptyField(){
        const num : number = this.randomNumber()
        await this.spinner.waitFor({state:"detached"})
        await expect(this.userHeading).toBeVisible({timeout:250000})
        await this.addingUser.click()
        await this.userAddHeading.waitFor({state: 'visible', timeout: 60000})
        await expect(this.userAddHeading).toBeVisible()
         await this.page.getByRole('button', { name: 'save Save' }).click()
        await expect(this.page.getByText(confirmPassword)).toBeVisible({timeout:600000}) 



}
     async searchUser(user:string){
        await this.spinner.waitFor({state:"detached"})
        await expect(this.userHeading).toBeVisible({timeout:250000})
        await this.page.locator('.rzi.rz-grid-filter-icon').first().click()
        // await this.page.locator("//label [@class='rz-dropdown-label rz-inputtext' ]").nth(15).click()
        // await expect(this.page.getByRole("list", {name:"Contains"})).toBeVisible({timeout:250000})
        // //await this.page.getByRole("list", {name:"Contains"}).click()
        await this.page.getByRole('textbox').nth(3).fill(user)
        await this.page.getByRole("button", {name:"Apply"}).click()
        await this.page.waitForTimeout(10000)
        


        for (let i = 0 ; i<1000; i++){
        
          
        let rowcount : number = await this.page.locator("//tbody//tr/td[1]").count()
        console.log(rowcount);
        
        for (let i = 0 ; i<rowcount; i++)
            {
        
            const cellval = await this.page.locator("//tbody//tr/td[1]").nth(i).textContent()
            expect(cellval).toContain(user)
            

            }
        
        let rightarrow = await this.page.locator("//span [@class='rz-paginator-icon rzi rzi-caret-right']").isVisible()
        
        
        if (rightarrow)  {

           await this.page.locator("//span [@class='rz-paginator-icon rzi rzi-caret-right']").click({timeout:25000})
           
           
        }
        else{
          break
        }
        
        
    }
}
        async editUser_deactivate(){
            await this.page.getByLabel('Add Application User').getByRole('button', { name: 'close' }).click()
            //await this.page.waitForTimeout(10000)
            await this.page.locator("// i [@class='rzi rz-grid-filter-icon ']").nth(1).click({timeout:250000})
            await this.page.locator("// span [@class='rz-dropdown-trigger-icon  rzi rzi-chevron-down']").nth(16).click({timeout:250000})
            await this.page.getByRole("option",{name:"Equals",exact:true}).click({timeout:250000})
            // await expect(this.page.locator('#popupS2-9pTPFCEEmail-form label').filter({ hasText: 'Equals' })).toBeVisible({timeout:250000})
            await this.page.getByRole('textbox').nth(3).fill(`Testcase${this.num}@test.com`,{timeout:250000})
            await this.page.getByRole("button", {name:"Apply"}).click()
            await this.page.getByText(`Testcase${this.num}@test.com`).click()
            await expect(this.page.getByText("Edit Application User")).toBeVisible({timeout:300000})
            await this.page.getByRole("button", {name:"Deactivate User"}).click({timeout:250000})
            await this.page.getByRole("button", {name:"Deactivate",exact:true}).click({timeout:250000})
            await expect(this.page.getByText("User Deactivated")).toBeVisible({timeout:250000})


           }

        async editUser_password(){
            await this.page.getByLabel('Add Application User').getByRole('button', { name: 'close' }).click()
            await this.page.locator("// i [@class='rzi rz-grid-filter-icon ']").nth(1).click({timeout:250000})
            await this.page.locator("// span [@class='rz-dropdown-trigger-icon  rzi rzi-chevron-down']").nth(16).click({timeout:250000})
            await this.page.getByRole("option",{name:"Equals",exact:true}).click({timeout:300000})
            await this.page.waitForTimeout(2000)
            //await expect(this.page.locator('#popupS2-9pTPFCEEmail-form label').filter({ hasText: 'Equals' })).toBeVisible({timeout:300000})
            await this.page.getByRole('textbox').nth(3).fill(`Testcase${this.num}@test.com`,{timeout:250000})
            await this.page.getByRole("button", {name:"Apply"}).click()
            await this.page.getByText(`Testcase${this.num}@test.com`).click()
            await expect(this.page.getByText("Edit Application User")).toBeVisible({timeout:300000})
            //await this.page.waitForTimeout(2000)
            await expect(this.page.locator("//input[@name='Password']")).toBeVisible({timeout:300000})
            await expect(this.page.locator("//input[@name='ConfirmPassword']")).toBeVisible({timeout:300000})
            await this.page.locator("//input[@name='Password']").fill("hello")
            await this.page.locator("//input[@name='ConfirmPassword']").fill("hello01")
            await this.page.getByRole('button', { name: 'save Save' }).click()
            await expect(this.page.getByText("Confirm Password does not match Password")).toBeVisible({timeout:300000})

        }   

        async editUser_addfirm(){
            await this.page.getByLabel('Add Application User').getByRole('button', { name: 'close' }).click()
            await this.page.locator("// i [@class='rzi rz-grid-filter-icon ']").nth(1).click({timeout:250000})
            await this.page.locator("// span [@class='rz-dropdown-trigger-icon  rzi rzi-chevron-down']").nth(16).click({timeout:250000})
            await this.page.getByRole("option",{name:"Equals",exact:true}).click({timeout:300000})
            await this.page.waitForTimeout(2000)
            //await expect(this.page.locator('#popupS2-9pTPFCEEmail-form label').filter({ hasText: 'Equals' })).toBeVisible({timeout:300000})
            await this.page.getByRole('textbox').nth(3).fill(`Testcase${this.num}@test.com`,{timeout:250000})
            await this.page.getByRole("button", {name:"Apply"}).click()
            await this.page.getByText(`Testcase${this.num}@test.com`).click()
            await expect(this.page.getByText("Edit Application User")).toBeVisible({timeout:300000})
            await this.page.locator("// span [@class='rz-button-text']").filter({hasText:"New"}).click({timeout:250000})
            await this.page.locator("// input [@name='Name']").nth(1).fill(`playwrightTest${this.num}`)
            await this.page.getByText("Choose Firm Type").click({timeout:250000})
            await this.page.getByRole("option",{name:"Adjusters"}).click()
            await this.page.locator("//div [@class='rz-dialog-content']").nth(1).locator("i").filter({hasText:"save"}).click({timeout:250000})
            await this.page.waitForTimeout(2000)
            await expect(this.page.locator('label').filter({ hasText: `playwrightTest${this.num}` })).toBeVisible({timeout:300000})
        }

        async editUser_selectfirm(user:string,firm:string){
            await this.page.locator('svg').waitFor({state:"detached"})
            await expect(this.page.getByRole("heading",{name:"Users"})).toBeVisible({timeout:250000})
            await this.page.locator("// i [@class='rzi rz-grid-filter-icon ']").nth(1).click({timeout:250000})
            await this.page.locator("// span [@class='rz-dropdown-trigger-icon  rzi rzi-chevron-down']").nth(16).click({timeout:250000})
            await this.page.getByRole("option",{name:"Equals",exact:true}).click({timeout:300000})
            await this.page.waitForTimeout(2000)
            //await expect(this.page.locator('#popupS2-9pTPFCEEmail-form label').filter({ hasText: 'Equals' })).toBeVisible({timeout:300000})
            await this.page.getByRole('textbox').nth(3).fill(user,{timeout:250000})
            await this.page.getByRole("button", {name:"Apply"}).click()
            await this.page.getByText(user).click()
            await expect(this.page.getByText("Edit Application User")).toBeVisible({timeout:300000})
            await this.page.locator("// input [@name='Name']").fill("testing")
            await this.page.locator('label').filter({hasText:"Choose Firm"}).click()
            await this.page.locator('li').filter({hasText:firm}).click()
            await this.page.waitForTimeout(5000)
            await this.page.getByRole('button', { name: 'save Save' }).click()
            await expect(this.page.getByText("User Updated Successfully")).toBeVisible({timeout:300000}) 




        }}
