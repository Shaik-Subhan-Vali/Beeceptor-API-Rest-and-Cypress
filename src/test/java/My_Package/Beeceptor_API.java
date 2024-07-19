package My_Package;

import static io.restassured.RestAssured.*;
import io.restassured.http.ContentType;
import org.json.simple.JSONObject;
import org.testng.annotations.Test;
public class Beeceptor_API {
	
	String Baseurl ="https://dummy-json.mock.beeceptor.com";
	
	@Test
	public void get_all_emp_data() {
		given().get(Baseurl+"/posts").then().statusCode(200).log().all();
	}
	@Test
	public void Retrieve_post_by_ID() {
		given().get(Baseurl+"/posts/1").then().statusCode(200).log().all();
	}
	@Test
	public void Listing_all_blog_comments() {
		given().get(Baseurl+"/comments").then().statusCode(200).log().all();
	}
	@Test
	public void Retrieve_comment() {
		given().get(Baseurl+"/comments/1").then().statusCode(200).log().all();
	}
	@Test
	public void Get_list_companies() {
		given().get(Baseurl+"/companies").then().statusCode(200).log().all();
	}
	@Test
	public void Retrieve_details_company_ID() {
		given().get(Baseurl+"/companies/1").then().statusCode(200).log().all();
	}
	@Test
	public void Get_list_users() {
		given().get(Baseurl+"/users").then().statusCode(200).log().all();
	}
	@Test
	public void Retrieve_user_details () {
		given().get(Baseurl+"/users/1").then().statusCode(200).log().all();
	}
	@Test
	public void Get_list_standard_roles() {
		given().get(Baseurl+"/roles").then().statusCode(200).log().all();
	}
	@Test
	public void List_pupular_quote () {
		given().get(Baseurl+"/quotes").then().statusCode(200).log().all();
	}
	@Test
	public void List_countries  () {
		given().get(Baseurl+"/countries").then().statusCode(200).log().all();
	}
	

}
