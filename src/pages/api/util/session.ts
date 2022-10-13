import type { NextApiRequest, NextApiResponse } from 'next'
import jsforce from "jsforce"
import { getToken } from 'next-auth/jwt'

export const getSFDCConnection = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const jwt = await getToken({ req })
        if (!jwt) {
            res.status(401).json({ message: 'Unauthorized!' });
            return;
        };

        return await new jsforce.Connection({
            // @ts-ignored
            instanceUrl: jwt.instanceUrl,
            // @ts-ignored
            accessToken: jwt.accessToken,
        });
    } catch (error) {
        return { error: 'SFDCConnectionError' }
    }
} 
