import type { NextApiRequest, NextApiResponse } from 'next'

import { unstable_getServerSession } from "next-auth/next"
import jsforce from "jsforce"

export const getSFDCConnection = async (req: NextApiRequest, res: NextApiResponse, authOptions: any) => {
    try {
        const session = await unstable_getServerSession(req, res, authOptions);
        if (session) {
            return await new jsforce.Connection({
                // @ts-ignored
                instanceUrl: session.instanceUrl,
                // @ts-ignored
                accessToken: session.accessToken,
            });
        } else {
            // Not Signed in
            res.status(401)
        }
    } catch (error) {
        return { error: 'SFDCConnectionError' }
    }
} 
