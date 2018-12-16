
const DB = {
    rows : [  
        {   
            name : "Snow",
            surname: "Queen",
            email: "snowqueen@gmail.com"
        }
    ]
}

export class DBRetriever {
    static search(text){
        return Promise.resolve(DB);
    }
}

export default DB;