import { Category, OrderItem, Product } from "@prisma/client";

export type ExtendedProduct = Product & {
  category: Category;
  _count: {
    orderItems: number;
  };
};
