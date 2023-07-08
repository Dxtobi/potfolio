import { json } from '@sveltejs/kit';

// const projectList = await locals.db.projects.find().toArray();
// const servicesList = await locals.db.services.find().toArray();
// const skillsList = await locals.db.skills.find().toArray();
// const blogPostsList = await locals.db.blogPosts.find().toArray();

export async function POST({ request, locals }) {
   // const body = await request.formData();
    const body = await request.json();
  
    const res = await locals.db.services.insertOne(body)
  
    // Perform any necessary processing or database operations
    
    return json(res);
  }
  