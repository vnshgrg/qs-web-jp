import React from 'react';

const LogoCloud = () => {
    return (
        <div
            className="bg-cover bg-right-top"
            style={{ backgroundImage: `url('/backgrounds/02.jpg')` }}>
            <div className="max-w-7xl mx-auto py-8 md:py-20 px-4 sm:px-6 lg:px-8">
                <p className="text-center text-lg font-semibold uppercase text-white tracking-wide">
                    Our partners
                </p>
                <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-4">
                    <div className="col-span-1 flex justify-center items-center md:col-span-2 lg:col-span-1">
                        <img
                            className="h-20"
                            src="/payout-partners/himal-remit.png"
                            alt="Himal Remit"
                        />
                    </div>
                    <div className="col-span-1 flex justify-center items-center md:col-span-2 lg:col-span-1">
                        <img
                            className="h-24"
                            src="/payout-partners/global-remit.svg"
                            alt="Global IME Remit"
                        />
                    </div>
                    <div className="col-span-1 flex justify-center items-center md:col-span-2 lg:col-span-1">
                        <img
                            className="h-16"
                            src="/payout-partners/tranglo.svg"
                            alt="Tranglo"
                        />
                    </div>
                    <div className="col-span-1 flex justify-center items-center md:col-span-2 lg:col-span-1">
                        <img
                            className="h-12"
                            src="/payout-partners/sacombank-sbr.png"
                            alt="Sacombank SBR"
                        />
                    </div>
                    <div className="col-span-1 flex justify-center items-center md:col-span-2 lg:col-span-1">
                        <img
                            className="h-24"
                            src="/payout-partners/panda-remit.svg"
                            alt="Panda Remit"
                        />
                    </div>
                    <div className="col-span-1 flex justify-center items-center md:col-span-2 lg:col-span-1">
                        <img
                            className="h-20"
                            src="/payout-partners/bank-of-punjab.svg"
                            alt="The Bank of Punjab"
                        />
                    </div>
                    <div className="col-span-1 flex justify-center items-center md:col-span-2 lg:col-span-1">
                        <img
                            className="h-16"
                            src="/payout-partners/brac-bank.svg"
                            alt="Brac Bank"
                        />
                    </div>
                    <div className="col-span-1 flex justify-center items-center md:col-span-2 lg:col-span-1">
                        <img
                            className="h-16"
                            src="/payout-partners/western-union.svg"
                            alt="Western Union"
                        />
                    </div>
                    <div className="col-span-1 flex justify-center items-center md:col-span-2 lg:col-span-1">
                        <img
                            className="h-10"
                            src="/payout-partners/eec.svg"
                            alt="EEC"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogoCloud;
