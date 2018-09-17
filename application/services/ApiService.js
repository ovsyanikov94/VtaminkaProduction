"use strict";


export default class ApiService{

    constructor(
        $http ,
        PASS ,

    ){

        this._$http = $http;
        this._PASS = PASS;

    }

    async sendMessage(userName, userEmail,userPhone,userMessage){

        try {

            let request = await this._$http.post( `${this._PASS.HOST}${this._PASS.POST_FEEDBACK}` , {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: {
                    'userName': userName,
                    'userEmail': userEmail,
                    'userPhone': userPhone,
                    'userMessage': userMessage,
                }
            });

            return request.data;
        }//try
        catch(ex){
            console.log(ex);
        }//catch

    }//sendMessage



}//ApiService