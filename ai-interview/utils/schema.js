
import { pgTable, serial, text, varchar, timestamp } from "drizzle-orm/pg-core";

export const Mockinterview = pgTable("mock_interview", {
    id: serial("id").primaryKey(),
    json_mock_resp: text("json_mock_resp").notNull(),
    job_position: varchar("job_position").notNull(),
    job_desc: varchar("job_desc").notNull(),
    job_experience: varchar("job_experience").notNull(),
    created_by: varchar("created_by").notNull(),
    created_at: timestamp("created_at").notNull(),
    mock_id: varchar("mock_id").notNull(),
});

export const UserAnswer = pgTable("user_answer", {
    id: serial("id").primaryKey(),
    mockidref: varchar("mockidref").notNull(),
    question: varchar("question").notNull(),
    correctans: text("correctans"),
    UserAns:text('UserAns'),
    feedback: text("feedback"),
    rating: varchar("rating"),
    useremail: varchar("useremail"),
    created_at: varchar("created_at")
});
