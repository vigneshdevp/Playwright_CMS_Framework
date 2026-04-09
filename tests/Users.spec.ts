import {test} from "../SRC/Config/Fixtures"
import { User } from "../SRC/Pages/User";


test.describe("User page validation", ()=>{
        
        let Userpage  : User;
        //let user : string [] = ["Test","user"]
       test.beforeEach(async({pageWithLogin})=>{
               Userpage = new User(pageWithLogin)
               })
         

       test("Add user with valid details", async()=>{
                
                await Userpage.navigateviacommon("Administrator", "Users")
                await Userpage.addUser()
               
       })

       test("Add user without mandatory fields", async()=>{
                
                await Userpage.navigateviacommon("Administrator", "Users")
                await Userpage.addUserEmptyField()
               
       })     

       
        test("Search user", async()=>{
                
                await Userpage.navigateviacommon("Administrator", "Users")
                
                await Userpage.searchUser("QA")
                
               
       })    

        test("Add and edit user_deactivate)", async()=>{
                
                await Userpage.navigateviacommon("Administrator", "Users")
                await Userpage.addUser()
                await Userpage.editUser_deactivate()
               
       })

        test("Add and edit user_password)", async()=>{
                
                await Userpage.navigateviacommon("Administrator", "Users")
                await Userpage.addUser()
                await Userpage.editUser_password()
               
       })




})