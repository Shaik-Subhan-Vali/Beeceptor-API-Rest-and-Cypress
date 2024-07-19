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


}

export default RestAPI;