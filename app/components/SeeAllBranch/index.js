import React from 'react';
import Link from 'next/link';

const SeeAllBranch = () => {
    return (
        <div className="mt-16">
            <div className="max-w-7xl mx-auto py-12 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-2xl tracking-tight text-blue-700 md:text-3xl">
                    <span className="block">
                        Looking for one of our branch?
                    </span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <Link href="/Branches">
                            <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800">
                                See all branch offices
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeeAllBranch;