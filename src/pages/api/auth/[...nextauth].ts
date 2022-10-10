import NextAuth, { NextAuthOptions } from "next-auth";
import SalesforceProvider from 'next-auth/providers/salesforce'
import { env } from "../../../env/server.mjs";

export const authOptions: NextAuthOptions = {
    callbacks: {
        session({ session }) {
            return session;
        },
    },
    providers: [
        SalesforceProvider({
            clientId: env.SALESFORCE_CLIENT_ID,
            clientSecret: env.SALESFORCE_CLIENT_SECRET,
            idToken: true,
            wellKnown: 'https://login.salesforce.com/.well-known/openid-configuration',
            authorization: { params: { scope: 'openid api refresh_token' } },
            userinfo: {
                async request({ provider, tokens, client }) {
                    console.log('tokens: ', tokens)
                    //@ts-ignored
                    return await client.userinfo(tokens, {
                        //@ts-ignored
                        params: provider.userinfo?.params,
                    });
                },
            },
            profile(profile) {
                return { id: profile.email, ...profile };
            }
        }),
    ]
}

export default NextAuth(authOptions);