class RestAPI{

    get_available_blog_posts(method,burl,endpoints){
        cy.request({
            method: method,
            url : burl + endpoints,
            headers:{
                "content-type":"application/json"
            }
        }).then((x)=>{
            expect(x.status).to.equal(200);
             let obj = JSON.parse(JSON.stringify(x.body))
             let title = obj[0].title;
             expect(title).to.equal("Introduction to Artificial Intelligence");
        })      
    }
    get_Retrieve_post(method,burl,endpoints){
        cy.request({
            method: method,
            url : burl + endpoints,
            headers:{
                "content-type":"application/json"
            }
        }).then((x)=>{
            expect(x.status).to.equal(200);
             let obj = JSON.parse(JSON.stringify(x.body))
             let body = obj.body;
             expect(body).to.equal("Learn the basics of Artificial Intelligence and its applications in various industries.");
            
        })      
    }
    Listing_blog_comments(method,burl,endpoints){
        cy.request({
            method: method,
            url : burl + endpoints,
            headers:{
                "content-type":"application/json"
            }
        }).then((x)=>{
            expect(x.status).to.equal(200);
             let obj = JSON.parse(JSON.stringify(x.body))
             let email = obj[3].email;
             expect(email).to.equal("sophia.lee@example.com");
        })      
    }
    Retrieve_comment(method,burl,endpoints){
        cy.request({
            method: method,
            url : burl + endpoints,
            headers:{
                "content-type":"application/json"
            }
        }).then((x)=>{
            expect(x.status).to.equal(200);
             let obj = JSON.parse(JSON.stringify(x.body))
             let email = obj.email;
             expect(email).to.equal("john.smith@example.com");
        })      
    }

    list_companies(method,burl,endpoints){
        cy.request({
            method: method,
            url : burl + endpoints,
            headers:{
                "content-type":"application/json"
            }
        }).then((x)=>{
            expect(x.status).to.equal(200);
             let obj = JSON.parse(JSON.stringify(x.body))
             let ceoName = obj[1].ceoName;
             expect(ceoName).to.equal("Jane Doe");
        })      
    }
    Retrieve_details_company(method,burl,endpoints){
        cy.request({
            method: method,
            url : burl + endpoints,
            headers:{
                "content-type":"application/json"
            }
        }).then((x)=>{
            expect(x.status).to.equal(200);
             let obj = JSON.parse(JSON.stringify(x.body))
             let industry = obj.industry;
             expect(industry).to.equal("Technology");
        })      
    }
    
    Get_list_users(method,burl,endpoints){
        cy.request({
            method: method,
            url : burl + endpoints,
            headers:{
                "content-type":"application/json"
            }
        }).then((x)=>{
            expect(x.status).to.equal(200);
             let obj = JSON.parse(JSON.stringify(x.body))
             let name = obj[2].name;
             expect(name).to.equal("John Smith");
        })      
    }
    

}

export default RestAPI;