import {test} from "../SRC/Config/Fixtures"
import { claims } from "../SRC/Pages/Claims"



test.describe("claim page validation", ()=>{

       let claimpage : claims
       test.beforeEach(async({pageWithLogin})=>{
               claimpage = new claims(pageWithLogin)
               })

       test("Add user with valid details", async()=>{
                
              await claimpage.claimPage_nav()
              await claimpage.createclaimforuser()
               
       })
         











})
