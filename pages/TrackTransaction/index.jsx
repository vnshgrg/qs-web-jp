import React, { useState } from 'react';
import Head from 'next/head';
import PageLayout from '../../app/layout/PageLayout';
import { siteName } from '../../app/config';
import Icon from '../../app/components/Icon';
import axios from 'axios';
import PageContact from '../../app/components/PageContact';

const Component = () => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [pin, setPin] = useState('');

    const handleTrack = async () => {
        try {
            setLoading(true);
            // get txn data
            const URL = `https://nnpj.qsremit.net/openapi/get/txn/status?txnid=QP${pin}`;
            const response = await axios.get(URL);
            setLoading(false);
            if (response.data) {
                console.log(response.data);
                setResult(response.data);
            }
        } catch (error) {
            console.log(error.message);
            setLoading(false);
        }
    };

    const handlePinInput = (event) => {
        setPin(event.target.value);
    };

    const LoadingComponent = () => {
        return (
            <div className="text-center">
                <div>
                    <Icon
                        name="spinner"
                        className="animate-spin h-6 w-7 text-blue-600 mx-auto"
                    />
                </div>
                <span className="block mt-2 text-blue-500 text-sm ">
                    Loading...
                </span>
            </div>
        );
    };

    const CheckAnother = () => {
        return (
            <button
                onClick={() => {
                    setResult(null);
                    setPin('');
                }}
                className=" mt-6 inline-flex items-center justify-center text-sm font-medium text-gray-700 ">
                Check another
            </button>
        );
    };

    const ErroComp = ({ txnid }) => (
        <div className="text-center">
            <div>
                <Icon
                    name="circle-x"
                    className="h-8 w-8 text-gray-700 mx-auto"
                />
            </div>
            <p className="block mt-2 text-gray-700 font-semibold">
                Could not find transaction
            </p>
            <p className="block mt-1 text-gray-500 text-sm">
                We could not find transaction with pin code{' '}
                <span className="font-semibold">{txnid}</span>.<br />
                Are you sure you entered the correct pin code.
            </p>
            {CheckAnother()}
        </div>
    );

    const ResultComponent = () => {
        const { txnid, status, updatedTime, error } = result;
        const TS = new Date(response.data.updatedTime);
        const time = `${TS.toLocaleTimeString()} ${TS.toDateString()}`;
        if (error) {
            return <ErroComp txnid={txnid} />;
        }

        switch (status) {
            case 'Cancel':
                return (
                    <div className="text-center">
                        <div>
                            <Icon
                                name="circle-x"
                                className="h-8 w-8 text-red-600 mx-auto"
                            />
                        </div>
                        <p className="block mt-2 text-red-600 font-semibold">
                            Transfer canceled
                        </p>
                        <p className="text-gray-500 mt-1 text-sm">
                            Your transaction was canceled.
                            <br />
                            Please contact our support team for more details.
                        </p>
                        <p className="block mt-4 text-gray-500 text-xs">
                            Transaction ID:{' '}
                            <span className="font-semibold">{txnid}</span>
                            <br />
                            Last updated:{' '}
                            <span className="text-bold">{time}</span>
                        </p>
                        {CheckAnother()}
                    </div>
                );
            case 'Paid':
                return (
                    <div className="text-center">
                        <div>
                            <Icon
                                name="circle-check"
                                className="h-8 w-8 text-green-600 mx-auto"
                            />
                        </div>
                        <p className="block mt-2 text-green-600 font-semibold">
                            Payment complete
                        </p>
                        <p className="text-gray-500 mt-1 text-sm">
                            Your money have been paid successfully.
                        </p>
                        <p className="block mt-4 text-gray-500 text-xs">
                            Transaction ID:{' '}
                            <span className="font-semibold">{txnid}</span>
                            <br />
                            Last updated:{' '}
                            <span className="text-bold">{time}</span>
                        </p>
                        {CheckAnother()}
                    </div>
                );
            default:
                return <ErroComp txnid={txnid} />;
        }
    };

    const renderTracker = () => {
        if (result) return ResultComponent();
        if (loading === true) return LoadingComponent();
        return (
            <>
                <label
                    htmlFor="pin-code"
                    className="block text-base font-medium text-blue-600">
                    QSRemit PIN Number
                </label>
                <div className="mt-4 relative rounded-md shadow-sm w-60 mx-auto">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">QP</span>
                    </div>
                    <input
                        type="text"
                        name="pin-code"
                        id="pin-code"
                        className="focus:ring-indigo-500 focus:border-blue-500 block w-full pl-10 pr-4 sm:text-sm border-gray-300 rounded-md"
                        placeholder=""
                        value={pin}
                        onChange={handlePinInput}
                    />
                </div>
                <p className="text-gray-500 text-sm mt-6">
                    Enter your 15 digit long transaction pin number to track.
                </p>
                <p className="text-gray-500 text-sm mt-3">
                    Contact our support staff from below if you are having
                    difficulty in using this transaction tracker.
                </p>
                <button
                    onClick={handleTrack}
                    className=" mt-6 inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Check
                </button>
            </>
        );
    };

    return (
        <>
            <Head>
                <title>Track transaction - {siteName}</title>
            </Head>
            <div className="text-lg max-w-prose mx-auto">
                <h1>
                    <span className="block text-base text-center text-blue-600 font-semibold tracking-wide uppercase">
                        Thanks for sending money with us
                    </span>
                    <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Track your transaction status
                    </span>
                </h1>
                <p className="mt-6 text-xl text-gray-500 leading-8 text-center">
                    Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                    sem. At arcu, sit dui mi, nibh dui, diam eget aliquam.
                </p>

                <div className="mx-auto w-full sm:w-2/3 mt-10 text-center border border-gray-200 py-6 px-4 rounded-xl">
                    {renderTracker()}
                </div>
            </div>
            <PageContact />
        </>
    );
};

const TrackTransaction = (props) => (
    <PageLayout>
        <Component {...props} />
    </PageLayout>
);

// TrackTransaction.getInitialProps = async (ctx) => {
//     console.log(ctx);
// };

export default TrackTransaction;
