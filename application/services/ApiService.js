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
            console.log('in sendMessage');

            let data = new FormData();

            data.append('userName' , userName);
            data.append('userEmail' , userEmail);
            data.append('userPhone' , userPhone);
            data.append('userMessage' , userMessage);

            let request = await this._$http.post( `${this._PASS.HOST}${this._PASS.POST_FEEDBACK}` , {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: data
            });

            let responseJSON = await request.json();

            console.log('in responseJSON', responseJSON);
            return responseJSON;
        }//try
        catch(ex){
            console.log(ex);
        }//catch

    }//sendMessage



}//ApiService