import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  orders: defineTable({
    name: v.string(),
    email: v.string(),
    total: v.number(),
    paymentMethod: v.string(),
    cart: v.array(
      v.object({
        slug: v.string(),
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
      })
    ),
    createdAt: v.number(),
  }),
});
