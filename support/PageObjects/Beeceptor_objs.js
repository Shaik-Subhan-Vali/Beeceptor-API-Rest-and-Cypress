class RestAPI{


    getstatus(method,burl,endpoints){
        cy.request({
            method: method,
            url : burl + endpoints,
            headers:{
                "content-type":"application/json"
            }
        }).then((x)=>{
            expect(x.status).to.equal(200);
        })
    }

}

export default RestAPI;