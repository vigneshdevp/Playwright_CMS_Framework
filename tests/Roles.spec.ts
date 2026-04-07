import {test} from "../SRC/Config/Fixtures"
import { role } from "../SRC/Pages/Roles"


test.describe("Roles page validation", ()=>{
        
        let Rolespage  : role;
        
        test.beforeEach(async({pageWithLogin})=>{
               Rolespage = new role(pageWithLogin)
               })


       //  test("validate login successfull", async()=>{
       //          await Rolespage.commonpagesitemapcheck()
       //  })

         
       //  test("Roles page landing", async()=>{
       //          await Rolespage.navigateviacommon("Administrator", "Roles")
       //          await Rolespage.checkrolepageland()
                
                
       //   })

          test("Adding new roles", async()=>{
                
                await Rolespage.navigateviacommon("Administrator", "Roles")
                await Rolespage.checkrolepageland()
                await Rolespage.checkaddrolepage()
                await Rolespage.addnewrole()
                
                
         })

         test("Adding duplicate roles", async()=>{
                
                await Rolespage.navigateviacommon("Administrator", "Roles")
                await Rolespage.checkrolepageland()
                await Rolespage.checkaddrolepage()
                await Rolespage.addnewrole()
                await Rolespage.addduplicaterole()
                
         })

          test("Delete roles", async()=>{
                
                await Rolespage.navigateviacommon("Administrator", "Roles")
                await Rolespage.checkrolepageland() //
                await Rolespage.deleteRole()


          })

})
