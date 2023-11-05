import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex justify-center flex-col items-center">
            <iframe className="w-full" src="https://lottie.host/?file=4f8530a3-6b80-4005-8297-c2b61b53d864/suecDBbmeH.json"></iframe>
            <Link to="/"><button class="mt-4 bg-blue-300 py-2 px-4 rounded-md font-medium hover:text-white">Back to Home Page</button></Link>
        </div>
    );
}

export default ErrorPage;
