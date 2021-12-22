import { query } from "@lib/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const results = await query(`SELECT * FROM klant`);

    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}