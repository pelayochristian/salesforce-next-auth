import { AccountDetailsProps } from 'account-details';
import { Spinner } from 'flowbite-react';
import React, { useState } from 'react';
import AccountDataTable from './AccountDataTable';
import AccountSelector from './AccountSelector';

const AccountSection = () => {
    const [accountDetails, setAccountDetails] = useState();
    const [loading, setLoading] = useState(false);
    return (
        <section className="mt-40 container w-full justify-between items-center mx-auto">
            <p className="text-lg font-semibold mb-4">Available Account(s)</p>

            <div className="grid grid-cols-3 gap-2">
                <AccountSelector
                    setAccountDetails={setAccountDetails}
                    setLoading={setLoading}
                />
                <div className="col-span-2">
                    {loading ? (
                        <div className="flex h-full">
                            <div className="m-auto">
                                <Spinner
                                    aria-label="Extra large spinner example"
                                    size="xl"
                                />
                            </div>
                        </div>
                    ) : (
                        <AccountDataTable accountDetails={accountDetails} />
                    )}
                </div>
            </div>
        </section>
    );
};

export default AccountSection;
