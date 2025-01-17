package My_Package;

import org.testng.annotations.Test;
import io.restassured.http.ContentType;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class Beeceptor_API {
    
    final String Baseurl = "https://dummy-json.mock.beeceptor.com";
    
    // Test to retrieve all employee data and verify the title of the first post
    @Test
    public void get_all_emp_data() {
        given().get(Baseurl + "/posts")
            .then()
                .statusCode(200)
                .contentType(ContentType.JSON)
                .body("[0].title", equalTo("Introduction to Artificial Intelligence"))
                .log().all();
    }
    
    // Test to retrieve a specific post by ID and verify its body content
    @Test
    public void Retrieve_post_by_ID() {
        given().get(Baseurl + "/posts/1")
            .then()
                .statusCode(200)
                .contentType(ContentType.JSON)
                .body("body", equalTo("Learn the basics of Artificial Intelligence and its applications in various industries."))
                .log().all();
    }
    
    // Test to list all blog comments and verify the email of the fourth comment
    @Test
    public void Listing_all_blog_comments() {
        given().get(Baseurl + "/comments")
            .then()
                .statusCode(200)
                .contentType(ContentType.JSON)
                .body("[3].email", equalTo("sophia.lee@example.com"))
                .log().all();
    }
    
    // Test to retrieve a specific comment by ID and verify its email
    @Test
    public void Retrieve_comment() {
        given().get(Baseurl + "/comments/1")
            .then()
                .statusCode(200)
                .contentType(ContentType.JSON)
                .body("email", equalTo("john.smith@example.com"))
                .log().all();
    }
    
    // Test to get a list of companies and verify the CEO name of the second company
    @Test
    public void Get_list_companies() {
        given().get(Baseurl + "/companies")
            .then()
                .statusCode(200)
                .contentType(ContentType.JSON)
                .body("[1].ceoName", equalTo("Jane Doe"))
                .log().all();
    }
    
    // Test to retrieve details of a specific company by ID and verify its industry
    @Test
    public void Retrieve_details_company_ID() {
        given().get(Baseurl + "/companies/1")
            .then()
                .statusCode(200)
                .contentType(ContentType.JSON)
                .body("industry", equalTo("Technology"))
                .log().all();
    }
    
    // Test to get a list of users and verify the name of the third user
    @Test
    public void Get_list_users() {
        given().get(Baseurl + "/users")
            .then()
                .statusCode(200)
                .contentType(ContentType.JSON)
                .body("[2].name", equalTo("John Smith"))
                .log().all();
    }
    
    // Test to retrieve details of a specific user by ID and verify their name
    @Test
    public void Retrieve_user_details() {
        given().get(Baseurl + "/users/1")
            .then()
                .statusCode(200)
                .contentType(ContentType.JSON)
                .body("name", equalTo("Emily Johnson"))
                .log().all();
    }
    
    // Test to get a list of standard roles and verify the name of the first role
    @Test
    public void Get_list_standard_roles() {
        given().get(Baseurl + "/roles")
            .then()
                .statusCode(200)
                .contentType(ContentType.JSON)
                .body("[0].name", equalTo("Admin"))
                .log().all();
    }
    
    // Test to list popular quotes and verify the first quote
    @Test
    public void List_popular_quote() {
        given().get(Baseurl + "/quotes")
            .then()
                .statusCode(200)
                .contentType(ContentType.JSON)
                .body("[0].quote", equalTo("The only way to do great work is to love what you do."))
                .log().all();
    }
    
    // Test to list countries (assuming to verify the structure of the response)
    @Test
    public void List_countries() {
        given().get(Baseurl + "/countries")
            .then()
                .statusCode(200)
                .contentType(ContentType.JSON)         
                .log().all();
    }
}
