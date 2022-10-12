import axios from 'axios';
import {
    GetServerSideProps,
    InferGetServerSidePropsType,
    InferGetStaticPropsType,
} from 'next';
import React, { useEffect, useState } from 'react';

interface AccountProps {
    Name: string;
    Id: string;
}

const AccountSelector = () => {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        axios.get('/api/account').then((response) => {
            setAccounts(response.data);
        });
    }, []);

    const getAccountDetails = (e: React.MouseEvent<HTMLElement>) => {
        const target = e.target as Element;
        console.log(target.getAttribute('data-id'));
    };

    return (
        <div className="py-2 overflow-y-auto max-h-96 max-w-md bg-white roußnded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <ul>
                {accounts ? (
                    accounts.map((item: AccountProps, index) => {
                        return (
                            <li key={index}>
                                <button
                                    className="px-6 text-left w-full py-3 hover:bg-gray-700"
                                    data-id={item.Id}
                                    onClick={getAccountDetails}>
                                    {item.Name}
                                </button>
                            </li>
                        );
                    })
                ) : (
                    <p>No Accounts Available</p>
                )}
            </ul>
        </div>
    );
};

export default AccountSelector;
