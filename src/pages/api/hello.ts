// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { authOptions } from './auth/[...nextauth]'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const sesssion = unstable_getServerSession(req, res, authOptions)
  if (!sesssion) {
    res.status(401).json({
      message: 'Unauthorized'
    })
  }
  res.status(200).json({ name: 'John Doe' })
}
