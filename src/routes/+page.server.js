

export const load = async function ({locals}) {
    const projectList = await locals.db.projects.find().toArray();
    const servicesList = await locals.db.services.find().toArray();
    const skillsList = await locals.db.skills.find().toArray();
    const blogPostsList = await locals.db.blogPosts.find().toArray();

    let data = {
        projectList,
        servicesList,
        skillsList,
        blogPostsList
    }
    
    
    return structuredClone(data) 
}