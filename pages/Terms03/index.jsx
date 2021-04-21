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
                <title>About us - {t('site-name')}</title>
            </Head>
            <div className="text-lg max-w-prose mx-auto">
                <h1>
                    <span className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-blue-700 sm:text-4xl">
                        送金サービス利用規定
                    </span>
                </h1>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    第１条（適用範囲）
                </p>
                <p className="mt-6 text-gray-500">
                    本規定は、当社の提供する送金サービス（以下「本サービス」といいます。）に関する取扱いについて定めるものです。お客様は、本規定の内容を十分に理解し、本規定にご同意いただいた上で、本サービスをご利用いただくものとします。
                </p>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    第２条（本サービスの内容）
                </p>
                <p className="mt-6 text-gray-500">
                    当社は、本規定に従って、お客様の送金依頼に基づき、お客様が指定する受取人に対し、お客様が指定する金額の送金を行います。
                </p>

                <p className="mt-6 text-xl text-gray-500 font-bold">
                    第３条（会員登録）
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        本サービスの利用にあたっては,当社所定の会員登録手続を行い、登録会員になる必要があります（以下、登録された会員を「会員」といいます。）。
                    </li>
                    <li>
                        登録された会員の登録期間は、登録日より１年間とし、会員からの解約申出がない場合、当該契約は１年間の自動更新とし以後も同様とします。ただし、本サービスを最後に利用した日から１年間、本サービスの利用がない場合には、当社は、会員の登録を抹消します。
                    </li>
                    <li>
                        契約期間中に会員から解約の申出があった場合には、本サービスに係る契約は即時に解除され、本サービスを再び利用する場合には、改めて会員登録を行うものとします。なお、会員登録の抹消及び契約期間中の解約に際しては、解約費用等は発生しません。
                    </li>
                    <li>
                        当社は、会員登録の際に申込者のお申込内容を審査し、又は当社所定の方法により会員の登録情報を審査し、次のいずれかに該当することが明らかとなった場合には、当社の判断によって会員登録を解除することができるものとします。
                        <ol className="list-roman text-gray-500 mt-4 ml-5">
                            <li>
                                申込者又は会員のお申込内容又は登録情報に虚偽の記載があった場合
                            </li>
                            <li>
                                申込者又は会員が未成年者、成年被後見人、被保佐人又は被補助人のいずれかであり、登録手続が成年被後見人によって行われておらず、又は登録手続の際に、法定代理人、保佐人若しくは補助人の同意を得ていなかった場合
                            </li>
                            <li>
                                その他当社が会員の登録を行うこと又は継続することが不適当であると判断した場合
                            </li>
                        </ol>
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    第４条（会員登録手続）
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        会員登録を希望する利用者は、当社が求める所定の情報（以下「会員情報」といいます。）の通知を含む、当社所定の手続により、会員登録を申し込むものとします。
                    </li>
                    <li>
                        会員登録を希望する利用者は、次の各号に定めるいずれかの方法により、会員登録の申込みを行うものとします。
                        <ol className="list-roman text-gray-500 mt-4 ml-5">
                            <li>
                                当社の指定する方法により「会員登録及び送金申請書」（以下「送金申請書」といいます。）を取得し、必要事項を記載した上で、これを本人確認書類と一緒に、郵送、FAX又はメール等当社が指定する方法を利用し、当社に送付する方法
                            </li>
                            <li>
                                当社の営業所（当社の代理店における営業所を含みます。以下同じです。）又は当社の指定する場所において、本人確認書類と一緒に送金申請書を直接提出する方法
                            </li>
                            <li>
                                当社所定のスマートフォン・アプリに必要事項を入力し、本人確認書類の写真データをアップロードする方法
                            </li>
                        </ol>
                    </li>
                    <li>
                        当社は、前項の申込みを受理するに際し、犯罪による収益の移転防止に関する法律に基づき申込者の本人確認その他必要な確認（以下「取引時確認」といいます。）を行います。当社は、取引時確認の結果、当該申込者が利用者本人であることの確認が取れた場合には、当該申込者に会員カードを発行し、本人宛に郵送するものとします。
                    </li>
                    <li>
                        登録情報に疑義が生じた場合や会員以外の者が会員になりすましている疑いが生じた場合、法令等により取引時確認が必要となる場合、その他当社が必要と認めた場合には、取引時確認のため本人確認資料等の再提出を求めることがあります。会員は、速やかに、当社から要求された書類等を提出します。
                    </li>
                    <li>
                        当社は、本サービスの申込みを承諾した場合であっても、前項による取引時確認が完了しない場合又は完了しないおそれがあると判断した場合には、これを取り消すことができるものとします。
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    第５条（会員カードとパスワード）
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        会員は、会員カードについて、自己責任の下で管理を行うものとし、他人に貸与しないようにして下さい。
                    </li>
                    <li>
                        会員は、会員カードを紛失した場合には、速やかに当社所定の方法により連絡するものとし、この連絡を受けた場合には、会員カードを再発行します。
                    </li>
                    <li>
                        当社の許可なく会員カードが第三者に使用された場合であっても、当社に故意又は重過失がある場合を除き、当社は一切責任を負いません。
                    </li>
                    <li>
                        会員は、会員登録を行う際に、パスワードを設定するものとします。パスワードについては、生年月日、同一数値の連続のみによるものを登録することはできません。また、電話番号など、他人から推測されやすい番号の指定を避けるとともに、一定期間毎に変更していただくことをお勧めします。
                    </li>
                    <li>
                        会員は、会員番号及びパスワードを第三者に知られないよう会員自身の責任において厳重に管理するものとします。会員は、会員番号及びパスワードを失念した場合、又は第三者に知られた可能性がある場合には、直ちに当社所定の方法により、会員番号及びパスワードの変更手続を行うものとします。会員が会員番号及びパスワードを第三者に知られたことにより、この変更手続前に当該会員に生じた損害等については、当社に故意又は重過失がある場合を除き、当社は一切責任を負わないものとします。
                    </li>
                    <li>
                        会員は、パスワードを入力又は記載する方法その他当社が適当と認めた方法により、本サービスを利用することができます。
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    第６条（送金依頼）
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        会員は、本サービスを利用するときは、次のいずれかの方法により送金依頼を行います。ただし、第４号の方法については、会員登録の申込みと同時に送金依頼をする場合には、これを利用することはできません。
                        <ol className="list-roman text-gray-500 mt-4 ml-5">
                            <li>
                                当社の指定するファックス番号に対して送金申請書をファクシミリにより送信する方法
                            </li>
                            <li>
                                当社の指定するメールアドレスに対して送金申請書を送付する方法
                            </li>
                            <li>
                                当社の指定する電話番号に電話をし、必要事項を口頭にて申告する方法
                            </li>
                            <li>
                                当社の指定する住所に対して送金申請書を送付する方法
                            </li>
                            <li>
                                当社の営業所又は当社の指定する場所において、直接送金申請書を提出する方法
                            </li>
                            <li>
                                当社所定のスマートフォン・アプリにアクセスする方法
                            </li>
                        </ol>
                    </li>
                    <li>
                        会員は、送金依頼を行うに際し、法令等に基づき、次の手続をとるものとします。
                        <ol className="list-roman text-gray-500 mt-4 ml-5">
                            <li>
                                送金申請書の作成にあたり、送金目的その他所定の事項を正確に申告すること
                            </li>
                            <li>
                                当社所定の本人確認資料等により取引時確認が既に完了している場合を除き、当社所定の本人確認書類等を提出すること
                            </li>
                            <li>
                                許可等が必要とされる取引の場合には、当該許可を証明する書面の写しを提出すること
                            </li>
                            <li>
                                当社が別途定める金額を超える金額について送金の依頼を行う場合には、あらかじめ、当社にその旨を通知すること
                            </li>
                        </ol>
                    </li>
                    <li>
                        当社は、会員の場合は会員番号とパスワードにより、会員の登録が完了していない場合には、本人確認書類により、本人確認を行います。
                    </li>
                    <li>
                        会員は、第１項の送金依頼とともに、入金期限内に送金申請額及び第８条に定める手数料（以下、両者を総称して「送金資金等」といいます。）を、次の各号に定めるいずれかの方法により支払うものとします。支払に要する費用は会員の負担とします。
                        <ol className="list-roman text-gray-500 mt-4 ml-5">
                            <li>当社が指定する銀行口座へ振り込む方法</li>
                            <li>
                                当社の営業所若しくは当社の指定する場所において、直接現金を交付する方法
                            </li>
                        </ol>
                    </li>
                    <li>
                        本サービスにおいては、受取人は、会員が送金時に指定した通貨により支払われます。通貨は、第７条第１項に基づき送金契約が成立した時点における為替レート（為替レートの算出については、第９条を参照下さい。）を用いて換算されるものとします。
                    </li>
                    <li>
                        当社は、会員の送金依頼を、当社の営業時間内に限り受け付けます。
                    </li>
                    <li>
                        本サービスの１回の送金上限額は１００万円とします。また、同一日に、同一会員が同一の送金先に対して複数回送金する場合において、１日の送金金額の合計額が１００万円を超えるときには、送金依頼を受け付けることはできません。
                    </li>
                    <li>
                        当社の代理店における営業所において本規定に基づき送金契約を締結された場合であっても、会員は何らの不利益を受けず、当社の営業所において本規定に基づき送金契約を締結された場合と同様の権利を有するものとします。
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    第７条（送金契約の成立及び解除）
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        送金契約は、当社が送金資金等の入金を確認し、本サービスの申込みに問題がないと判断したときに成立するものとします。なお、当社は、当社が必要と認めた場合には、送金契約の成立に先立ち、会員に対し、本サービスの申込みの内容等について確認を行うものとし、かかる確認が取れない場合には、送金契約は成立しないものとします。
                    </li>
                    <li>
                        本サービスの申込みに問題があると判断した場合、当社は、本サービスの申込みを受理しないものとし、当該申込みは、取り消されたものとみなします。
                    </li>
                    <li>
                        当社は、入金期限までに送金資金等の入金が確認できなかった場合には、本サービスによる送金依頼が会員により取り消されたものとみなします。
                    </li>
                    <li>
                        第１項により送金契約が成立した後においても、当社の送金手続が完了する前に、次の各号の事由の一つにでも該当すると認めたときは、当社から送金契約の解除ができるものとします。この場合、解除によって生じた損害、損失又は費用（以下「損害等」という。）について、当社に故意又は重過失がある場合を除き、当社は責任を負いません。
                        <ol className="list-roman text-gray-500 mt-4 ml-5">
                            <li>
                                取引等の非常停止に該当するなど、送金が外国為替関連法規、その他の法令等に違反するとき
                            </li>
                            <li>
                                戦争、内乱、若しくは金融機関の資産凍結、支払停止などが発生し、又はそのおそれがあるとき
                            </li>
                            <li>
                                送金が犯罪や不正に関するものであるなど、相応の事由があるとき
                            </li>
                        </ol>
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    第８条（手数料等）
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        本サービスにおける送金手数料は、別紙２に定める金額とします。
                    </li>
                    <li>
                        第１４条に基づく組戻しがなされた場合、別紙２に定める組戻手数料及び会員の銀行口座への振込手数料をお支払いいただきます。なお、この場合、前項の送金手数料は返還しないものとします。
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    第９条（為替レート）
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        送金依頼の受付にあたり、送金通貨と受取通貨が異なる場合に適用する為替レートは、送金受付日において、当社の委託先が設定した為替レートに0.00円～1.5円上乗せしたレートを適用するものとします（なお、為替レートは毎日営業開始時に更新するものとします。）。また、為替相場の状況に応じて、営業時間中においても変更する場合があります。
                    </li>
                    <li>
                        送金資金等の返還にあたり、当社が会員にそれらの資金を送金通貨と異なる通貨により返還する場合についても、返還手続の処理日において第1項に定めるレートを適用します。
                    </li>
                    <li>
                        為替レートを適用した結果、送金資金額に１通貨単位未満の端数が発生した場合には、１通貨単位未満を切り捨てるものとします。
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    第１０条（受取人の登録）
                </p>
                <p className="mt-6  text-gray-500">
                    会員は、本サービスを利用する際に、当社所定の方法により、受取人に関する情報（受取人の氏名、送金方法、送金目的等をいいます。）を登録することができます。
                </p>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    第１１条（受取証書の発行）
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        当社は、第７条第１項に基づき送金契約が成立し、店頭において資金を受領したとき、又は振込入金した会員より請求があったときは、受取証書を交付します。
                    </li>
                    <li>
                        受取証書は、第１４条に基づく組戻しなどの場合に、必要となりますので、大切に保管して下さい。
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    第１２条（送金資金の支払）
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        当社は、以下のいずれかの方法のうち、会員の指定する方法により、会員から指定された金額を当該受取人に対して支払うものとします。
                        <ol className="list-roman text-gray-500 mt-4 ml-5">
                            <li>
                                当社の委託先の各営業所で、会員が指定する受取人に対し資金を交付する方法（ただし、送金先が韓国及び中国である場合を除きます。）
                            </li>
                            <li>
                                受取人の銀行口座（以下「受取口座」といいます。）に対し、会員が指定した金額を振り込む方法
                            </li>
                            <li>
                                会員が指定する受取人に対し資金を自宅配達する方法
                            </li>
                        </ol>
                    </li>
                    <li>
                        本サービスにおける送金の標準履行期間は、別紙１のとおりとします。
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    第１３条（取引内容の照会）
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        会員は、送金依頼後に受取人の受取口座に送金資金が未着の場合など、本サービスに関して疑義があるときは、速やかに当社にお問い合わせ下さい。
                    </li>
                    <li>
                        会員の送金依頼につき、関係機関から照会がある場合など必要があるときは、送金依頼の内容を会員に照会することがあります。この場合、会員は、速やかに回答して下さい。当社からの照会に対して、相当の期間内に回答がなかった場合又は不適切な回答があった場合には、受取人に対して送金資金を支払うことができない場合があります。また、そのために生じた損害等について当社は責任を負いません。
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    第１４条（組戻し）
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        会員が、送金契約の成立後にその依頼を取りやめることを希望する場合には、当社の窓口においてその組戻しの依頼を受け付けます。会員から組戻しの依頼があった時点で、既に受取人の受取口座に対する振込みが完了している場合には、組戻しの依頼を受け付けることはできません。
                    </li>
                    <li>
                        会員は、組戻しをしようとするときは、当社所定の「組戻依頼書」に必要事項を正確に記入の上、「受取証書」とともに当社に提出するものとします。この場合、当社は、当社所定の本人確認書類の提出を求め、本人確認をさせていただきます。
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    第１５条（個人情報の取扱い）
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        当社は、当社の個人情報保護規程に従い、会員の個人情報を取り扱います。
                    </li>
                    <li>
                        本サービスの利用に関し、当社は、本サービスの提供に必要な範囲で、会員及び受取人の情報を、当社の委託先、代理人その他の第三者に提供することができるものとします。
                    </li>
                    <li>
                        当社は、法令、裁判手続その他の法的手続又は監督官庁等に対し、会員又は受取人の情報の提出を求められた場合は、その要求に従うことができるものとします。
                    </li>
                </ol>

                <p className="mt-6 text-xl text-gray-500 font-bold">
                    第１６条（反社会的勢力の排除）
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        会員は、自ら及び会員の指定する受取人が、次の各号のいずれにも該当しないことを表明し、かつ将来にわたっても該当しないことを確約します。
                        <ol className="list-roman text-gray-500 mt-4 ml-5">
                            <li>暴力団</li>
                            <li>暴力団員</li>
                            <li>
                                暴力団員でなくなった時から５年を経過しない者
                            </li>
                            <li>暴力団準構成員</li>
                            <li>暴力団関係企業</li>
                            <li>
                                総会屋等、社会運動等標榜ゴロ又は特殊知能暴力集団等
                            </li>
                            <li>その他前各号に準ずる者</li>
                        </ol>
                    </li>
                    <li>
                        会員は、自ら又は第三者をして次の各号に該当する行為を行わないことを確約します。
                        <ol className="list-roman text-gray-500 mt-4 ml-5">
                            <li>暴力的な要求行為</li>
                            <li>法的な責任を超えた不当な要求行為</li>
                            <li>
                                取引に関して脅迫的な言動をし、又は暴力を用いる行為
                            </li>
                            <li>
                                風説を流布し、偽計を用い又は威力を用いて当社の信用を毀損し、又は当社の業務を妨害する行為
                            </li>
                            <li>その他前各号に準ずる行為</li>
                        </ol>
                    </li>
                </ol>

                <p className="mt-6 text-xl text-gray-500 font-bold">
                    第１７条（本サービスの停止、休止又は中断）
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        当社は、システムの保守、通信回線又は通信手段、コンピュータの障害などによるシステムの休止又は中断の必要があると認めたときは、本サービスの提供を停止、休止又は中断することができるものとします。
                    </li>
                    <li>
                        当社が本サービスの停止、休止又は中断する場合は、事前に当社のウェブサイト等においてその旨を掲示するものとします。ただし、システムの障害等で緊急を要すると当社が判断した場合は、事前の予告なく、本サービスの一部又は全部を停止、休止又は中断することがあります。
                    </li>
                    <li>
                        前二項に基づく本サービスの停止、休止又は中断により会員に生じた損害等については、当社に故意又は重大な過失がない限り、責任を負いません。
                    </li>
                    <li>
                        当社は、本サービスについて、会員に事前に通知することなく、いつでも各種の制限を設定し、また、設定した制限を変更することがあります。この制限の設定又は制限の変更により会員に生じた損害等については、当社に故意又は重大な過失がない限り、責任を負いません。
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    第１８条（本サービスの停止等）
                </p>
                <p className="mt-6  text-gray-500 ">
                    当社は、会員が次の各号に該当すると判断した場合、事前に通知することなく、会員による本サービスの提供を停止し、会員登録を解除することができるものとします。そのために会員に生じた損害等について当社は責任を負いません。
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>会員に法令や本規定に違反する行為があったとき</li>
                    <li>
                        会員が第１６条第１項各号のいずれかに該当し、若しくは同条第２項各号のいずれかに該当する行為をし、又は同条第１項の規定に基づく表明・確約に関して虚偽の申告をしたことが判明したとき
                    </li>
                    <li>会員の送金依頼の内容が、法令等に違反するとき</li>
                    <li>
                        本サービスが法令や公序良俗に反する行為に利用され、又はそのおそれがあるとき
                    </li>
                    <li>会員の所在が不明となったとき</li>
                    <li>
                        前各号に掲げるほか、当社が本サービスの停止を必要とする相当の事由が生じたとき
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    第１９条（免責規定）
                </p>

                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        災害・事変・戦争等の不可抗力、法令による制限、政府又は裁判所等の公的機関の措置その他当社以外の責めに帰すべき事由により、送金ができなかったときは、そのために会員に生じた損害等について当社は責任を負いません。
                    </li>
                    <li>
                        会員に受取人名又は受取口座番号の間違い、会員と受取人又は第三者との間における送金の原因関係についての争い、会員カード又はパスワードの盗用その他の事故等の事情があった場合でも、当社に故意又は重過失がある場合を除き、そのために会員に生じた損害等について当社は責任を負いません。
                    </li>
                    <li>
                        当社は、電話等の通信機器を利用して会員からの送金依頼を受ける場合には、通信機器を通じて当社が受信した場合にのみ責任を負うものとします。通信機器・回線の故障、回線不通等、通信手段の障害等により本サービスが遅延し、若しくは不能となった場合、又は当社が送信した情報等に誤謬・脱漏等が生じた場合、そのための損害等が会員に発生しても、当社に故意又は重過失がある場合を除き、当社は一切の責任を負いません。
                    </li>
                    <li>
                        本規定に関連して当社が損害等賠償義務を負う場合には、その額は送金資金の金額を上限とします。
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    第２０条（本規定の変更又は廃止等）
                </p>

                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        本規定及び本サービスの内容（ご利用時間、限度額及び手数料等を含みます。）は、金融情勢、その他の諸般の事情の変化、その他相当の理由があると認められた場合には、変更又は廃止することがあります。その場合には、当社は、変更又は廃止をする日、変更内容等必要な事項を当社の窓口又はウェブサイト等に掲示することにより事前に告知し、変更日以降は変更後の内容により取り扱うものとします。また、かかる変更又は廃止のために、本サービスの全部又は一部の利用を停止することがあります。
                    </li>
                    <li>
                        前項の変更又は廃止若しくは利用の停止により生じた損害等については、当社は責任を負いません。
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    第２１条（譲渡・質入れ等の禁止）
                </p>
                <p className="mt-6  text-gray-500">
                    本規定による会員の契約上の地位その他本サービスにかかる一切の権利は、譲渡、貸与、質入れその他第三者の権利を設定すること、又は第三者に利用させることはできません。
                </p>

                <p className="mt-6 text-xl text-gray-500 font-bold">
                    第２２条（届出事項の変更等）
                </p>

                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        会員は、氏名（法人名）、住所（所在地）、電話番号、電子メールアドレス、その他の届出事項を変更する場合は、所定の書面をもって直ちに当社に届け出るものとします。
                    </li>
                    <li>
                        前項の届出による変更は、当社が必要な変更手続を完了したと認められた時点で当社に対して有効となるものとします。
                    </li>
                    <li>
                        届け出られた住所及び氏名に当社が通知又は書類を発送した場合において、これらが不到着で当社宛に返送されたときは、当社は顧客情報の確認を行い、それでも顧客情報の確認ができない場合、当社は顧客情報の削除を行い、正しい顧客情報が届け出られるまで送金依頼を受けないものとします。届出のあった電子メールアドレスへの電子メールの送信についても不到着で当社宛てに返信された場合についても同様とします。
                    </li>
                    <li>
                        届け出られた住所に、当社が送付物等を送付した場合において、交通事情などの理由により延着し、又は到達しなかったときでも、通常到着すべきときに到着したものとみなし、そのために生じた損害等については、当社に故意又は重過失がある場合を除き、当社は責任を負いません。また、届出のあった電子メールアドレスへ電子メールを送信した場合においても、通信事情などの理由により延着し、又は到達しなかったときについても同様とします。
                    </li>
                </ol>

                <p className="mt-6 text-xl text-gray-500 font-bold">
                    第２３条（銀行等が行う為替取引との誤認防止に関する事項）
                </p>
                <p className="mt-6  text-gray-500">
                    会員は、以下の各号を十分に理解し、承諾した上、本サービスを利用するものとします。
                </p>

                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>本サービスは、銀行等が行う為替取引ではないこと。</li>
                    <li>
                        本サービスは、当社が預金若しくは貯金又は定期積金等（銀行法第２条第４項に規定する定期積金等をいう。）を受け入れるものではないこと。
                    </li>
                    <li>
                        本サービスは、預金保険法第５３条又は農水産業協同組合貯金保険法第５５条に規定する保険金の支払の対象とはならないこと。
                    </li>
                    <li>
                        当社が本サービスの依頼人の還付請求権（第２４条第１項に定義します。）を担保するために、東京法務局に履行保証金の供託を行うこと。
                    </li>
                </ol>

                <p className="mt-6 text-xl text-gray-500 font-bold">
                    第２４条（履行保証金）
                </p>

                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        当社は、資金決済に関する法律（以下「資金決済法」といいます。）第４３条の規定に従い、送金依頼人に対する債務を担保するため、所定の方法により算出された履行保証金を東京法務局に供託します。当社が債務を弁済できない場合、送金依頼人は、履行保証金について、当社に対する他の債務者に先立って、弁済を受ける権利（以下「還付請求権」といいます。）を有します。
                    </li>
                    <li>
                        還付請求権は、本サービスにおいては受取人が現実に送金を受け取るまでは、送金依頼人に帰属するものとします。当該受取人が現実に送金を受け取った後は、送金依頼人は、還付請求権を行使することはできません。
                    </li>
                    <li>
                        資金決済法第５９条第２項に規定する事由が生じた場合、送金依頼人は、同条に規定される還付手続により履行保証金の還付を受けることができます。
                    </li>
                    <li>
                        前項の事由が生じた場合、本サービスにおける受取人は、送金を受け取ることはできません。万一、本サービスにおける受取人が送金を受け取った後に前項の事由が生じ還付手続が実行された場合、送金依頼人は還付を受けた履行保証金に相当する金員を当社に返還しなければなりません。
                    </li>
                </ol>

                <p className="mt-6 text-xl text-gray-500 font-bold">
                    第２５条（相談・苦情に応じる営業所の所在地と連絡先）
                </p>
                <p className="mt-6  text-gray-500">
                    本サービスについての相談・苦情に応じる連絡先は、次のとおりです。なお、当社の代理店にて本サービスの申込みを行った場合には、代理店に直接問い合わせを行うこともできます。
                </p>
                <p className="mt-6 ml-4  text-gray-500">
                    <strong>株式会社Ｎ＆ＰJAPAN</strong>
                    <br />
                    東京都新宿区百人町2-20-2金子ハイツ２階
                    <br />
                    電話番号　０３－６３０２－１２２３
                    <br />
                    　　　　　８１－３－６３０２－１２２３
                    <br />
                    受付時間　月曜日から金曜日　１０時から１８時まで
                    <br />
                    １２月３1日から１月2日まで、土・日及び祝日並びに当社が別途定める日を除きます。）
                </p>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    第２６条（金融ＡＤＲ、苦情処理措置及び紛争解決措置）
                </p>
                <p className="mt-6  text-gray-500">
                    資金決済法に定める苦情処理措置及び紛争解決措置は以下のとおりとします。
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        苦情処理措置：
                        <br />
                        一般社団法人日本資金決済業協会　
                        電話：０３－３５５６－６２６１
                        <br />
                        なお、同協会における相談・苦情対応の流れは以下のURLから確認できます。
                        <a
                            href="http://www.s-kessai.jp/info/funds_consumer_inquiry_i.html"
                            target="_blank">
                            http://www.s-kessai.jp/info/funds_consumer_inquiry_i.html
                        </a>
                    </li>
                    <li>
                        紛争解決措置：
                        <br />
                        東京弁護士会紛争解決センター
                        電話：０３－３５８１－００３１
                        <br />
                        第一東京弁護士会仲裁センター
                        電話：０３－３５９５－８５８８
                        <br />
                        第二東京弁護士会仲裁センター
                        電話：０３－３５８１－２２４９
                        <br />
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    第２７条（準拠法及び管轄等）
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>本規定は、日本の法令に従って解釈します。</li>
                    <li>
                        本規定及び本サービスに関して訴訟の必要が生じた場合は、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
                    </li>
                    <li>
                        本規定は、日本語で書かれたものです。本規定の翻訳版と日本語版の解釈に相違がある場合には、日本語版の解釈が優先されるものとします。
                    </li>
                    <li>
                        本規定に優先する法令等又は法令等に基づく命令、規制がある場合は、本規定にかかわらず、それらが適用されるものとします。
                    </li>
                    <li>
                        本規定に定めのない事項については、当社の規定、規則等に定めるところによるものとします。{' '}
                    </li>
                </ol>

                <p className="mt-12 text-xl text-gray-500 font-bold">
                    別紙１　標準履行期間
                </p>
                <p className="mt-6  text-gray-500">
                    ＜送金先が韓国・中国の場合＞
                    <br />
                    送金契約締結日当日中
                </p>
                <p className="mt-6  text-gray-500">
                    ただし、委託先の休業日に送金資金等の確認を行い、送金契約が成立した場合には、「送金契約締結日」を「送金契約締結日の直後に到来する委託先における翌営業日」と読み替えるものとします。また、受取口座に係る金融機関の営業時間、規制上の要件、天候及び電気通信回線の状況、その他の事情等によって送金の完了に時間を要する場合があります。
                </p>
                <p className="mt-6  text-gray-500">
                    ＜送金先がネパール連邦民主共和国の場合＞
                </p>

                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        当社の委託先の各営業所で、会員が指定する受取人に対し資金を交付する方法により送金する場合：送金契約を締結した時から1時間
                    </li>
                    <li>
                        受取口座に対し、会員が指定した金額を振り込む方法により送金する場合：送金契約締結日の当日中
                        <br />
                    </li>
                </ol>
                <p className="mt-6  text-gray-500">
                    ただし、委託先の休業日に送金資金等の確認を行い、送金契約が成立した場合には、「送金契約締結日」を「送金契約締結日の直後に到来する委託先における翌営業日」と読み替えるものとします。
                    <br />
                    また、受取口座に係る金融機関の営業時間、規制上の要件、天候及び電気通信回線の状況、その他の事情等によって送金の完了に時間を要する場合があります。
                </p>

                <p className="mt-6  text-gray-500">
                    ＜送金先がベトナム社会主義共和国の場合＞
                </p>

                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        当社の委託先の各営業所で、会員が指定する受取人に対し資金を交付する方法により送金する場合：送金契約を締結した時から1時間
                    </li>
                    <li>
                        受取口座に対し、会員が指定した金額を振り込む方法により送金する場合：送金契約締結日の当日中
                    </li>
                    <li>
                        会員が指定する受取人に対し資金を自宅配達する方法により送金する場合：送金契約締結日の3日以内
                    </li>
                </ol>
                <p className="mt-6  text-gray-500">
                    ただし、委託先の休業日に送金資金等の確認を行い、送金契約が成立した場合には、「送金契約締結日」を「送金契約締結日の直後に到来する委託先における翌営業日」と読み替えるものとします。
                    <br />
                    また、受取口座に係る金融機関の営業時間、規制上の要件、天候及び電気通信回線の状況、その他の事情等によって送金の完了に時間を要する場合があります。
                </p>
                <p className="mt-6  text-gray-500">
                    ＜送金先が韓国、中国、ネパール、ベトナム以外の場合＞
                </p>

                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        当社の委託先の各営業所で、会員が指定する受取人に対し資金を交付する方法により送金する場合：送金契約を締結した時から1時間
                    </li>
                    <li>
                        受取口座に対し、会員が指定した金額を振り込む方法により送金する場合：送金契約締結日の翌日中
                    </li>
                </ol>
                <p className="mt-6  text-gray-500">
                    ただし、委託先の休業日に送金資金等の確認を行い、送金契約が成立した場合には、「送金契約締結日」を「送金契約締結日の直後に到来する委託先における翌営業日」と読み替えるものとします。
                    <br />
                    また、受取口座に係る金融機関の営業時間、規制上の要件、天候及び電気通信回線の状況、その他の事情等によって送金の完了に時間を要する場合があります。
                </p>

                <p className="mt-12  text-gray-500 font-bold">
                    別紙２　送金手数料及び組戻手数料
                </p>
                <p className="mt-6  text-gray-500">
                    １　送金手数料
                    <br />
                    ＜送金先が韓国・中国の場合＞
                </p>
                <table className="table-auto w-full text-gray-500 mt-6">
                    <thead>
                        <tr className="bg-blue-50">
                            <th className="px-6 py-3 whitespace-nowrap text-blue-800">
                                送金額
                            </th>
                            <th className="px-6 py-3 whitespace-nowrap text-blue-800">
                                手数料
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white">
                            <td className="text-left px-4 py-3 whitespace-nowrap">
                                1円～100,000円
                            </td>
                            <td className="text-right px-4 py-3 whitespace-nowrap">
                                500円
                            </td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="text-left px-4 py-3 whitespace-nowrap">
                                100,001円～300,000円
                            </td>
                            <td className="text-right px-4 py-3 whitespace-nowrap">
                                1,000円
                            </td>
                        </tr>
                        <tr className="bg-white">
                            <td className="text-left px-4 py-3 whitespace-nowrap">
                                300,001円～700,000円
                            </td>
                            <td className="text-right px-4 py-3 whitespace-nowrap">
                                2,000円
                            </td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="text-left px-4 py-3 whitespace-nowrap">
                                700,001円～1,000,000円
                            </td>
                            <td className="text-right px-4 py-3 whitespace-nowrap">
                                3,000円
                            </td>
                        </tr>
                    </tbody>
                </table>

                <p className="mt-12  text-gray-500">
                    ＜送金先がネパール連邦民主共和国の場合＞
                </p>
                <table className="table-auto w-full text-gray-500 mt-6">
                    <thead>
                        <tr className="bg-blue-50">
                            <th className="px-6 py-3 whitespace-nowrap text-blue-800">
                                送金額
                            </th>
                            <th className="px-6 py-3 whitespace-nowrap text-blue-800">
                                手数料
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white">
                            <td className="text-left px-4 py-3 whitespace-nowrap">
                                1円～100,000円
                            </td>
                            <td className="text-right px-4 py-3 whitespace-nowrap">
                                500円
                            </td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="text-left px-4 py-3 whitespace-nowrap">
                                100,001円～300,000円
                            </td>
                            <td className="text-right px-4 py-3 whitespace-nowrap">
                                1,000円
                            </td>
                        </tr>
                        <tr className="bg-white">
                            <td className="text-left px-4 py-3 whitespace-nowrap">
                                300,001円～1000,000円
                            </td>
                            <td className="text-right px-4 py-3 whitespace-nowrap">
                                1,500円
                            </td>
                        </tr>
                    </tbody>
                </table>

                <p className="mt-12  text-gray-500">
                    ＜送金先がベトナム社会主義共和国の場合＞
                </p>
                <table className="table-auto w-full text-gray-500 mt-6">
                    <thead>
                        <tr className="bg-blue-50">
                            <th className="px-6 py-3 whitespace-nowrap text-blue-800">
                                送金額
                            </th>
                            <th className="px-6 py-3 whitespace-nowrap text-blue-800">
                                手数料
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white">
                            <td className="text-left px-4 py-3 whitespace-nowrap">
                                1円～30,000円
                            </td>
                            <td className="text-right px-4 py-3 whitespace-nowrap">
                                500円
                            </td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="text-left px-4 py-3 whitespace-nowrap">
                                30,001円～250,000円
                            </td>
                            <td className="text-right px-4 py-3 whitespace-nowrap">
                                1,000円
                            </td>
                        </tr>
                        <tr className="bg-white">
                            <td className="text-left px-4 py-3 whitespace-nowrap">
                                250,001円～600,000円
                            </td>
                            <td className="text-right px-4 py-3 whitespace-nowrap">
                                1,480円
                            </td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="text-left px-4 py-3 whitespace-nowrap">
                                600,001円～1,000,000円
                            </td>
                            <td className="text-right px-4 py-3 whitespace-nowrap">
                                1,980円
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p className="mt-12  text-gray-500">
                    ＜送金先が韓国、中国、ネパール、ベトナム以外の場合＞
                    <br />
                    上限20,000円で、送金先・送金額より異なる。
                </p>
                <p className="mt-6  text-gray-500">
                    組戻手数料：１件につき　3,000円（消費税等を含む。）
                </p>
                <p className="mt-6  text-gray-500">
                    なお、上記手数料の金額は、上限額であり、これを上回らない範囲内でキャンペーン等により異なる手数料を申し受ける場合がある。
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
