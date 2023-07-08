import db from './mongo'

export const projects = db.collection('projects');
export const blogPosts = db.collection('blogPosts');
export const skills = db.collection('skills');
export const services = db.collection('projects');


export const test = db.collection('projects');
