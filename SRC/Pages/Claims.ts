import {Page,expect} from "@playwright/test"


export class claims {
     page : Page
    
     constructor(page:Page)
     {
        
        this.page = page
        
    }


     async claimPage_nav(){

      await this.page.getByText("New Claim").click()
      await expect(this.page.getByText("Select Program")).toBeVisible({timeout:50000})
      await expect(this.page.getByText("Select Policy Year")).toBeVisible()
      await expect(this.page.getByText("New Claim Number")).toBeVisible()
     
   }

      async createclaimforuser(){

      
      await this.page.locator("// label[@class= 'rz-dropdown-label rz-inputtext ']").nth(1).click()
      await this.page.getByText("2026-27").click()
      await this.page.locator("// span[@class= 'rz-button-icon-left rzi rzi-calendar']").click()
      await this.page.getByText("26", { exact: true }).nth(1).click()
      await this.page.locator("// div[@class= 'rz-dropdown-trigger  rz-corner-right']").nth(3).click()
      await expect(this.page.getByText('Application', { exact: true })).toBeVisible({timeout:250000})
      await this.page.locator("// span", { hasText: 'Application' }).nth(1).click()
      await this.page.getByRole('link', { name: 'Trade' }).click({timeout:250000})
      await expect(this.page.locator("// input[@name='TradeAddress1']")).toBeVisible({timeout:800000})
      await this.page.locator("// input[@name='TradeAddress1']").fill("test")
      await this.page.getByText("Finish").click()
      await expect(this.page.getByText("Claim detials")).toBeVisible({timeout:250000})
      await expect(this.page.getByText("Contact Info")).toBeVisible({timeout:250000})
      await expect(this.page.getByText("Reserves/Payments")).toBeVisible({timeout:250000})
      await expect(this.page.getByText("Notes")).toBeVisible({timeout:250000})

          
}
}