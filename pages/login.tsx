import { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';

const Login: NextPage = () => {
    const { data: sessionData } = useSession();
    if (sessionData) {
        return (
            <div>
                <p>Logged in as {sessionData?.user?.name}</p>
                <button onClick={() => signOut()}>Logout</button>
            </div>
        );
    } else {
        return (
            <div>
                <p>Unauthorized</p>
                <button onClick={() => signIn()}>Sign In</button>
            </div>
        );
    }
};

export default Login;
