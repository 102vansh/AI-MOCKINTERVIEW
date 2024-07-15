import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'
const sql = neon('postgresql://neondb_owner:4ec2VrhaPKsY@ep-blue-sun-a5njqb8l.us-east-2.aws.neon.tech/ai-interview?sslmode=require');
 export const db = drizzle(sql,{
    schema});

