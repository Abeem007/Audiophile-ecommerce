import { mutation } from './_generated/server';
import { v } from "convex/values";

export const createOrder = mutation({
  args: {
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
  },
  handler: async (ctx, args) => {
    const orderId = await ctx.db.insert("orders", {
      name: args.name,
      email: args.email,
      total: args.total,
      paymentMethod: args.paymentMethod,
      cart: args.cart,
      createdAt: Date.now(),
    });

 
    return orderId;
  },
});
