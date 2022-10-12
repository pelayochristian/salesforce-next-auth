import { AccountDetailsProps } from 'account-details';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface AccountProps {
    Name: string;
    Id: string;
}

const AccountSelector = ({ setAccountDetails }: any) => {
    const [accounts, setAccounts] = useState([]);

    /**
     * Retrieve all account available.
     */
    useEffect(() => {
        axios
            .get('/api/account')
            .then((response) => {
                setAccounts(response.data);
            })
            .catch((err) => {
                console.error('Client-GetAccountsError: ', err.message);
            });
    }, []);

    /**
     * Handle the click event of the Account name then retrieve account
     * via accoundId API.
     * @param e
     */
    const getAccountDetails = async (e: React.MouseEvent<HTMLElement>) => {
        const target = e.target as Element;
        const accountId = target.getAttribute('data-id');
        await axios.get(`/api/account/${accountId}`).then((response) => {
            setAccountDetails(response.data);
        });
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
