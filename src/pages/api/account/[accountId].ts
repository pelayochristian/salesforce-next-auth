import { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../auth/[...nextauth]";
import { getSFDCConnection } from "../util/session";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const conn = await getSFDCConnection(req, res, authOptions);
    const { accountId } = req.query;
    if (!conn) {
        res.status(410).json({ message: 'Unauthorized' });
        return;
    }
    return new Promise(resolve => {
        //@ts-ignored
        conn.sobject("Account").retrieve(accountId, function (err, account) {
            if (err) { return console.error(err); }
            res.status(200).json(account);
            return resolve;
        });
    })
}