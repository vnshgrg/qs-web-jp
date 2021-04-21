import React from 'react';

const PageContact = () => {
    return (
        <div className="mx-auto max-w-4xl py-16 px-4 sm:px-6 lg:px-8 md:mt-16">
            <div className="mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
                <div>
                    <h2 className="text-xl text-gray-800 sm:text-2xl">
                        Head Office
                    </h2>
                    <div className="mt-3">
                        <p className="text-lg text-gray-500">
                            Contact our head office.
                        </p>
                    </div>
                    <div className="mt-9">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                {/* <!-- Heroicon name: outline/phone --> */}
                                <svg
                                    className="h-6 w-6 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                            </div>
                            <div className="ml-3 text-base text-gray-500">
                                <p>+1 (555) 123 4567</p>
                                <p className="mt-1">Mon-Fri 8am to 6pm PST</p>
                            </div>
                        </div>
                        <div className="mt-6 flex">
                            <div className="flex-shrink-0">
                                {/* <!-- Heroicon name: outline/mail --> */}
                                <svg
                                    className="h-6 w-6 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <div className="ml-3 text-base text-gray-500">
                                <p>support@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 sm:mt-16 md:mt-0">
                    <h2 className="text-xl text-gray-800 sm:text-2xl">
                        Support staff
                    </h2>
                    <div className="mt-3">
                        <p className="text-lg text-gray-500">
                            If you are facing trouble please contact our support
                            staff.
                        </p>
                    </div>
                    <div className="mt-9">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                {/* <!-- Heroicon name: outline/phone --> */}
                                <svg
                                    className="h-6 w-6 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                            </div>
                            <div className="ml-3 text-base text-gray-500">
                                <p>+1 (555) 123 4567</p>
                                <p className="mt-1">Mon-Fri 8am to 6pm PST</p>
                            </div>
                        </div>
                        <div className="mt-6 flex">
                            <div className="flex-shrink-0">
                                {/* <!-- Heroicon name: outline/mail --> */}
                                <svg
                                    className="h-6 w-6 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <div className="ml-3 text-base text-gray-500">
                                <p>support@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageContact;
