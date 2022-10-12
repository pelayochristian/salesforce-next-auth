import { Button, Checkbox, Label, Table, TextInput } from 'flowbite-react';
import React from 'react';

const AccountDataTable = ({ accountDetails }: any) => {
    return (
        <form className="flex flex-col gap-4">
            {/* Name */}
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="Name" value="Name" />
                </div>
                <TextInput
                    id="Name"
                    type="text"
                    readOnly={true}
                    value={accountDetails?.Name || ''}
                />
            </div>
            {/* BillingCountry */}
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="BillingCountry" value="BillingCountry" />
                </div>
                <TextInput
                    id="BillingCountry"
                    type="text"
                    readOnly={true}
                    value={accountDetails?.BillingCountry || ''}
                />
            </div>

            <div className="grid grid-cols-2 gap-8">
                {/* Phone */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="Phone" value="Phone" />
                    </div>
                    <TextInput
                        id="Phone"
                        type="text"
                        readOnly={true}
                        value={accountDetails?.Phone || ''}
                    />
                </div>
                {/* Fax */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="Fax" value="Fax" />
                    </div>
                    <TextInput
                        id="Fax"
                        type="text"
                        readOnly={true}
                        value={accountDetails?.Fax || ''}
                    />
                </div>
                {/* CreatedDate */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="CreatedDate" value="CreatedDate" />
                    </div>
                    <TextInput
                        id="CreatedDate"
                        type="text"
                        readOnly={true}
                        value={accountDetails?.CreatedDate || ''}
                    />
                </div>
                {/* LastModifiedDate */}
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="LastModifiedDate"
                            value="LastModifiedDate"
                        />
                    </div>
                    <TextInput
                        id="LastModifiedDate"
                        type="text"
                        readOnly={true}
                        value={accountDetails?.LastModifiedDate || ''}
                    />
                </div>
            </div>
        </form>
    );
};

export default AccountDataTable;
