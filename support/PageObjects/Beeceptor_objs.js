class RestAPI {

    // Method to get available blog posts and assert on the title of the first post
    get_available_blog_posts(method, burl, endpoints) {
        cy.request({
            method: method,
            url: burl + endpoints,
            headers: {
                "content-type": "application/json"
            }
        }).then((x) => {
            expect(x.status).to.equal(200);
            let obj = JSON.parse(JSON.stringify(x.body))
            let title = obj[0].title;
            expect(title).to.equal("Introduction to Artificial Intelligence");
        });
    }

    // Method to retrieve a post by passing an integer ID and assert on the body content
    get_Retrieve_post(method, burl, endpoints) {
        cy.request({
            method: method,
            url: burl + endpoints,
            headers: {
                "content-type": "application/json"
            }
        }).then((x) => {
            expect(x.status).to.equal(200);
            let obj = JSON.parse(JSON.stringify(x.body))
            let body = obj.body;
            expect(body).to.equal("Learn the basics of Artificial Intelligence and its applications in various industries.");
        });
    }

    // Method to list all blog comments and assert on the email of a specific comment
    Listing_blog_comments(method, burl, endpoints) {
        cy.request({
            method: method,
            url: burl + endpoints,
            headers: {
                "content-type": "application/json"
            }
        }).then((x) => {
            expect(x.status).to.equal(200);
            let obj = JSON.parse(JSON.stringify(x.body))
            let email = obj[3].email;
            expect(email).to.equal("sophia.lee@example.com");
        });
    }

    // Method to retrieve a comment by passing a numeric/alphanumeric ID and assert on the email
    Retrieve_comment(method, burl, endpoints) {
        cy.request({
            method: method,
            url: burl + endpoints,
            headers: {
                "content-type": "application/json"
            }
        }).then((x) => {
            expect(x.status).to.equal(200);
            let obj = JSON.parse(JSON.stringify(x.body))
            let email = obj.email;
            expect(email).to.equal("john.smith@example.com");
        });
    }

    // Method to list all companies and assert on the CEO name of the second company
    list_companies(method, burl, endpoints) {
        cy.request({
            method: method,
            url: burl + endpoints,
            headers: {
                "content-type": "application/json"
            }
        }).then((x) => {
            expect(x.status).to.equal(200);
            let obj = JSON.parse(JSON.stringify(x.body))
            let ceoName = obj[1].ceoName;
            expect(ceoName).to.equal("Jane Doe");
        });
    }

    // Method to retrieve details about a company by passing company ID and assert on the industry
    Retrieve_details_company(method, burl, endpoints) {
        cy.request({
            method: method,
            url: burl + endpoints,
            headers: {
                "content-type": "application/json"
            }
        }).then((x) => {
            expect(x.status).to.equal(200);
            let obj = JSON.parse(JSON.stringify(x.body))
            let industry = obj.industry;
            expect(industry).to.equal("Technology");
        });
    }

    // Method to get a list of all users and assert on the name of the third user
    Get_list_users(method, burl, endpoints) {
        cy.request({
            method: method,
            url: burl + endpoints,
            headers: {
                "content-type": "application/json"
            }
        }).then((x) => {
            expect(x.status).to.equal(200);
            let obj = JSON.parse(JSON.stringify(x.body))
            let name = obj[2].name;
            expect(name).to.equal("John Smith");
        });
    }

    // Method to retrieve a user's details and assert on the name
    Get_list_users_deatils(method, burl, endpoints) {
        cy.request({
            method: method,
            url: burl + endpoints,
            headers: {
                "content-type": "application/json"
            }
        }).then((x) => {
            expect(x.status).to.equal(200);
            let obj = JSON.parse(JSON.stringify(x.body))
            let name = obj.name;
            expect(name).to.equal("Emily Johnson");
        });
    }

    // Method to get a list of standard roles and assert on the name of the first role
    Get_standard_roles(method, burl, endpoints) {
        cy.request({
            method: method,
            url: burl + endpoints,
            headers: {
                "content-type": "application/json"
            }
        }).then((x) => {
            expect(x.status).to.equal(200);
            let obj = JSON.parse(JSON.stringify(x.body))
            let name = obj[0].name;
            expect(name).to.equal("Admin");
        });
    }

    // Method to get popular quotes and assert on the content of the first quote
    Get_popular_quotes(method, burl, endpoints) {
        cy.request({
            method: method,
            url: burl + endpoints,
            headers: {
                "content-type": "application/json"
            }
        }).then((x) => {
            expect(x.status).to.equal(200);
            let obj = JSON.parse(JSON.stringify(x.body))
            let quote = obj[0].quote;
            expect(quote).to.equal("The only way to do great work is to love what you do.");
        });
    }

    // Method to list all countries and assert on the first country code
    List_all_countries(method, burl, endpoints) {
        cy.request({
            method: method,
            url: burl + endpoints,
            headers: {
                "content-type": "application/json"
            }
        }).then((x) => {
            expect(x.status).to.equal(200);
            let obj = JSON.parse(JSON.stringify(x.body))
            let code = obj[0];
            expect(code).to.equal("[");
        });
    }

}

export default RestAPI;
