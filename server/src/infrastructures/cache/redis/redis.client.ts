import { createClient } from "redis";

export const redisClient = createClient({
    url: process.env.CACHE_DRIVER_URL,
});

redisClient.on("error", function(err: unknown) {
  throw err;
});

await redisClient.connect();

// await redisClient.disconnect();