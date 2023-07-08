import { start_mongo } from "./db/mongo";
import { projects, skills, services, blogPosts } from "./db/collections";

start_mongo().then(() => {
	console.log('Mongo started');
}).catch(e => { console.error(e) })
const collections = {
    projects, skills, services, blogPosts
}
export const handle = async ({ event, resolve }) => {
    
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      event.locals.db = collections
  
     
 
       // console.log(event)
      const response = await resolve(event);
      return response;
    } catch (error) {
      console.log("from hooks:", error);
      throw error;
    }
  };