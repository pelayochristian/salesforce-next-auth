import {
    Avatar,
    Button,
    DarkThemeToggle,
    Dropdown,
    Navbar,
} from 'flowbite-react';
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';

const Header = () => {
    const { data: sessionData, status } = useSession();

    return (
        <nav className="bg-white px-2 sm:px-4 py-5 dark:bg-gray-800 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <Navbar fluid={true} rounded={true}>
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Navbar.Brand href="https://flowbite.com/">
                        {/* <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="mr-3 h-6 sm:h-9"
                            alt="Flowbite Logo"
                        /> */}
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                            Salesforce NextAuth Demo
                        </span>
                    </Navbar.Brand>

                    <div className="flex md:order-2 gap-5">
                        <DarkThemeToggle />
                        {status === 'authenticated' ? (
                            <Dropdown
                                arrowIcon={false}
                                inline={true}
                                label={
                                    <Avatar
                                        alt="User settings"
                                        img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                        rounded={true}
                                    />
                                }>
                                <Dropdown.Header>
                                    <span className="block text-sm">
                                        {sessionData?.user?.name}
                                    </span>
                                    <span className="block truncate text-sm font-medium">
                                        {sessionData?.user?.email}
                                    </span>
                                </Dropdown.Header>
                                <Dropdown.Item>Github</Dropdown.Item>
                                <Dropdown.Item>Hasnode</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={() => signOut()}>
                                    Sign out
                                </Dropdown.Item>
                            </Dropdown>
                        ) : (
                            <Button
                                gradientDuoTone="purpleToPink"
                                onClick={() => signIn()}>
                                Login
                            </Button>
                        )}

                        <Navbar.Toggle />
                    </div>
                </div>
            </Navbar>
        </nav>
    );
};

export default Header;
