import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <nav>
                <div className="nav-wrapper">
                    <ul className="right hide-on-med-and-down">
                        <li><a href="https://mcello23.github.io/webpage/" className="material-icons house-logo"><i className="material-icons">home</i></a></li>
                        <li><a href="https://github.com/mcello23" aria-label="github-link"><i className="material-icons fab fa-github"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/marceloc/" aria-label="linkedin-link"><i className="material-icons fab fa-linkedin"></i></a></li>
                        <li><a href="mailto:marceloadsc@gmail.com?subject=Hello&body=Hi%2C%20how%20are%20you%3F" aria-label="email-link"><i className="material-icons">mail_outline</i></a></li>
                    </ul>
                </div>
            </nav>
            <main>
                {children}
            </main>
        </>
    );
};

export default Layout;
