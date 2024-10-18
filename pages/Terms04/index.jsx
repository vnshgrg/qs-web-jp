import React from 'react';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import PageLayout from '../../app/layout/PageLayout';
import { PageContact } from '../../app/components';

const Component = (props) => {
    const { t } = useTranslation('common');

    return (
        <>
            <Head>
                <title>{t('site-name')}</title>
            </Head>
            <div className="text-lg max-w-prose mx-auto">
                <h1>
                    <span className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-primary sm:text-4xl">
                        マネー・ローンダリング及びテロ資金供与対策に関する基本方針
                    </span>
                </h1>
                <p className="mt-6 text-gray-500">
                    当社は、マネー・ローンダリングやテロ資金供与対策（以下「AML」という。）について、経営上の最重要課題の一つと位置づけております。当社では、以下のとおりAMLに関する基本方針を制定し、これに基づいた態勢整備を実行するとともに、継続的な改善に取り組んでまいります。
                </p>
                <h3 className="mt-6 text-xl text-gray-500 font-bold">
                    1． AML態勢の整備
                </h3>
                <p className="mt-3 text-gray-500">
                    当社は、「犯罪による収益の移転防止に関する法律」、金融庁の「マネー・ローンダリング及びテロ資金供与対策に関するガイドライン」を踏まえ、提供するサービスがマネー・ローンダリングやテロ資金供与に利用されることを防止するため、態勢整備に努めます。
                </p>
                <h3 className="mt-6 text-xl text-gray-500 font-bold">
                    2． 経営の関与
                </h3>
                <p className="mt-3 text-gray-500">
                    当社の経営陣は、AMLを経営戦略面における重要な課題と位置づけ、この問題に主体的かつ積極的に取り組みます。
                </p>

                <h3 className="mt-6 text-xl text-gray-500 font-bold">
                    3．
                    マネー・ローンダリング及びテロ資金供与対策に係るリスクの特定、評価、低減
                </h3>
                <p className="mt-3 text-gray-500">
                    当社は、「リスクベース・アプローチ」に基づき、提供するサービスにおけるリスクを検証し、特定、評価を行い、その結果に基づき、リスクを低減させる措置を講じます。
                </p>

                <h3 className="mt-6 text-xl text-gray-500 font-bold">
                    4． 顧客管理体制
                </h3>
                <p className="mt-3 text-gray-500">
                    当社は、関係法令等に基づき、お客さまの氏名・住所・生年月日・職業・お取引目的等について確認をいたします。また、在留カードをお持ちのお客さまには在留資格および在留期限を確認いたします。適切な顧客管理を行うことで、制裁対象者や反社会的勢力を含む不適切な取引との関係の排除に努めます。
                </p>

                <h3 className="mt-6 text-xl text-gray-500 font-bold">
                    5． 書類・記録等の保存
                </h3>
                <p className="mt-3 text-gray-500">
                    当社は、AMLに関する確認書類・記録等を関係法令等に基づき適切に保存します。
                </p>

                <h3 className="mt-6 text-xl text-gray-500 font-bold">
                    6． ITシステムの活用とデータ管理
                </h3>
                <p className="mt-3 text-gray-500">
                    当社は、AMLの高度化や効率化のため、IT技術の活用に取り組み適切なデータ管理に努めます。
                </p>

                <h3 className="mt-6 text-xl text-gray-500 font-bold">
                    7． 役職員の研修
                </h3>
                <p className="mt-3 text-gray-500">
                    当社は、当社の役職員がその役割に応じたAMLにおける専門性・適合性等を有するよう、研修等を通じて知識・理解を深めることに努めます。
                </p>
            </div>
            <PageContact />
        </>
    );
};

const About = (props) => (
    <PageLayout>
        <Component {...props} />
    </PageLayout>
);

// About.getInitialProps = async (ctx) => {
//     return true;
// };

export default About;
