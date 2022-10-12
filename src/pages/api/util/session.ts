import type { NextApiRequest, NextApiResponse } from 'next'
import jsforce from "jsforce"
import { getSession } from 'next-auth/react'

export const getSFDCConnection = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const session = await getSession({ req })
        console.log('session', session)
        if (!session) {
            res.status(401).json({ message: 'Unauthorized!' });
            return;
        };

        return await new jsforce.Connection({
            // @ts-ignored
            instanceUrl: session.instanceUrl,
            // @ts-ignored
            accessToken: session.accessToken,
        });
    } catch (error) {
        return { error: 'SFDCConnectionError' }
    }
} 
