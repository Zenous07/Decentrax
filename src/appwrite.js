import {Client,Databases,ID,Query} from 'appwrite';

const PROJECT_ID='67c52a14003b2bb3278b';
const DATABASE_ID='67c52a60000d312ea811';
const COLLECTION_ID='67c52a98000a718e7d13'

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(PROJECT_ID)

const database = new Databases(client);

export const updateSearchCount = async (IDs) => {
    try {
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.equal("id", IDs) 
        ]);

        if (result.documents.length > 0) {
            const doc = result.documents[0];
            await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, {
                count: doc.count + 1
            });
        } else {
            await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
                id: IDs,
                count: 1
            });
        }

        console.log(`Appwrite updated: ${IDs}`);
    } catch (error) {
        console.error("Error in updateSearchCount:", error);
    }
};


export const getTrendingAlgo =async ()=>{
    try{
        const result = await database.listDocuments(DATABASE_ID,COLLECTION_ID,[
            Query.limit(5),
            Query.orderDesc("count")
        ])

    return result.documents;

    } catch(error) {
        console.log(error)
    }
}