import { NextApiRequest, NextApiResponse } from "next";
import { jobs } from "../../data/jobs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(jobs);
} 