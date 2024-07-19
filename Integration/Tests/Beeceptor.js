///<reference types ="cypress"/>
import RestAPI from "../../support/PageObjects/Beeceptor_objs";
describe('Beeceptor API testing - POM', () => {
    
    let RAPI = new RestAPI();
    let baseurl ="https://dummy-json.mock.beeceptor.com";

    it('List all available blog posts ',()=>{
        RAPI.get_available_blog_posts("GET",baseurl,"/posts")
    })
    it('Retrieve a post by passing an integer ID',()=>{
        RAPI.get_Retrieve_post("GET",baseurl,"/posts/1")
    })
    it('Listing all the blog comments',()=>{
        RAPI.Listing_blog_comments("GET",baseurl,"/comments")
    })
    it('Retrieve a comment by passing and numeric/alphanumeric ID',()=>{
        RAPI.Retrieve_comment("GET",baseurl,"/comments/1")
    })
    it('Get a list of all the companies',()=>{
        RAPI.list_companies("GET",baseurl,"/companies")
    })
    it('Retrieve details about a company by passing company ID.',()=>{
        RAPI.Retrieve_details_company("GET",baseurl,"/companies/1")
    })
    it('Get a list of all the users',()=>{
        RAPI.Get_list_users("GET",baseurl,"/users")
    })
    it('Retrieve a users details',()=>{
        RAPI.Get_list_users_deatils("GET",baseurl,"/users/1")
    })
    it('Get a list of standard roles.',()=>{
        RAPI.Get_standard_roles("GET",baseurl,"/roles")
    })
    it('List of most pupular quotes',()=>{
        RAPI.Get_popular_quotes("GET",baseurl,"/quotes")
    })
    it('List of all the countries in the world with their two-digit country code',()=>{
        RAPI.List_all_countries("GET",baseurl,"/countries")
    })

})
