import { NextApiRequest, NextApiResponse } from "next";
import { getSFDCConnection } from "../util/session";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const conn = await getSFDCConnection(req, res);
    if (!conn) return;

    const { accountId } = req.query;
    return new Promise(resolve => {
        //@ts-ignored
        conn.sobject("Account").retrieve(accountId, function (err, account) {
            if (err) { return console.error(err); }
            res.status(200).json(account);
            return resolve;
        });
    })
}