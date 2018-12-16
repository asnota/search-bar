import DB from './DB';

const data = async () => await Promise.resolve(DB);


export default class DBRetriever {
    static search(text){
        console.log(text);
        console.log(data);
        return { data };
    }
}