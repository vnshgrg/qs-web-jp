import React from 'react';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import PageLayout from '../../app/layout/PageLayout';
import { siteName } from '../../app/config';
import { PageContact, Branch } from '../../app/components';

const branches = [
    {
        name: 'ASOKA SPICE',
        location: 'Kasumigaseki (Saitama)',
        details: [
            '〒350-1103 埼玉県川越市霞ヶ関 1-3-15 霞ヶ関ビル104',
            'Saitama-Ken Kawagoe-Shi Kasumigaseki 1-3-15, Kasumigaseki bldg. 104 (350-1103)',
            'TEL: 0492-32-2771'
        ]
    },
    {
        name: 'ASOKA SPICE KAMIFUKUOKA',
        location: 'Kamifukuoka (Saitama)',
        details: [
            '〒356-0004 埼玉県ふじみ野市上福岡 1-6-27 2F',
            'Saitama-Ken Fujimino-Dhi Kamifukuoka 1-6-27 Pure bldg.2F (356-0004)',
            'TEL: 070-3521-3222'
        ]
    },
    {
        name: 'KASTHAMANDAP CURRY HOUSE',
        location: 'Okinawa',
        details: [
            '〒901-2125 沖縄県浦添市仲西 1-3-26',
            'Okinawa-Ken Urasoe-Shi Nakanishi 1-3-26 (901-2125)',
            'TEL: 098-963-4949'
        ]
    },
    {
        name: 'DAJU BHAI MART',
        location: 'Hakata (Fukuoka)',
        details: [
            '〒812-0044 福岡県福岡市博多区千代 1-29-21 ハイコートA号室',
            'Fukuoka-Ken Fukuoka-Shi Hakata-Ku Chiyo 1-29-21 High Court A (812-0044)',
            'TEL: 080-7621-6321 (Narayan)'
        ]
    },
    {
        name: 'SAHARA ASIAN FOOD',
        location: 'Funabashi (Chiba)',
        details: [
            '〒273-0003 千葉県船橋市宮本 1-18-8-1F',
            'Chiba-ken Funabashi-Shi Miyamoto 1-18-8-1F (273-0003)',
            'TEL: 047-779-2210'
        ]
    },
    {
        name: 'FEWA ASIAN HALAL FOODS AND GOODS',
        location: 'Tsurumi (Kanagawa)',
        details: [
            '〒230-0001 神奈川県横浜市鶴見区矢向 5-4-21 ハイム平松 101',
            'Kanagawa-Ken Yokohama-Shi Tsurumi-Ku Yakou 5-4-21 Haimu Hiramatsu 101 (230-0001)',
            'TEL: 080-3972-4684'
        ]
    },
    {
        name: 'SUPA DEURALI',
        location: 'Gunma',
        details: [
            '〒370-0518 群馬県邑楽郡大泉町城之内 4-5-21',
            'Gunma-Ken Oragun Oizumi Machi Shironouchi 4-5-21 (370-0518)',
            'TEL: 070-4166-0457'
        ]
    },
    {
        name: 'KUMAMOTO HALAL',
        location: 'Kumamoto',
        details: [
            '〒862-0950 熊本県熊本市中央区水前寺 1-10-1 101',
            'Kumamoto-Ken Kumamoto-Shi Chou-Ku Suizenji 1-10-1 101 (862-0950)',
            'TEL: 0962-82-8433'
        ]
    },
    {
        name: 'ARAKAWA',
        location: 'Arakawa (Tokyo)',
        details: [
            '〒116-0002 東京都荒川区荒川 3-60-10 キムチの高麗',
            'Tokyo-To, Arakawa-Ku, Arakawa 3-60-10 Kimchi No Koryo (116-0002)',
            'TEL: 03-3801-0003'
        ]
    },
    {
        name: 'TSUKUBA',
        location: 'Ibaraki',
        details: [
            '〒305-0034 茨城県つくば市小野崎 1736-2',
            'Ibaraki-Ken, Tsukuba-Shi, Onozaki 1736-2 (305-0034)',
            'TEL: 080-4070-5339'
        ]
    },
    {
        name: 'AHN',
        location: 'Shinjuku (Tokyo)',
        details: [
            '〒160-0021 東京都新宿区歌舞伎町 2-41-12 泉ビル 301号',
            'Tokyo-To, Shinjuku-Ku, Kabukicho 2-41-12 Izumi Biru 301 (160-0021)',
            'TEL: 090-8803-2289'
        ]
    },
    {
        name: 'MAI TOAN',
        location: 'Ichikawa (Chiba)',
        details: [
            '〒272-0023 千葉県市川市南八幡 4-6-2 高橋ビル 3F',
            'Chiba-Ken, Ichikawa-Shi, Minamiyawata 4-6-2 Takahashi Biru 3F (272-0023)',
            'TEL: 080-4888-1368'
        ]
    },
    {
        name: 'NAMASTE MART',
        location: 'Hiroshima',
        details: [
            '〒720-0053 広島県福山市大黒町 1番37号',
            'Hiroshima-Ken Fukuyama-Shi Daikoku-Machi 1-37 (720-0053)',
            'TEL: 070-2408-5528 (Sumita)'
        ]
    },
    {
        name: 'VAJRA SPICE & FOOD BHANDAR',
        location: 'Fukuoka',
        details: [
            '〒815-0032 福岡県福岡市南区塩原 3-2-1',
            'Fukuoka-ken Fukuoka-shi Minami-ku Shiobaru 3-2-1 (815-0032) ',
            'TEL: 092-515-3372  (Baburam)'
        ]
    },
    {
        name: "PABI'S COLLECTION MARDI SPICE MART",
        location: 'Ikebukuro',
        details: [
            '〒171-0014 東京都豊島区池袋 2-28-8 ウチノコーポ 1F',
            'Tokyo-To Toshima-Ku Ikebukuro 2-28-8 Uchino Kopo 1F',
            'TEL: 03-5962-0453'
        ]
    },
    {
        name: "PABI'S COLLECTION - OKUBO",
        location: 'Okubo',
        details: [
            '〒169-0073 東京都新宿百人町 1-20-19 建造物ビル 301',
            'Tokyo-To Shinjuku-Ku Hyakunin-Cho 1-20-19 Kido Koro Bldg. 301',
            'TEL: 03-6786-0652'
        ]
    },
    {
        name: 'DAJU BHAI PASAL (ダズバイ パサル)',
        location: 'Fukuoka',
        details: [
            '〒812-0054 福岡県福岡市東区馬出 1-29-12 柴田コーポ103',
            'Fukuoka-Ken Fukuoka-Shi Higashi-Ku Maidashi 1-29-12 Shibata Kopo 103',
            'TEL: 092-409-1358'
        ]
    },
    {
        name: 'HIMALAYAN MINI MART',
        location: 'Nagoya',
        details: [
            '〒487-0016 愛知県春日井市高蔵寺町北1-179-1F',
            'Aichi-ken Kasugai-shi kouzojichokita 1-179-1F',
            'TEL: 080-3956-7165'
        ]
    },
    {
        name: 'MAYABI RESTAURANT',
        location: 'Okinawa',
        details: [
            '〒900-0016 沖縄県那覇市前島 2-15-6 コーポ前島1F',
            'Okinawa-ken Naha-shi Maejima 2−15−6 kopo mejima 1F',
            'TEL: 098-988-3743'
        ]
    },
    {
        name: 'NIRVANA INDIAN NEPALI RESTAURANT AND BAR',
        location: 'Okinawa',
        details: [
            '〒904-2214 沖縄県うるま市安慶名 2-9-24 ',
            'Okinawa-ken Uruma-shi Agena 2-9-24',
            'TEL: 070-9211-7651'
        ]
    }
];

const Component = () => {
    const { t } = useTranslation('common');
    return (
        <>
            <Head>
                <title>{`${t('site-name')} - Branches`}</title>
            </Head>
            <div className="text-lg max-w-prose mx-auto">
                <h1>
                    <span className="mt-2 block text-3xl leading-8 font-bold tracking-tight text-primary sm:text-4xl">
                        {t('title-branch')}
                    </span>
                </h1>

                <div className="py-16">
                    <ul className="divide-y divide-gray-200">
                        {branches.map((branch, index) => (
                            <Branch
                                key={index.toString()}
                                number={(index + 1).toString()}
                                branch={branch}
                            />
                        ))}
                    </ul>
                </div>
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
//     console.log(ctx);
// };

export default About;
