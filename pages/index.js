import Head from 'next/head';
import MainLayout from '../app/layout/MainLayout';
import { BlobComp, LogoCloud, RateList } from '../app/components';
import { siteName } from '../app/config';

const Component = () => {
    return (
        <>
            <Head>
                <title>{siteName}</title>
            </Head>
            <div className="bg-white py-10 md:py-20 lg:py-24 xl:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="">
                        <h2 className="text-base text-blue-500 font-semibold tracking-wide uppercase">
                            Send happiness
                        </h2>
                        <p className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-blue-700 sm:text-4xl">
                            International remittance service
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500">
                            Lorem ipsum dolor sit amet consect adipisicing elit.
                            Possimus magnam voluptatum cupiditate veritatis in
                            accusamus quisquam.
                        </p>
                    </div>

                    <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            <BlobComp
                                icon="lightning-blot"
                                title="Transfers are instant">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Maiores impedit perferendis
                                suscipit eaque, iste dolor cupiditate blanditiis
                                ratione.
                            </BlobComp>

                            <BlobComp
                                icon="lock-closed"
                                title="Secure & hassle free">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Maiores impedit perferendis
                                suscipit eaque, iste dolor cupiditate blanditiis
                                ratione.
                            </BlobComp>
                            <BlobComp
                                icon="globe"
                                title="Competitive exchange rates">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Maiores impedit perferendis
                                suscipit eaque, iste dolor cupiditate blanditiis
                                ratione.
                            </BlobComp>

                            <BlobComp
                                icon="annotation"
                                title="SMS notifications">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Maiores impedit perferendis
                                suscipit eaque, iste dolor cupiditate blanditiis
                                ratione.
                            </BlobComp>
                        </dl>
                    </div>
                </div>
            </div>
            <LogoCloud />
            <div className="relative pt-0 md:pt-8 pb-16 overflow-hidden">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-blue-50"></div>
                <div className="">
                    <div className="relative lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                        <div className="mt-4 lg:mt-0 g:col-start-1">
                            <div className="px-4 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative">
                                <RateList />
                            </div>
                        </div>
                        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                            <h2 className="text-base text-blue-500 font-semibold tracking-wide uppercase mt-8 md:mt-14">
                                Easy online registration
                            </h2>
                            <p className="mt-1 text-3xl leading-8 font-semibold tracking-tight text-blue-700 sm:text-4xl">
                                with mobile application
                            </p>
                            <p className="mt-4 text-lg text-gray-500">
                                Semper curabitur ullamcorper posuere nunc sed.
                                Ornare iaculis bibendum malesuada faucibus
                                lacinia porttitor. Pulvinar laoreet sagittis
                                viverra duis. In venenatis sem arcu pretium
                                pharetra at. Lectus viverra dui tellus ornare
                                pharetra.
                            </p>

                            <h2 className="text-base text-blue-500 font-semibold tracking-wide uppercase mt-14">
                                Easy verification
                            </h2>
                            <p className="mt-1 text-3xl leading-8 font-semibold tracking-tight text-blue-700 sm:text-4xl">
                                with online eKYC
                            </p>
                            <p className="mt-4 text-lg text-gray-500">
                                Semper curabitur ullamcorper posuere nunc sed.
                                Ornare iaculis bibendum malesuada faucibus
                                lacinia porttitor. Pulvinar laoreet sagittis
                                viverra duis. In venenatis sem arcu pretium
                                pharetra at. Lectus viverra dui tellus ornare
                                pharetra.
                            </p>

                            <h2 className="text-base text-blue-500 font-semibold tracking-wide uppercase mt-14">
                                Convenient service
                            </h2>
                            <p className="mt-1 text-3xl leading-8 font-semibold tracking-tight text-blue-700 sm:text-4xl">
                                with tracking and history
                            </p>
                            <p className="mt-4 text-lg text-gray-500">
                                Semper curabitur ullamcorper posuere nunc sed.
                                Ornare iaculis bibendum malesuada faucibus
                                lacinia porttitor. Pulvinar laoreet sagittis
                                viverra duis. In venenatis sem arcu pretium
                                pharetra at. Lectus viverra dui tellus ornare
                                pharetra.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-br from-purple-800 to-blue-800">
                <div className="max-w-2xl mx-auto text-center py-10 sm:py-16 px-4 md:py-20 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-medium text-white sm:text-4xl">
                        <span className="block">Start sending money</span>
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-blue-200">
                        Ac euismod vel sit maecenas id pellentesque eu sed
                        consectetur. Malesuada adipiscing sagittis vel nulla
                        nec.
                    </p>
                    <a
                        href="https://apps.apple.com/jp/app/qsremit-japan/id1466724211"
                        target="_blank"
                        className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-indigo-50 sm:w-auto">
                        Download for iPhone
                    </a>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.drminside.qsmobile"
                        target="_blank"
                        className="sm:ml-4 mt-4 sm:mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-indigo-50 sm:w-auto">
                        Download for Android
                    </a>
                </div>
            </div>
        </>
    );
};

const Home = (props) => (
    <MainLayout>
        <Component {...props} />
    </MainLayout>
);

export default Home;
