import React from 'react';
import AccountDataTable from '../AccountDataTable';
import AccountSelector from '../AccountSelector';

const AccountSection = () => {
    return (
        <section className="mt-40 container w-full justify-between items-center mx-auto">
            <p className="text-lg font-semibold mb-4">Available Account(s)</p>

            <div className="grid grid-cols-3 gap-2">
                <AccountSelector />
                <div className="col-span-2">
                    <AccountDataTable />
                </div>
            </div>
        </section>
    );
};

export default AccountSection;
