///<reference types ="cypress"/>
import RestAPI from "../../support/PageObjects/Beeceptor_objs";

describe('Beeceptor API testing - POM', () => {
    
    let RAPI = new RestAPI();
    let baseurl = "https://dummy-json.mock.beeceptor.com";

    it('List all available blog posts', () => {
        // Test to list all available blog posts
        RAPI.get_available_blog_posts("GET", baseurl, "/posts");
    });

    it('Retrieve a post by passing an integer ID', () => {
        // Test to retrieve a post by passing an integer ID
        RAPI.get_Retrieve_post("GET", baseurl, "/posts/1");
    });

    it('Listing all the blog comments', () => {
        // Test to list all the blog comments
        RAPI.Listing_blog_comments("GET", baseurl, "/comments");
    });

    it('Retrieve a comment by passing a numeric/alphanumeric ID', () => {
        // Test to retrieve a comment by passing a numeric/alphanumeric ID
        RAPI.Retrieve_comment("GET", baseurl, "/comments/1");
    });

    it('Get a list of all the companies', () => {
        // Test to get a list of all the companies
        RAPI.list_companies("GET", baseurl, "/companies");
    });

    it('Retrieve details about a company by passing company ID.', () => {
        // Test to retrieve details about a company by passing company ID
        RAPI.Retrieve_details_company("GET", baseurl, "/companies/1");
    });

    it('Get a list of all the users', () => {
        // Test to get a list of all the users
        RAPI.Get_list_users("GET", baseurl, "/users");
    });

    it('Retrieve a user\'s details', () => {
        // Test to retrieve a user's details
        RAPI.Get_list_users_deatils("GET", baseurl, "/users/1");
    });

    it('Get a list of standard roles.', () => {
        // Test to get a list of standard roles
        RAPI.Get_standard_roles("GET", baseurl, "/roles");
    });

    it('List of most popular quotes', () => {
        // Test to list most popular quotes
        RAPI.Get_popular_quotes("GET", baseurl, "/quotes");
    });

    it('List of all the countries in the world with their two-digit country code', () => {
        // Test to list all countries with their country codes
        RAPI.List_all_countries("GET", baseurl, "/countries");
    });

});
