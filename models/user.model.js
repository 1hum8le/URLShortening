import { pgTable, uuid, varchar, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: uuid().primaryKey().defaultRandom(),

    firstname: varchar("firstname", {length: 50}).notNull(),
    lastname: varchar("lastname", {length: 50}).notNull(),

    email: varchar("email", {length: 100}).notNull().unique(),
    
    password: text("password").notNull(),
    salt: text().notNull(),

    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").$onUpdate(() => new Date()),
},{
    schema: "public",
});