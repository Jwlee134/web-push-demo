import { readFileSync } from "fs";
import webpush from "web-push";
import { privateKey, publicKey, yourEmailAddress } from "./constants";

webpush.setVapidDetails(`mailto:${yourEmailAddress}`, publicKey, privateKey);

const json = readFileSync("src/lib/data.json", "utf-8");
const data = JSON.parse(json);

for (const item of data) {
  webpush.sendNotification(
    {
      endpoint: item.endpoint,
      keys: item.keys,
    },
    "Hello, World!"
  );
}
