// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { authOptions } from './auth/[...nextauth]'
import { unstable_getServerSession } from "next-auth/next"
import { getSession } from 'next-auth/react'


type Data = {
	name: string
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const session = await getSession({ req })
	if (!session) {
		return res.status(401).json({
			message: 'Unauthorized'
		});
	}
	res.status(200).json({ name: 'John Doe' })
}
