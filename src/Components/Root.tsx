import { Helmet } from 'react-helmet';
import Footer from './Footer';
import Navbar from './Navbar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <Navbar />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Root;