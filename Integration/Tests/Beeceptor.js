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
   
})
