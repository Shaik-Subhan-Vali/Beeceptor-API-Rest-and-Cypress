///<reference types ="cypress"/>
import RestAPI from "../../support/PageObjects/Beeceptor_objs";
describe('Beeceptor API testing - POM', () => {
    
    let RAPI = new RestAPI();
    let baseurl ="https://dummy-json.mock.beeceptor.com";

    it('Get status',()=>{
        cy.log("Get status request")
        RAPI.getstatus("GET",baseurl,"/posts")
    })
   
})
