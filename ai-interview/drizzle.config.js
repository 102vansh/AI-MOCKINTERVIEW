
/** @type { import("drizzle-kit").Config } */
export default {
  dialect: "postgresql", // "mysql" | "sqlite" | "postgresql"
  schema: "./utils/schema.js",
  dbCredentials: {
    url:'postgresql://neondb_owner:4ec2VrhaPKsY@ep-blue-sun-a5njqb8l.us-east-2.aws.neon.tech/ai-interview?sslmode=require',
  }
};