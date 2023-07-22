import { nanoid } from "nanoid";
import { NextRequest } from "next/server";
import { redis } from "./../../../lib/redis";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const commnetId = nanoid();
    const { text, tag } = body;
    await redis.sadd(`tags:&{commnetId}`, tag);
    await redis.set("comment", commnetId);
    return new Response("OK");
  } catch (err) {
    console.log(err);
  }
};
