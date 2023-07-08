import { json } from '@sveltejs/kit';

// const projectList = await locals.db.projects.find().toArray();
// const servicesList = await locals.db.services.find().toArray();
// const skillsList = await locals.db.skills.find().toArray();
// const blogPostsList = await locals.db.blogPosts.find().toArray();


export async function DELETE({ locals, params }) {
    console.log( params)
    const res = await locals.db.projects.findOneAndDelete({id:params.id})
    console.log(res)
    return json(res)
}