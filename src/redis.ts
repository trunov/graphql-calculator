import Redis from "ioredis";

export const redis = new Redis(
  6379,
  process.env.REDIS_HOST ? process.env.REDIS_HOST : "127.0.0.1"
);
