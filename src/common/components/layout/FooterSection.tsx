import { Footer } from 'flowbite-react';
import React from 'react';

const FooterSection = () => {
    return (
        <Footer container={true}>
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Footer.Copyright href="#" by="Flowbite™" year={2022} />
                <Footer.LinkGroup>
                    <Footer.Link href="#">About</Footer.Link>
                    <Footer.Link href="#">Privacy Policy</Footer.Link>
                    <Footer.Link href="#">Licensing</Footer.Link>
                    <Footer.Link href="#">Contact</Footer.Link>
                </Footer.LinkGroup>
            </div>
        </Footer>
    );
};

export default FooterSection;
