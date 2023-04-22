import { readFileSync, writeFileSync } from "fs";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const json = readFileSync("src/lib/data.json", "utf-8");
    const data = JSON.parse(json);
    if (!data.some((item: any) => item.keys.auth == req.body.keys.auth)) {
      data.push(req.body);
      writeFileSync("src/lib/data.json", JSON.stringify(data));
    }
    res.status(204).end();
  }
}
