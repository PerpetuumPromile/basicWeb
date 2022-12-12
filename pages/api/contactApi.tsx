//import type { NextApiRequest, NextApiResponse } from 'next'

import { NextApiRequest, NextApiResponse } from "next";

export default async (request: NextApiRequest, response: NextApiResponse) => {
  response.status(200).json({success: true, message: 'Hello from Next.js!' })
};






/*
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const body = req.body;
    if (!body.name) {
      return res.status(500).json({ msg: 'Name was not found' });
    }
  
    res.status(200).json({ name: `${body.name} Lastname` });
}*/