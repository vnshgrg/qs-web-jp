import React from 'react';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import PageLayout from '../../app/layout/PageLayout';
import { PageContact, SeeAllBranch } from '../../app/components';

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
                        個人情報保護規程
                    </span>
                </h1>
                <p className="mt-6 text-xl text-gray-500 leading-8 ">
                    株式会社N&amp;P
                    JAPAN（以下「当社」といいます。）は、「個人情報の保護に関する法律」に基づき、会員の個人情報を下記のように取り扱います。
                </p>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    第１条（個人情報の利用目的）
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        当社は、お客さまの住所・氏名・郵便番号・電話番号・FAX番号・メールアドレスなどの個人情報をお預かりいたします。これらの個人情報は、次の目的で利用させていただきます。また、明示した目的の範囲を超えて利用する必要が生じた場合には、事前にご連絡の上、同意を得るものとします。
                        <br />
                        <strong>【お預かりした個人情報の利用目的】</strong>
                        <br />
                        当社は、「個人情報の保護に関する法律」を遵守し、当社が行う海外送金サービスに関するご案内・ご提案、契約の締結・履行、アフターサービスの実施、お客さまへの連絡・通信、新しい商品・サービスの開発、及び、お客さまに有益と思われる情報の提供などのために、お客さまの個人情報を利用させていただきます。
                    </li>
                    <li>
                        当社が業務の提供・運営のために、個人情報を入手する場合には、入手する個人情報について、適切に入手したものであるかどうかを提供者へ確認を行い、必要な手続を実施の上で入手するものとします。
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    第２条（個人情報の保管）
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        当社は、会員情報、会員のマーケティングに関する意向及び会員の取引履歴を、法令等に従い、情報の取得目的に必要な期間内に限り、保管します。
                    </li>
                    <li>
                        当該保存期間内に会員が新たな取引を行わない場合には、会員情報及び会員のマーケティングに関する意向に関する情報は削除されます。
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    第3条（個人情報の安全管理）
                </p>
                <p className="mt-6 text-gray-500">
                    当社は、保有する個人情報において、不正アクセス・紛失・破壊・改ざん及び漏えい等の防止に努め、適切な安全管理措置を講じます。
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        当社は、情報セキュリティの維持及び改善のため、関係法令・ガイドライン等を遵守するとともに、情報セキュリティに関する社内規程を整備します。
                    </li>
                    <li>
                        当社は、個人情報の保護及び適切な管理のために情報システム管理者を配置し、情報セキュリティ対策をすみやかに実施できる体制を構築します。
                    </li>
                    <li>
                        当社は、個人情報の保護及び適切な管理のために従業員に対し社内教育を継続的に実施します。
                    </li>
                    <li>
                        当社は、情報セキュリティの維持及び改善のため、定期的な内部監査・外部監査の実施により関係法令・ガイドライン等の遵守状況を確認します。
                    </li>
                    <li>
                        当社は、情報の取扱いを外部に委託する場合、安全性を十分確保できる先を選定します。また、情報の取扱いについて委託先から定期的な報告を義務づけるとともに、委託先の定期的な評価を実施します。
                    </li>
                    <li>
                        当社は、以上の取り組みを継続的に実施し、評価、見直しすることにより、情報セキュリティの維持及び改善を図ります。
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    第４条（個人情報の委託）
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        当社は、業務を円滑に遂行するために、業務の一部を第三者に委託する場合がありますが、業務の委託に伴い、個人情報を預託する場合には、できる限り範囲を限定するようにします。また、当社の定める基準に基づき個人情報を適正に取り扱っているかどうかについて、定期的に確認します。
                    </li>
                    <li>
                        当社は、次のとおり、海外の委託先に対して個人情報を提供しております。
                        <br />
                        【1】
                        <table className="table-auto w-full text-gray-500 mt-2">
                            <tbody>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">①</td>
                                    <td className="px-4 py-3">委託先の名称</td>
                                    <td className="px-4 py-3">
                                        BRAC Bank Limited
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">②</td>
                                    <td className="px-4 py-3">委託先の国名</td>
                                    <td className="px-4 py-3">
                                        バングラデシュ
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">③</td>
                                    <td className="px-4 py-3">
                                        当該外国における個人情報の保護に関する制度
                                    </td>
                                    <td className="px-4 py-3">
                                        デジタルセキュリティ法が制定されており、同法において違法な個人情報の収集及び使用についての罰則規定が設けられています。
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">④</td>
                                    <td className="px-4 py-3">
                                        当該第三者が講ずる個人情報の保護のための措置
                                    </td>
                                    <td className="px-4 py-3">
                                        当該第三者は、おおむね個人データの取扱いについて、日本の個人情報取扱事業者に求められる水準と同水準の措置を講じています。
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">⑤</td>
                                    <td className="px-4 py-3">利用目的</td>
                                    <td className="px-4 py-3">
                                        当社が行う海外送金サービスの履行（送金先への送金）
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">⑥</td>
                                    <td className="px-4 py-3">
                                        移転される個人情報のデータの内容
                                    </td>
                                    <td className="px-4 py-3">
                                        お客さまの住所・氏名・郵便番号・電話番号・FAX番号・メールアドレス、送金先に関する情報
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        【2】
                        <table className="table-auto w-full text-gray-500 mt-2">
                            <tbody>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">①</td>
                                    <td className="px-4 py-3">委託先の名称</td>
                                    <td className="px-4 py-3">
                                        GLOBAL IME BANK LIMITED
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">②</td>
                                    <td className="px-4 py-3">委託先の国名</td>
                                    <td className="px-4 py-3">ネパール</td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">③</td>
                                    <td className="px-4 py-3">
                                        当該外国における個人情報の保護に関する制度
                                    </td>
                                    <td className="px-4 py-3">
                                        個人プライバシー法が制定されており、同法律においては、個人情報の収集、保管、利用に関する規定だけでなく、全ての個人は住居、財産、文書、データ、通信、性格に関するプライバシー権を有するとし、法律で定められた場合を除き、その権利が侵されないことを規定しています。
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">④</td>
                                    <td className="px-4 py-3">
                                        当該第三者が講ずる個人情報の保護のための措置
                                    </td>
                                    <td className="px-4 py-3">
                                        当該第三者は、おおむね個人データの取扱いについて、日本の個人情報取扱事業者に求められる水準と同水準の措置を講じています。
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">⑤</td>
                                    <td className="px-4 py-3">利用目的</td>
                                    <td className="px-4 py-3">
                                        当社が行う海外送金サービスの履行（送金先への送金）
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">⑥</td>
                                    <td className="px-4 py-3">
                                        移転される個人情報のデータの内容
                                    </td>
                                    <td className="px-4 py-3">
                                        お客さまの住所・氏名・郵便番号・電話番号・FAX番号・メールアドレス、送金先に関する情報
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        【3】
                        <table className="table-auto w-full text-gray-500 mt-2">
                            <tbody>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">①</td>
                                    <td className="px-4 py-3">委託先の名称</td>
                                    <td className="px-4 py-3">
                                        HIMALAYA BANK LIMITED
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">②</td>
                                    <td className="px-4 py-3">委託先の国名</td>
                                    <td className="px-4 py-3">ネパール</td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">③</td>
                                    <td className="px-4 py-3">
                                        当該外国における個人情報の保護に関する制度
                                    </td>
                                    <td className="px-4 py-3">
                                        個人プライバシー法が制定されており、同法律においては、個人情報の収集、保管、利用に関する規定だけでなく、全ての個人は住居、財産、文書、データ、通信、性格に関するプライバシー権を有するとし、法律で定められた場合を除き、その権利が侵されないことを規定しています。
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">④</td>
                                    <td className="px-4 py-3">
                                        当該第三者が講ずる個人情報の保護のための措置
                                    </td>
                                    <td className="px-4 py-3">
                                        当該第三者は、おおむね個人データの取扱いについて、日本の個人情報取扱事業者に求められる水準と同水準の措置を講じています。
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">⑤</td>
                                    <td className="px-4 py-3">利用目的</td>
                                    <td className="px-4 py-3">
                                        当社が行う海外送金サービスの履行（送金先への送金）
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">⑥</td>
                                    <td className="px-4 py-3">
                                        移転される個人情報のデータの内容
                                    </td>
                                    <td className="px-4 py-3">
                                        お客さまの住所・氏名・郵便番号・電話番号・FAX番号・メールアドレス、送金先に関する情報
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        【4】
                        <table className="table-auto w-full text-gray-500 mt-2">
                            <tbody>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">①</td>
                                    <td className="px-4 py-3">委託先の名称</td>
                                    <td className="px-4 py-3">NNP KOREA</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">②</td>
                                    <td className="px-4 py-3">委託先の国名</td>
                                    <td className="px-4 py-3">韓国</td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">③</td>
                                    <td className="px-4 py-3">
                                        当該外国における個人情報の保護に関する制度
                                    </td>
                                    <td className="px-4 py-3">
                                        個人情報保護法（Personal Information
                                        Protection Act）が制定されています。
                                        詳細については、こちらをご参照ください。
                                        <br />
                                        <a href="https://www.ppc.go.jp/files/pdf/korea_report.pdf">
                                            https://www.ppc.go.jp/files/pdf/korea_report.pdf
                                        </a>
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">④</td>
                                    <td className="px-4 py-3">
                                        当該第三者が講ずる個人情報の保護のための措置
                                    </td>
                                    <td className="px-4 py-3">
                                        当該第三者は、おおむね個人データの取扱いについて、日本の個人情報取扱事業者に求められる水準と同水準の措置を講じています。
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">⑤</td>
                                    <td className="px-4 py-3">利用目的</td>
                                    <td className="px-4 py-3">
                                        当社が行う海外送金サービスの履行（送金先への送金）
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">⑥</td>
                                    <td className="px-4 py-3">
                                        移転される個人情報のデータの内容
                                    </td>
                                    <td className="px-4 py-3">
                                        お客さまの住所・氏名・郵便番号・電話番号・FAX番号・メールアドレス、送金先に関する情報
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        【5】
                        <table className="table-auto w-full text-gray-500 mt-2">
                            <tbody>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">①</td>
                                    <td className="px-4 py-3">委託先の名称</td>
                                    <td className="px-4 py-3">
                                        THE BANK OF PUNJAB
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">②</td>
                                    <td className="px-4 py-3">委託先の国名</td>
                                    <td className="px-4 py-3">パキスタン</td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">③</td>
                                    <td className="px-4 py-3">
                                        当該外国における個人情報の保護に関する制度
                                    </td>
                                    <td className="px-4 py-3">
                                        パキスタンにおいて個人情報保護法等の包括的なデータ保護に関する具体的な法律は存在していないようです。
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">④</td>
                                    <td className="px-4 py-3">
                                        当該第三者が講ずる個人情報の保護のための措置
                                    </td>
                                    <td className="px-4 py-3">
                                        当該第三者は、おおむね個人データの取扱いについて、日本の個人情報取扱事業者に求められる水準と同水準の措置を講じています。
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">⑤</td>
                                    <td className="px-4 py-3">利用目的</td>
                                    <td className="px-4 py-3">
                                        当社が行う海外送金サービスの履行（送金先への送金）
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">⑥</td>
                                    <td className="px-4 py-3">
                                        移転される個人情報のデータの内容
                                    </td>
                                    <td className="px-4 py-3">
                                        お客さまの住所・氏名・郵便番号・電話番号・FAX番号・メールアドレス、送金先に関する情報
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        【6】
                        <table className="table-auto w-full text-gray-500 mt-2">
                            <tbody>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">①</td>
                                    <td className="px-4 py-3">委託先の名称</td>
                                    <td className="px-4 py-3">
                                        SACOMBANK REMITTANCE EXPRESS LIMITED
                                        COMPANY
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">②</td>
                                    <td className="px-4 py-3">委託先の国名</td>
                                    <td className="px-4 py-3">ベトナム</td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">③</td>
                                    <td className="px-4 py-3">
                                        当該外国における個人情報の保護に関する制度
                                    </td>
                                    <td className="px-4 py-3">
                                        ベトナムにおいて個人情報保護法等の包括的なデータ保護に関する具体的な法律は存在していないようです。詳細については、こちらをご参照ください。
                                        <a href="https://www.ppc.go.jp/files/pdf/vietnam_report.pdf">
                                            https://www.ppc.go.jp/files/pdf/vietnam_report.pdf
                                        </a>
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">④</td>
                                    <td className="px-4 py-3">
                                        当該第三者が講ずる個人情報の保護のための措置
                                    </td>
                                    <td className="px-4 py-3">
                                        当該第三者は、おおむね個人データの取扱いについて、日本の個人情報取扱事業者に求められる水準と同水準の措置を講じています。
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">⑤</td>
                                    <td className="px-4 py-3">利用目的</td>
                                    <td className="px-4 py-3">
                                        当社が行う海外送金サービスの履行（送金先への送金）
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">⑥</td>
                                    <td className="px-4 py-3">
                                        移転される個人情報のデータの内容
                                    </td>
                                    <td className="px-4 py-3">
                                        お客さまの住所・氏名・郵便番号・電話番号・FAX番号・メールアドレス、送金先に関する情報
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        【7】
                        <table className="table-auto w-full text-gray-500 mt-2">
                            <tbody>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">①</td>
                                    <td className="px-4 py-3">委託先の名称</td>
                                    <td className="px-4 py-3">
                                        TRANGLO SDN.BHD
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">②</td>
                                    <td className="px-4 py-3">委託先の国名</td>
                                    <td className="px-4 py-3">マレーシア</td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">③</td>
                                    <td className="px-4 py-3">
                                        当該外国における個人情報の保護に関する制度
                                    </td>
                                    <td className="px-4 py-3">
                                        個人データ保護法（Personal Data
                                        Protection Act
                                        2010）が制定されています。
                                        詳細については、こちらをご参照ください。
                                        <a href="https://www.ppc.go.jp/files/pdf/malaysia_report.pdf">
                                            https://www.ppc.go.jp/files/pdf/malaysia_report.pdf
                                        </a>
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">④</td>
                                    <td className="px-4 py-3">
                                        当該第三者が講ずる個人情報の保護のための措置
                                    </td>
                                    <td className="px-4 py-3">
                                        当該第三者は、おおむね個人データの取扱いについて、日本の個人情報取扱事業者に求められる水準と同水準の措置を講じています。
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">⑤</td>
                                    <td className="px-4 py-3">利用目的</td>
                                    <td className="px-4 py-3">
                                        当社が行う海外送金サービスの履行（送金先への送金）
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">⑥</td>
                                    <td className="px-4 py-3">
                                        移転される個人情報のデータの内容
                                    </td>
                                    <td className="px-4 py-3">
                                        お客さまの住所・氏名・郵便番号・電話番号・FAX番号・メールアドレス、送金先に関する情報
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        【8】
                        <table className="table-auto w-full text-gray-500 mt-2">
                            <tbody>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">①</td>
                                    <td className="px-4 py-3">委託先の名称</td>
                                    <td className="px-4 py-3">
                                        WO TRANSFER(HK) LIMITED
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">②</td>
                                    <td className="px-4 py-3">委託先の国名</td>
                                    <td className="px-4 py-3">香港</td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">③</td>
                                    <td className="px-4 py-3">
                                        当該外国における個人情報の保護に関する制度
                                    </td>
                                    <td className="px-4 py-3">
                                        個人データ（プライバシー）条例（Personal
                                        Data (Privacy)
                                        Ordinance）が制定されています。
                                        詳細については、こちらをご参照ください。
                                        <a href="https://www.ppc.go.jp/files/pdf/hongkong_report.pdf">
                                            https://www.ppc.go.jp/files/pdf/hongkong_report.pdf
                                        </a>
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">④</td>
                                    <td className="px-4 py-3">
                                        当該第三者が講ずる個人情報の保護のための措置
                                    </td>
                                    <td className="px-4 py-3">
                                        当該第三者は、おおむね個人データの取扱いについて、日本の個人情報取扱事業者に求められる水準と同水準の措置を講じています。
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">⑤</td>
                                    <td className="px-4 py-3">利用目的</td>
                                    <td className="px-4 py-3">
                                        当社が行う海外送金サービスの履行（送金先への送金）
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">⑥</td>
                                    <td className="px-4 py-3">
                                        移転される個人情報のデータの内容
                                    </td>
                                    <td className="px-4 py-3">
                                        お客さまの住所・氏名・郵便番号・電話番号・FAX番号・メールアドレス、送金先に関する情報
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                    </li>
                    <li>
                        当社は、第2項に定める委託先における個人情報の適正な管理が行われていることを確認するものとします。具体的な内容は次のとおりです。
                        <br />
                        【1】
                        <table className="table-auto w-full text-gray-500 mt-2">
                            <tbody>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">①</td>
                                    <td className="px-4 py-3">委託先の名称</td>
                                    <td className="px-4 py-3">
                                        BRAC Bank Limited
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">②</td>
                                    <td className="px-4 py-3">
                                        当該第三者による法第28条第1項に規定する体制の整備の方法
                                    </td>
                                    <td className="px-4 py-3">
                                        委託契約を締結する方法
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">③</td>
                                    <td className="px-4 py-3">
                                        当該第三者が実施する相当措置の概要
                                    </td>
                                    <td className="px-4 py-3">
                                        委託契約において、日本における個人情報の保護に関する法律に定める措置と同様の措置（特定した利用目的の範囲内で個人データを取り扱う旨、不適正利用の禁止、必要かつ適切な安全管理措置を講ずる旨、従業者に対する必要かつ適切な監督を行う旨、再委託の禁止、漏えい等が発生した場合には移転元が個人情報保護委員会への報告及び本人通知を行う旨、個人データの第三者提供の禁止等）を定めています。
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">④</td>
                                    <td className="px-4 py-3">
                                        確認の頻度及び方法
                                    </td>
                                    <td className="px-4 py-3">
                                        年1回、書面による報告を受ける形で実施しています。
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">⑤</td>
                                    <td className="px-4 py-3">
                                        当該第三者による相当措置の実施に影響を及ぼすおそれのある当該外国の制度の有無及びその概要
                                    </td>
                                    <td className="px-4 py-3">
                                        デジタルセキュリティ法が制定されており、同法において違法な個人情報の収集及び使用についての罰則規定が設けられています。
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">⑥</td>
                                    <td className="px-4 py-3">
                                        当該第三者による相当措置の実施に関する支障の有無及びその概要
                                    </td>
                                    <td className="px-4 py-3">
                                        特にありません。
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">⑦</td>
                                    <td className="px-4 py-3">
                                        当該支障に関して、当社が講ずる措置の概要
                                    </td>
                                    <td className="px-4 py-3">
                                        特にありません。
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        【2】
                        <table className="table-auto w-full text-gray-500 mt-2">
                            <tbody>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">①</td>
                                    <td className="px-4 py-3">委託先の名称</td>
                                    <td className="px-4 py-3">
                                        GLOBAL IME BANK LIMITED
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">②</td>
                                    <td className="px-4 py-3">
                                        当該第三者による法第28条第1項に規定する体制の整備の方法
                                    </td>
                                    <td className="px-4 py-3">
                                        委託契約を締結する方法
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">③</td>
                                    <td className="px-4 py-3">
                                        当該第三者が実施する相当措置の概要
                                    </td>
                                    <td className="px-4 py-3">
                                        委託契約において、日本における個人情報の保護に関する法律に定める措置と同様の措置（特定した利用目的の範囲内で個人データを取り扱う旨、不適正利用の禁止、必要かつ適切な安全管理措置を講ずる旨、従業者に対する必要かつ適切な監督を行う旨、再委託の禁止、漏えい等が発生した場合には移転元が個人情報保護委員会への報告及び本人通知を行う旨、個人データの第三者提供の禁止等）を定めています。
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">④</td>
                                    <td className="px-4 py-3">
                                        確認の頻度及び方法
                                    </td>
                                    <td className="px-4 py-3">
                                        年1回、書面による報告を受ける形で実施しています。
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">⑤</td>
                                    <td className="px-4 py-3">
                                        当該第三者による相当措置の実施に影響を及ぼすおそれのある当該外国の制度の有無及びその概要
                                    </td>
                                    <td className="px-4 py-3">
                                        個人プライバシー法が制定されており、同法律においては、個人情報の収集、保管、利用に関する規定だけでなく、全ての個人は住居、財産、文書、データ、通信、性格に関するプライバシー権を有するとし、法律で定められた場合を除き、その権利が侵されないことを規定しています。
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">⑥</td>
                                    <td className="px-4 py-3">
                                        当該第三者による相当措置の実施に関する支障の有無及びその概要
                                    </td>
                                    <td className="px-4 py-3">
                                        特にありません。
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">⑦</td>
                                    <td className="px-4 py-3">
                                        当該支障に関して、当社が講ずる措置の概要
                                    </td>
                                    <td className="px-4 py-3">
                                        特にありません。
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        【3】
                        <table className="table-auto w-full text-gray-500 mt-2">
                            <tbody>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">①</td>
                                    <td className="px-4 py-3">委託先の名称</td>
                                    <td className="px-4 py-3">
                                        HIMALAYA BANK LIMITED
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">②</td>
                                    <td className="px-4 py-3">
                                        当該第三者による法第28条第1項に規定する体制の整備の方法
                                    </td>
                                    <td className="px-4 py-3">
                                        委託契約を締結する方法
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">③</td>
                                    <td className="px-4 py-3">
                                        当該第三者が実施する相当措置の概要
                                    </td>
                                    <td className="px-4 py-3">
                                        委託契約において、日本における個人情報の保護に関する法律に定める措置と同様の措置（特定した利用目的の範囲内で個人データを取り扱う旨、不適正利用の禁止、必要かつ適切な安全管理措置を講ずる旨、従業者に対する必要かつ適切な監督を行う旨、再委託の禁止、漏えい等が発生した場合には移転元が個人情報保護委員会への報告及び本人通知を行う旨、個人データの第三者提供の禁止等）を定めています。
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">④</td>
                                    <td className="px-4 py-3">
                                        確認の頻度及び方法
                                    </td>
                                    <td className="px-4 py-3">
                                        年1回、書面による報告を受ける形で実施しています。
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">⑤</td>
                                    <td className="px-4 py-3">
                                        当該第三者による相当措置の実施に影響を及ぼすおそれのある当該外国の制度の有無及びその概要
                                    </td>
                                    <td className="px-4 py-3">
                                        個人プライバシー法が制定されており、同法律においては、個人情報の収集、保管、利用に関する規定だけでなく、全ての個人は住居、財産、文書、データ、通信、性格に関するプライバシー権を有するとし、法律で定められた場合を除き、その権利が侵されないことを規定しています。
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">⑥</td>
                                    <td className="px-4 py-3">
                                        当該第三者による相当措置の実施に関する支障の有無及びその概要
                                    </td>
                                    <td className="px-4 py-3">
                                        特にありません。
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">⑦</td>
                                    <td className="px-4 py-3">
                                        当該支障に関して、当社が講ずる措置の概要
                                    </td>
                                    <td className="px-4 py-3">
                                        特にありません。
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        【4】
                        <table className="table-auto w-full text-gray-500 mt-2">
                            <tbody>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">①</td>
                                    <td className="px-4 py-3">委託先の名称</td>
                                    <td className="px-4 py-3">NNP KOREA</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">②</td>
                                    <td className="px-4 py-3">
                                        当該第三者による法第28条第1項に規定する体制の整備の方法
                                    </td>
                                    <td className="px-4 py-3">
                                        委託契約を締結する方法
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">③</td>
                                    <td className="px-4 py-3">
                                        当該第三者が実施する相当措置の概要
                                    </td>
                                    <td className="px-4 py-3">
                                        委託契約において、日本における個人情報の保護に関する法律に定める措置と同様の措置（特定した利用目的の範囲内で個人データを取り扱う旨、不適正利用の禁止、必要かつ適切な安全管理措置を講ずる旨、従業者に対する必要かつ適切な監督を行う旨、再委託の禁止、漏えい等が発生した場合には移転元が個人情報保護委員会への報告及び本人通知を行う旨、個人データの第三者提供の禁止等）を定めています。
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">④</td>
                                    <td className="px-4 py-3">
                                        確認の頻度及び方法
                                    </td>
                                    <td className="px-4 py-3">
                                        年1回、書面による報告を受ける形で実施しています。
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">⑤</td>
                                    <td className="px-4 py-3">
                                        当該第三者による相当措置の実施に影響を及ぼすおそれのある当該外国の制度の有無及びその概要
                                    </td>
                                    <td className="px-4 py-3">
                                        個人情報保護法（Personal Information
                                        Protection Act）が制定されています。
                                        詳細については、こちらをご参照ください。
                                        <a href="https://www.ppc.go.jp/files/pdf/korea_report.pdf">
                                            https://www.ppc.go.jp/files/pdf/korea_report.pdf
                                        </a>
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">⑥</td>
                                    <td className="px-4 py-3">
                                        当該第三者による相当措置の実施に関する支障の有無及びその概要
                                    </td>
                                    <td className="px-4 py-3">
                                        特にありません。
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">⑦</td>
                                    <td className="px-4 py-3">
                                        当該支障に関して、当社が講ずる措置の概要
                                    </td>
                                    <td className="px-4 py-3">
                                        特にありません。
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        【5】
                        <table className="table-auto w-full text-gray-500 mt-2">
                            <tbody>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">①</td>
                                    <td className="px-4 py-3">委託先の名称</td>
                                    <td className="px-4 py-3">
                                        THE BANK OF PUNJAB
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">②</td>
                                    <td className="px-4 py-3">
                                        当該第三者による法第28条第1項に規定する体制の整備の方法
                                    </td>
                                    <td className="px-4 py-3">
                                        委託契約を締結する方法
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">③</td>
                                    <td className="px-4 py-3">
                                        当該第三者が実施する相当措置の概要
                                    </td>
                                    <td className="px-4 py-3">
                                        委託契約において、日本における個人情報の保護に関する法律に定める措置と同様の措置（特定した利用目的の範囲内で個人データを取り扱う旨、不適正利用の禁止、必要かつ適切な安全管理措置を講ずる旨、従業者に対する必要かつ適切な監督を行う旨、再委託の禁止、漏えい等が発生した場合には移転元が個人情報保護委員会への報告及び本人通知を行う旨、個人データの第三者提供の禁止等）を定めています。
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">④</td>
                                    <td className="px-4 py-3">
                                        確認の頻度及び方法
                                    </td>
                                    <td className="px-4 py-3">
                                        年1回、書面による報告を受ける形で実施しています。
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">⑤</td>
                                    <td className="px-4 py-3">
                                        当該第三者による相当措置の実施に影響を及ぼすおそれのある当該外国の制度の有無及びその概要
                                    </td>
                                    <td className="px-4 py-3">
                                        パキスタンにおいて個人情報保護法等の包括的なデータ保護に関する具体的な法律は存在していないようです。
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">⑥</td>
                                    <td className="px-4 py-3">
                                        当該第三者による相当措置の実施に関する支障の有無及びその概要
                                    </td>
                                    <td className="px-4 py-3">
                                        特にありません。
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">⑦</td>
                                    <td className="px-4 py-3">
                                        当該支障に関して、当社が講ずる措置の概要
                                    </td>
                                    <td className="px-4 py-3">
                                        特にありません。
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        【6】
                        <table className="table-auto w-full text-gray-500 mt-2">
                            <tbody>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">①</td>
                                    <td className="px-4 py-3">委託先の名称</td>
                                    <td className="px-4 py-3">
                                        SACOMBANK REMITTANCE EXPRESS LIMITED
                                        COMPANY
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">②</td>
                                    <td className="px-4 py-3">
                                        当該第三者による法第28条第1項に規定する体制の整備の方法
                                    </td>
                                    <td className="px-4 py-3">
                                        委託契約を締結する方法
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">③</td>
                                    <td className="px-4 py-3">
                                        当該第三者が実施する相当措置の概要
                                    </td>
                                    <td className="px-4 py-3">
                                        委託契約において、日本における個人情報の保護に関する法律に定める措置と同様の措置（特定した利用目的の範囲内で個人データを取り扱う旨、不適正利用の禁止、必要かつ適切な安全管理措置を講ずる旨、従業者に対する必要かつ適切な監督を行う旨、再委託の禁止、漏えい等が発生した場合には移転元が個人情報保護委員会への報告及び本人通知を行う旨、個人データの第三者提供の禁止等）を定めています。
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">④</td>
                                    <td className="px-4 py-3">
                                        確認の頻度及び方法
                                    </td>
                                    <td className="px-4 py-3">
                                        年1回、書面による報告を受ける形で実施しています。
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">⑤</td>
                                    <td className="px-4 py-3">
                                        当該第三者による相当措置の実施に影響を及ぼすおそれのある当該外国の制度の有無及びその概要
                                    </td>
                                    <td className="px-4 py-3">
                                        ベトナムにおいて個人情報保護法等の包括的なデータ保護に関する具体的な法律は存在していないようです。詳細については、こちらをご参照ください。
                                        <a href="https://www.ppc.go.jp/files/pdf/vietnam_report.pdf">
                                            https://www.ppc.go.jp/files/pdf/vietnam_report.pdf
                                        </a>
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">⑥</td>
                                    <td className="px-4 py-3">
                                        当該第三者による相当措置の実施に関する支障の有無及びその概要
                                    </td>
                                    <td className="px-4 py-3">
                                        事業者に対し政府の情報収集活動への協力義務を課す制度であって、本人の権利利益に重大な影響を及ぼす可能性のあるものとして、①国家安全保障法（Law
                                        on National Security No.
                                        32/2004/QH11）、②サイバー情報セキュリティ法、③監査法（Law
                                        on Inspection No.
                                        56/2010/QH12）があります。
                                        詳細については、こちらをご参照ください。
                                        <a href="https://www.ppc.go.jp/files/pdf/vietnam_report.pdf">
                                            https://www.ppc.go.jp/files/pdf/vietnam_report.pdf
                                        </a>
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">⑦</td>
                                    <td className="px-4 py-3">
                                        当該支障に関して、当社が講ずる措置の概要
                                    </td>
                                    <td className="px-4 py-3">
                                        特にありません。
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        【7】
                        <table className="table-auto w-full text-gray-500 mt-2">
                            <tbody>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">①</td>
                                    <td className="px-4 py-3">委託先の名称</td>
                                    <td className="px-4 py-3">
                                        TRANGLO SDN.BHD
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">②</td>
                                    <td className="px-4 py-3">
                                        当該第三者による法第28条第1項に規定する体制の整備の方法
                                    </td>
                                    <td className="px-4 py-3">
                                        委託契約を締結する方法
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">③</td>
                                    <td className="px-4 py-3">
                                        当該第三者が実施する相当措置の概要
                                    </td>
                                    <td className="px-4 py-3">
                                        委託契約において、日本における個人情報の保護に関する法律に定める措置と同様の措置（特定した利用目的の範囲内で個人データを取り扱う旨、不適正利用の禁止、必要かつ適切な安全管理措置を講ずる旨、従業者に対する必要かつ適切な監督を行う旨、再委託の禁止、漏えい等が発生した場合には移転元が個人情報保護委員会への報告及び本人通知を行う旨、個人データの第三者提供の禁止等）を定めています。
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">④</td>
                                    <td className="px-4 py-3">
                                        確認の頻度及び方法
                                    </td>
                                    <td className="px-4 py-3">
                                        年1回、書面による報告を受ける形で実施しています。
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">⑤</td>
                                    <td className="px-4 py-3">
                                        当該第三者による相当措置の実施に影響を及ぼすおそれのある当該外国の制度の有無及びその概要
                                    </td>
                                    <td className="px-4 py-3">
                                        個人データ保護法（Personal Data
                                        Protection Act
                                        2010）が制定されています。
                                        詳細については、こちらをご参照ください。
                                        <a href="https://www.ppc.go.jp/files/pdf/malaysia_report.pdf">
                                            https://www.ppc.go.jp/files/pdf/malaysia_report.pdf
                                        </a>
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">⑥</td>
                                    <td className="px-4 py-3">
                                        当該第三者による相当措置の実施に関する支障の有無及びその概要
                                    </td>
                                    <td className="px-4 py-3">
                                        特にありません。
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">⑦</td>
                                    <td className="px-4 py-3">
                                        当該支障に関して、当社が講ずる措置の概要
                                    </td>
                                    <td className="px-4 py-3">
                                        特にありません。
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        【7】
                        <table className="table-auto w-full text-gray-500 mt-2">
                            <tbody>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">①</td>
                                    <td className="px-4 py-3">委託先の名称</td>
                                    <td className="px-4 py-3">
                                        WO TRANSFER(HK) LIMITED
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">②</td>
                                    <td className="px-4 py-3">
                                        当該第三者による法第28条第1項に規定する体制の整備の方法
                                    </td>
                                    <td className="px-4 py-3">
                                        委託契約を締結する方法
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">③</td>
                                    <td className="px-4 py-3">
                                        当該第三者が実施する相当措置の概要
                                    </td>
                                    <td className="px-4 py-3">
                                        委託契約において、日本における個人情報の保護に関する法律に定める措置と同様の措置（特定した利用目的の範囲内で個人データを取り扱う旨、不適正利用の禁止、必要かつ適切な安全管理措置を講ずる旨、従業者に対する必要かつ適切な監督を行う旨、再委託の禁止、漏えい等が発生した場合には移転元が個人情報保護委員会への報告及び本人通知を行う旨、個人データの第三者提供の禁止等）を定めています。
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">④</td>
                                    <td className="px-4 py-3">
                                        確認の頻度及び方法
                                    </td>
                                    <td className="px-4 py-3">
                                        年1回、書面による報告を受ける形で実施しています。
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">⑤</td>
                                    <td className="px-4 py-3">
                                        当該第三者による相当措置の実施に影響を及ぼすおそれのある当該外国の制度の有無及びその概要
                                    </td>
                                    <td className="px-4 py-3">
                                        個人データ（プライバシー）条例（Personal
                                        Data (Privacy)
                                        Ordinance）が制定されています。
                                        詳細については、こちらをご参照ください。
                                        <a href="https://www.ppc.go.jp/files/pdf/hongkong_report.pdf">
                                            https://www.ppc.go.jp/files/pdf/hongkong_report.pdf
                                        </a>
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="text-left px-4 py-3">⑥</td>
                                    <td className="px-4 py-3">
                                        当該第三者による相当措置の実施に関する支障の有無及びその概要
                                    </td>
                                    <td className="px-4 py-3">
                                        事業者に対し政府の情報収集活動への協力義務を課す制度であって、本人の権利利益に重大な影響を及ぼす可能性のあるものとして、香港国家安全維持法（The
                                        Law of the People’s Republic of China on
                                        Safeguarding National Security in the
                                        Hong Kong Special Administrative
                                        Region）（NSL）があります。
                                        詳細については、こちらをご参照ください。
                                        <a href="https://www.ppc.go.jp/files/pdf/hongkong_report.pdf">
                                            https://www.ppc.go.jp/files/pdf/hongkong_report.pdf
                                        </a>
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="text-left px-4 py-3">⑦</td>
                                    <td className="px-4 py-3">
                                        当該支障に関して、当社が講ずる措置の概要
                                    </td>
                                    <td className="px-4 py-3">
                                        特にありません。
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    第５条（個人情報の第三者提供）
                </p>

                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        当社は、あらかじめ会員の同意を得ることなく個人情報を第三者に提供することはありません。ただし、以下の場合は除きます。
                        <ol className="list-decimal text-gray-500 mt-4 ml-5">
                            <li>法令に基づく場合</li>
                            <li>
                                人の生命、身体又は財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき
                            </li>
                            <li>
                                公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき
                            </li>
                            <li>
                                国の機関若しくは地方公共団体、又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼす恐れがあるとき
                            </li>
                        </ol>
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    第６条（個人情報に関する開示・訂正の請求）
                </p>

                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        お客様は、当社の定める方法により、法令に定める範囲内で、自らの情報を閲覧及び謄写をすることができます。なお、閲覧又は謄写には当社所定の手数料が必要となります。また、閲覧又は謄写の方法については、当社所定の方法によるものとします。
                    </li>
                    <li>
                        開示請求に伴い取得した個人情報は、開示請求に必要な範囲のみで取り扱うものとし、提出いただいた取引時確認のための書類は、回答終了後速やかに、当社が定める個人情報の廃棄手続により処理します。
                    </li>
                    <li>
                        お客様は、不完全、不正確又は失効した会員情報を訂正、消去又は停止を求めることができます。また、当社において、ご本人から保有個人データの第三者への提供の利用停止を求められた場合であって、その求めに理由があることが判明したときは、遅滞なく、保有個人データの第三者への利用提供を停止いたします。
                    </li>
                    <li>
                        退会するお客様から、保有個人データの削除のお申し出があった場合、以下の理由により当社はデータ削除の対応はいたしかねます。ただし、退会後にお客様からお問い合わせに対応する場合を除き、お客様の個人データを利用・閲覧することはいたしません。
                        <ol className="list-decimal text-gray-500 mt-4 ml-5">
                            <li>
                                退会後のお客様ご本人、代理人、官公庁等からの問い合わせに適切に対応する必要があるため
                            </li>
                            <li>
                                当社の正当な事業活動において保有個人データの保存を必要とするため
                            </li>
                        </ol>
                    </li>
                    <li>
                        お客様は、法令に基づき、会員情報の処理に関する特定の状況について（会員情報の処理が本サービスを完了するために必要な場合を除きます）、正当な理由がある場合には異議を述べることができます。
                    </li>
                    <li>
                        開示のお申し出があった場合については、個人情報保護委員会が定める下記の方法のうち、開示申請者の指定するいずれかの方法により回答いたします。ただし、当該方法による開示に多額の費用を要する場合又は当該方法による開示が困難である場合は、書面の交付による回答とさせていただきます。
                        <ol className="list-decimal text-gray-500 mt-4 ml-5">
                            <li>書面の交付による方法</li>
                            <li>PDFファイル等をメールにて送付する方法</li>
                            <li>その他当社が定める方法</li>
                        </ol>
                        また、次に該当する場合は、開示いたしかねますので、あらかじめご了承願います。開示できないことを決定した場合は、その旨、理由を付記して通知申し上げます。
                        <ol className="list-decimal text-gray-500 mt-4 ml-5">
                            <li>ご本人が確認できない場合</li>
                            <li>
                                当社所定の申請書、本人確認書類等に不備があった場合
                            </li>
                            <li>
                                開示請求項目が開示対象個人情報に該当しない場合
                            </li>
                            <li>
                                本人又は第三者の生命、身体、財産その他の権利利益を害するおそれがある場合
                            </li>
                            <li>
                                当社又は第三者の営業秘密・ノウハウに属する情報、個人に対する評価・分類・区分に関する情報その他内部監査・調査・分析等当社内部の業務のみに利用・記録される情報であり、開示することにより当社の業務の適正な実施に著しい支障をおよぼすおそれがある場合
                            </li>
                            <li>他の法令に違反となる場合</li>
                        </ol>
                    </li>
                    <li>
                        第１項、第３項及び第５項に定める権利を行使される場合、又は当社から以降のご案内を受領することを希望されない場合には、当社までご連絡下さい。
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    第７条（個人情報についてのお問い合わせ窓口の設置）
                </p>

                <p className="mt-6 text-gray-500">
                    当社は、個人情報の取扱いに関するお客様からのお問い合わせ窓口を設置し、適切かつ迅速な対応に努めます。なお、当社の保有個人データについてご本人様からご要望があった場合には、当社からのダイレクトメールの発送停止を含め、可能な範囲で、ご要望に応じるよう努めます。
                </p>
                <p className="mt-6 text-gray-500">
                    【個人情報の取扱いに関するお問い合わせ窓口】
                    <br />
                    東京都新宿区百人町２－２０－２金子ハイツ2階
                    <br />
                    電話番号　０３－６３０２－１２２３
                    <br />
                    　　　　　８１－３－６３０２－１２２３
                    <br />
                    受付時間　月曜日から金曜日　１０時から１８時まで
                    <br />
                    （１２月３1日から１月2日まで、土・日及び祝日並びに当社が別途定める日を除きます。）
                </p>
                <p className="mt-6 text-gray-500">
                    この規程は、平成２５年７月１日から施行する。
                    <br />
                    この規程は、平成２８年４月１日から施行する。
                    <br />
                    この規程は、令和３年５月１日から施行する。
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
