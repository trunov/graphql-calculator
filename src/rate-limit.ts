import { MiddlewareFn } from "type-graphql";
import { redis } from "./redis";

const ONE_DAY = 60 * 60 * 24;

export const rateLimit: (limit?: number) => MiddlewareFn<any> =
  (limit = 50) =>
  async ({ context: { req }, info }, next) => {
    const key = `rate-limit:${info.fieldName}:${req.ip}`;

    const current = await redis.incr(key);
    if (current > limit) {
      throw new Error("Too many requests within 1 day");
    } else if (current === 1) {
      await redis.expire(key, ONE_DAY);
    }

    return next();
  };
