import BackButton from '@/components/BackButton';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

function TermsOfService() {
    return (
        <div className='flex flex-col min-h-full w-full bg-neutral-100 items-center'>
            <BackButton page='home' />
            <div className='flex flex-col min-h-full w-1/2 max-xl:w-3/4 max-md:w-full items-center text-neutral-900 p-10 space-y-5 text-center'>
                <h1 className='text-2xl tracking-widest font-medium mb-2'>
                    TERMS OF SERVICE
                </h1>
                <h2 className='text-neutral-400 mb-10 font-normal'>
                    Last updated November 25, 2025
                </h2>
                <h2 className='text-xl tracking-widest font-normal m-2'>
                    AGREEMENT TO OUR LEGAL TERMS
                </h2>
                <p className=''>
                    We are Maren Stenersen, doing business as SCAPE by md ('Company', 'we', 'us', or 'our'), 
                    a company registered in Norway at Schweigårds vei 30A, BERGEN 5063. Our org number is 929 981 626.
                </p>
                <p className=''>
                    We operate the website <a href="https://www.scapebymd.no" target='_blank'><b>https://www.scapebymd.no</b></a> (the 'Site'), 
                    as well as any other related products and services that refer or link to these legal terms (the 'Legal Terms') (collectively, the 'Services').
                </p>
                <p>
                    You can contact us by phone at 93874223, email at <b>scapebymd@gmail.com</b>, or by mail to <br />Schweigårds vei 30A, BERGEN 5063, Norway.
                </p>
                <p>
                    These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ('you'), and Maren Stenersen, concerning your access to and use of the Services. 
                    You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. 
                    <br />IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                </p>
                <p>
                    We will provide you with prior notice of any scheduled changes to the Services you are using. 
                    The modified Legal Terms will become effective upon posting or notifying you by <b>scapebymd@gmail.com</b>, as stated in the email message. 
                    By continuing to use the Services after the effective date of any changes, you agree to be bound by the modified terms.
                </p>
                <p>
                    The Services are intended for users who are at least 13 years of age. 
                    All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Services. 
                    If you are a minor, you must have your parent or guardian read and agree to these Legal Terms prior to you using the Services.
                </p>
                <p className='mb-8'>
                    We recommend that you print a copy of these Legal Terms for your records.
                </p>

                <h2 className='text-xl tracking-widest font-normal m-2'>
                    TABLE OF CONTENTS
                </h2>
                <ul className='my-2 space-y-1 mb-8 font-normal'>
                    <li><a href="#our-services">1. OUR SERVICES</a></li>
                    <li><a href="#intellectual-property-rights">2. INTELLECTUAL PROPERTY RIGHTS</a></li>
                    <li><a href="#user-representations">3. USER REPRESENATIONS</a></li>
                    <li><a href="#products">4. PRODUCTS</a></li>
                    <li><a href="#purchases-and-payment">5. PURCHASES AND PAYMENT</a></li>
                    <li><a href="#return-policy">6. RETURN POLICY</a></li>
                    <li><a href="#warranty">7. WARRANTY</a></li>
                    <li><a href="#delivery">8. DELIVERY</a></li>
                    <li><a href="#prohibited-activities">9. PROHIBITED ACTICITIES</a></li>
                    <li><a href="#user-generated-contributions">10. USER GENERATED CONTRIBUTIONS</a></li>
                    <li><a href="#contribution-licence">11. CONTRIBUTION LICENCE</a></li>
                    <li><a href="#guidelines-for-reviews">12. GUIDELINES FOR REVIEWS</a></li>
                    <li><a href="#third-party-websites-and-content">13. THIRD-PARTY WEBSITES AND CONTENT</a></li>
                    <li><a href="#services-management">14. SERVICES MANAGEMENT</a></li>
                    <li><a href="#privacy-policy">15. PRIVACY POLICY</a></li>
                    <li><a href="#term-and-termination">16. TERM AND TERMINATION</a></li>
                    <li><a href="#modifications-and-interruptions">17. MODIFICATIONS AND INTERRUPTIONS</a></li>
                    <li><a href="#governing-law">18. GOVERNING LAW</a></li>
                    <li><a href="#dispute-resolution">19. DISPUTE RESOLUTION</a></li>
                    <li><a href="#corrections">20. CORRECTIONS</a></li>
                    <li><a href="#disclaimer">21. DISCLAIMER</a></li>
                    <li><a href="#limitations-of-liability">22. LIMITATIONS OF LIABILITY</a></li>
                    <li><a href="#indemnification">23. INDEMNIFICATION</a></li>
                    <li><a href="#user-data">24. USER DATA</a></li>
                    <li><a href="#electronic-communications-transactions-and-signatures">25. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</a></li>
                    <li><a href="#miscellaneous">26. MISCELLANEOUS</a></li>
                    <li><a href="#contact-us">27. CONTACT US</a></li>
                </ul>

                <h2 id='our-services' className='text-xl tracking-widest font-normal m-2'>
                    1. OUR SERVICES
                </h2>
                <p className='mb-8'>
                    The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. 
                    Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
                </p>

                <h2 id='intellectual-property-rights' className='text-xl tracking-widest font-normal m-2'>
                    2. INTELLECTUAL PROPERTY RIGHTS
                </h2>
                <h3 className='text-lg tracking-widest font-normal m-2'>
                    Our Intellectual Property
                </h3>
                <p className=''>
                    We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the 'Content'), 
                    as well as the trademarks, service marks, and logos contained therein (the 'Marks').
                </p>
                <p>
                    Our Content and Marks are protected by copyright and trademark laws 
                    (and various other intellectual property rights and unfair competition laws) and treaties around the world.
                </p>
                <p className='mb-2'>
                    The Content and Marks are provided in or through the Services 'AS IS' for your personal, non-commercial use only.
                </p>
                <h3 className='text-lg tracking-widest font-normal m-2'>
                    Your Use of Our Services
                </h3>
                <p>
                    Subject to your compliance with these Legal Terms, including the <i>'PROHIBITED ACTIVITIES'</i> section below, 
                    we grant you a non-exclusive, non-transferable, revocable licence to:
                        <ul className='my-2 space-y-1'>
                            <li>• access the Services; and</li>
                            <li>• download or print a copy of any portion of the Content to which you have properly gained access, solely for your personal, non-commercial use.</li>
                        </ul>
                </p>
                <p>
                    Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, 
                    or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
                </p>
                <p>
                    If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to: <b>contact@scapebymd.no</b>. 
                    If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.
                </p>
                <p>
                    We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.
                </p>
                <p>
                    Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.
                </p>
                <h3 className='text-lg tracking-widest font-normal m-2'>
                    Your Submissions
                </h3>
                <p>
                    Please review this section and the <i>'PROHIBITED ACTIVITIES'</i> section carefully prior to using our Services to understand the 
                    (a) rights you give us and (b) obligations you have when you post or upload any content through the Services.
                </p>
                <p>
                    <b>Submissions:</b> By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services ('Submissions'), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.
                </p>
                <p>
                    <b>You are responsible for what you post or upload:</b> By sending us Submissions through any part of the Services you:
                        <ul className='my-2 space-y-1'>
                            <li>• confirm that you have read and agree with our <i>'PROHIBITED ACTIVITIES'</i> and will not post, send, publish, upload, or transmit through the Services any Submission that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, deceitful, or misleading;</li>
                            <li>• to the extent permissible by applicable law, waive any and all moral rights to any such Submission;</li>
                            <li>• warrant that any such Submission are original to you or that you have the necessary rights and licences to submit such Submissions and that you have full authority to grant us the above-mentioned rights in relation to your Submissions; and</li>
                            <li>• warrant and represent that your Submissions do not constitute confidential information.</li>
                        </ul>
                </p>
                <p className='mb-8'>
                    You are solely responsible for your Submissions and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of (a) this section, 
                    (b) any third party’s intellectual property rights, or (c) applicable law.
                </p>

                <h2 id='user-representations' className='text-xl tracking-widest font-normal m-2'>
                    3. USER REPRESENTATIONS
                </h2>
                <p>
                    By using the Services, you represent and warrant that: 
                    (1) you have the legal capacity and you agree to comply with these Legal Terms; 
                    (2) you are not under the age of 13; 
                    (3) you are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Services; 
                    (4) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; 
                    (5) you will not use the Services for any illegal or unauthorised purpose; and 
                    (6) your use of the Services will not violate any applicable law or regulation.
                </p>
                <p className='mb-8'>
                    If you provide any information that is untrue, inaccurate, not current, or incomplete, 
                    we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).
                </p>

                <h2 id='products' className='text-xl tracking-widest font-normal m-2'>
                    4. PRODUCTS
                </h2>
                <p className='mb-8'>
                    We make every effort to display as accurately as possible the colours, features, specifications, and details of the products available on the Services. 
                    However, we do not guarantee that the colours, features, specifications, and details of the products will be accurate, complete, reliable, current, or free of other errors, and your electronic display may not accurately reflect the actual colours and details of the products. All products are subject to availability, and we cannot guarantee that items will be in stock. 
                    We reserve the right to discontinue any products at any time for any reason. Prices for all products are subject to change.
                </p>

                <h2 id='purchases-and-payment' className='text-xl tracking-widest font-normal m-2'>
                    5. PURCHASES AND PAYMENT
                </h2>
                <p>
                    We accept the following forms of payment:
                        <ul className='my-2 space-y-1'>
                            <li>• Visa</li>
                            <li>• Mastercard</li>
                            <li>• Vipps</li>
                        </ul>
                </p>
                <p>
                    You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. 
                    You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. 
                    Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in NOK.
                </p>
                <p>
                    You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorise us to charge your chosen payment provider for any such amounts upon placing your order. 
                    We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.
                </p>
                <p className='mb-8'>
                    We reserve the right to refuse any order placed through the Services. 
                    We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. 
                    These restrictions may include orders placed by or under the same customer account, the same payment method, and/or orders that use the same billing or shipping address. 
                    We reserve the right to limit or prohibit orders that, in our sole judgement, appear to be placed by dealers, resellers, or distributors.

                </p>

                <h2 id='return-policy' className='text-xl tracking-widest font-normal m-2'>
                    6. RETURN POLICY
                </h2>
                <p className='mb-8'>
                    All sales are final and no refund will be issued.
                </p>

                <h2 id='warranty' className='text-xl tracking-widest font-normal m-2'>
                    7. WARRANTY
                </h2>
                <p className='mb-8'>
                    Any warranty provided by the seller or manufacturer grants the buyer rights in addition to those already conferred by mandatory law. 
                    A warranty does not limit the buyer's rights to make claims for defects, delays, or non-conformity as outlined in sections 9 and 10 of these terms and conditions. 
                    The warranty also does not affect the buyer's rights under the Norwegian Consumer Purchases Act or any other relevant legislation applicable to the purchase.
                </p>
                <h2 id='delivery' className='text-xl tracking-widest font-normal m-2'>
                    8. DELIVERY
                </h2>
                <p className='mb-8'>
                    Delivery is considered to have occurred when the buyer, or their representative, has taken possession of the goods.
                    If the delivery date is not specified in the order system, the seller must deliver the goods to the buyer without undue delay and no later than 30 days after the order is placed by the customer. 
                    The goods will be delivered to the buyer unless otherwise specifically agreed upon by the parties.
                </p>

                <h2 id='prohibited-activities' className='text-xl tracking-widest font-normal m-2'>
                    9. PROHIBITED ACTIVITIES
                </h2>
                <p>
                    You may not access or use the Services for any purpose other than that for which we make the Services available. 
                    The Services may not be used in connection with any commercial endeavours except those that are specifically endorsed or approved by us.
                </p>
                <p className='mb-8'>
                    As a user of the Services, you agree not to:
                        <ul className='my-2 space-y-1'>
                            <li>• Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                            <li>• Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
                            <li>• Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.</li>
                            <li>• Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
                            <li>• Use any information obtained from the Services in order to harass, abuse, or harm another person.</li>
                            <li>• Make improper use of our support services or submit false reports of abuse or misconduct.</li>
                            <li>• Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
                            <li>• Engage in unauthorised framing of or linking to the Services.</li>
                            <li>• Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.</li>
                            <li>• Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
                            <li>• Delete the copyright or other proprietary rights notice from any Content.</li>
                            <li>• Attempt to impersonate another user or person or use the username of another user.</li>
                            <li>• Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats ('gifs'), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as 'spyware' or 'passive collection mechanisms' or 'pcms').</li>
                            <li>• Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.</li>
                            <li>• Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.</li>
                            <li>• Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.</li>
                            <li>• Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li>
                            <li>• Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.</li>
                            <li>• Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorised script or other software.</li>
                            <li>• Use a buying agent or purchasing agent to make purchases on the Services.</li>
                            <li>• Make any unauthorised use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretences.</li>
                            <li>• Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavour or commercial enterprise.</li>
                            <li>• Sell or otherwise transfer your profile.</li>
                            <li>• Use the Services to advertise or offer to sell goods and services.</li>
                        </ul>
                </p>

                <h2 id='user-generated-contributions' className='text-xl tracking-widest font-normal m-2'>
                    10. USER GENERATED CONTRIBUTIONS
                </h2>
                <p>
                    The Services does not offer users to submit or post content. 
                    We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, 
                    including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, 'Contributions'). 
                    Contributions may be viewable by other users of the Services and through third-party websites. 
                    When you create or make available any Contributions, you thereby represent and warrant that:
                        <ul className='my-2 space-y-1'>
                            <li>• The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.</li>
                            <li>• You are the creator and owner of or have the necessary licences, rights, consents, releases, and permissions to use and to authorise us, the Services, and other users of the Services to use your Contributions in any manner contemplated by the Services and these Legal Terms.</li>
                            <li>• You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Services and these Legal Terms.</li>
                            <li>• Your Contributions are not false, inaccurate, or misleading.</li>
                            <li>• Your Contributions are not unsolicited or unauthorised advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.</li>
                            <li>• Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libellous, slanderous, or otherwise objectionable (as determined by us).</li>
                            <li>• Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</li>
                            <li>• Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.</li>
                            <li>• Your Contributions do not violate any applicable law, regulation, or rule.</li>
                            <li>• Your Contributions do not violate the privacy or publicity rights of any third party.</li>
                            <li>• Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.</li>
                            <li>• Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.</li>
                            <li>• Your Contributions do not otherwise violate, or link to material that violates, any provision of these Legal Terms, or any applicable law or regulation.</li>
                        </ul>
                </p>
                <p className='mb-8'>
                    Any use of the Services in violation of the foregoing violates these Legal Terms and may result in, 
                    among other things, termination or suspension of your rights to use the Services.
                </p>

                <h2 id='contribution-licence' className='text-xl tracking-widest font-normal m-2'>
                    11. CONTRIBUTION LICENCE
                </h2>
                <p>
                    You and Services agree that we may access, store, process, and use any information and personal data that you provide and your choices (including settings).
                </p>
                <p>
                    By submitting suggestions or other feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you.
                </p>
                <p className='mb-8'>
                    We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Services. 
                    You are solely responsible for your Contributions to the Services and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.
                </p>

                <h2 id='guidelines-for-reviews' className='text-xl tracking-widest font-normal m-2'>
                    12. GUIDELINES FOR REVIEWS
                </h2>
                <p>
                    We may provide you areas on the Services to leave reviews or ratings. When posting a review, you must comply with the following criteria: <br />
                    (1) you should have firsthand experience with the person/entity being reviewed; <br />
                    (2) your reviews should not contain offensive profanity, or abusive, racist, offensive, or hateful language; <br />
                    (3) your reviews should not contain discriminatory references based on religion, race, gender, national origin, age, marital status, sexual orientation, or disability; <br />
                    (4) your reviews should not contain references to illegal activity; <br />
                    (5) you should not be affiliated with competitors if posting negative reviews; <br />
                    (6) you should not make any conclusions as to the legality of conduct; <br />
                    (7) you may not post any false or misleading statements; and <br />
                    (8) you may not organise a campaign encouraging others to post reviews, whether positive or negative.
                </p>
                <p className='mb-8'>
                    We may accept, reject, or remove reviews in our sole discretion. We have absolutely no obligation to screen reviews or to delete reviews, even if anyone considers reviews objectionable or inaccurate. Reviews are not endorsed by us, and do not necessarily represent our opinions or the views of any of our affiliates or partners. 
                    We do not assume liability for any review or for any claims, liabilities, or losses resulting from any review. 
                    By posting a review, you hereby grant to us a perpetual, non-exclusive, worldwide, royalty-free, fully paid, assignable, and sublicensable right and licence to reproduce, modify, translate, transmit by any means, display, perform, and/or distribute all content relating to review.
                </p>

                <h2 id='third-party-websites-and-content' className='text-xl tracking-widest font-normal m-2'>
                    13. THIRD-PARTY WEBSITES AND CONTENT
                </h2>
                <p className='mb-8'>
                    The Services may contain (or you may be sent via the Site) links to other websites ('Third-Party Websites') as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties ('Third-Party Content'). 
                    Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Services or any Third-Party Content posted on, available through, or installed from the Services, including the content, accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the Third-Party Websites or the Third-Party Content. 
                    Inclusion of, linking to, or permitting the use or installation of any Third-Party Websites or any Third-Party Content does not imply approval or endorsement thereof by us. 
                    If you decide to leave the Services and access the Third-Party Websites or to use or install any Third-Party Content, you do so at your own risk, and you should be aware these Legal Terms no longer govern. 
                    You should review the applicable terms and policies, including privacy and data gathering practices, of any website to which you navigate from the Services or relating to any applications you use or install from the Services. 
                    Any purchases you make through Third-Party Websites will be through other websites and from other companies, and we take no responsibility whatsoever in relation to such purchases which are exclusively between you and the applicable third party. 
                    You agree and acknowledge that we do not endorse the products or services offered on Third-Party Websites and you shall hold us blameless from any harm caused by your purchase of such products or services. 
                    Additionally, you shall hold us blameless from any losses sustained by you or harm caused to you relating to or resulting in any way from any Third-Party Content or any contact with Third-Party Websites.
                </p>

                <h2 id='services-management' className='text-xl tracking-widest font-normal m-2'>
                    14. SERVICES MANAGEMENT
                </h2>
                <p className='mb-8'>
                    We reserve the right, but not the obligation, to: <br />
                    (1) monitor the Services for violations of these Legal Terms; <br />
                    (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities; <br />
                    (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; <br />
                    (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and <br />
                    (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.
                </p>

                <h2 id='privacy-policy' className='text-xl tracking-widest font-normal m-2'>
                    15. PRIVACY POLICY
                </h2>
                <p className='mb-8'>
                    We care about data privacy and security. By using the Services, you agree to be bound by our Privacy Policy posted on the Services, which is incorporated into these Legal Terms. 
                    Please be advised the Services are hosted in Norway. 
                    If you access the Services from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in Norway, then through your continued use of the Services, you are transferring your data to Norway, and you expressly consent to have your data transferred to and processed in Norway.
                </p>

                <h2 id='term-and-termination' className='text-xl tracking-widest font-normal m-2'>
                    16. TERM AND TERMINATION
                </h2>
                <p>
                    These Legal Terms shall remain in full force and effect while you use the Services. <br />
                    WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. 
                    WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
                </p>
                <p className='mb-8'>
                    If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. 
                    In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.
                </p>

                <h2 id='modifications-and-interruptions' className='text-xl tracking-widest font-normal m-2'>
                    17. MODIFICATIONS AND INTERRUPTIONS
                </h2>
                <p>
                    We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. 
                    However, we have no obligation to update any information on our Services. We also reserve the right to modify or discontinue all or part of the Services without notice at any time. 
                    We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.
                </p>
                <p className='mb-8'>
                    We cannot guarantee the Services will be available at all times. 
                    We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. 
                    We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. 
                    You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services. 
                    Nothing in these Legal Terms will be construed to obligate us to maintain and support the Services or to supply any corrections, updates, or releases in connection therewith.
                </p>

                <h2 id='governing-law' className='text-xl tracking-widest font-normal m-2'>
                    18. GOVERNING LAW
                </h2>
                <p className='mb-8'>
                    These Legal Terms are governed by and interpreted following the laws of Norway, and the use of the United Nations Convention of Contracts for the International Sales of Goods is expressly excluded. 
                    If your habitual residence is in the EU, and you are a consumer, you additionally possess the protection provided to you by obligatory provisions of the law in your country to residence. 
                    Maren Stenersen and yourself both agree to submit to the non-exclusive jurisdiction of the courts of Bergen, which means that you may make a claim to defend your consumer protection rights in regards to these Legal Terms in Norway, or in the EU country in which you reside.
                </p>

                <h2 id='dispute-resolution' className='text-xl tracking-widest font-normal m-2'>
                    19. DISPUTE RESOLUTION
                </h2>
                <h3 className='text-lg tracking-widest font-normal m-2'>
                    Informal Negotiations
                </h3>
                <p>
                    To expedite resolution and control the cost of any dispute, controversy, or claim related to these Legal Terms (each a 'Dispute' and collectively, the 'Disputes') brought by either you or us (individually, a 'Party' and collectively, the 'Parties'), 
                    the Parties agree to first attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least thirty (30) days before initiating arbitration. 
                    Such informal negotiations commence upon written notice from one Party to the other Party.
                </p>
                <h3 className='text-lg tracking-widest font-normal m-2'>
                    Binding Arbitration
                </h3>
                <p>
                    Any dispute arising from the relationships between the Parties to these Legal Terms shall be determined by one arbitrator who will be chosen in accordance with the Arbitration and Internal Rules of the European Court of Arbitration being part of the European Centre of Arbitration having its seat in Strasbourg, and which are in force at the time the application for arbitration is filed, and of which adoption of this clause constitutes acceptance. 
                    The seat of arbitration shall be Bergen, Norway. 
                    The language of the proceedings shall be Norwegian. Applicable rules of substantive law shall be the law of Norway.
                </p>
                <h3 className='text-lg tracking-widest font-normal m-2'>
                    Restrictions
                </h3>
                <p>
                    The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, 
                    (a) no arbitration shall be joined with any other proceeding; 
                    (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilise class action procedures; and 
                    (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.
                </p>
                <h3 className='text-lg tracking-widest font-normal m-2'>
                    Exceptions to Informal Negotiations and Arbitration
                </h3>
                <p className='mb-8'>
                    The Parties agree that the following Disputes are not subject to the above provisions concerning informal negotiations binding arbitration: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorised use; and (c) any claim for injunctive relief. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.
                </p>

                <h2 id='corrections' className='text-xl tracking-widest font-normal m-2'>
                    20. CORRECTIONS
                </h2>
                <p className='mb-8'>
                    There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.
                </p>

                <h2 id='disclaimer' className='text-xl tracking-widest font-normal m-2'>
                    21. DISCLAIMER
                </h2>
                <p className='mb-8'>
                    THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORISED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGEMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
                </p>

                <h2 id='limitations-of-liability' className='text-xl tracking-widest font-normal m-2'>
                    22. LIMITATIONS OF LIABILITY
                </h2>
                <p className='mb-8'>
                    IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
                </p>

                <h2 id='indemnification' className='text-xl tracking-widest font-normal m-2'>
                    23. INDEMNIFICATION
                </h2>
                <p className='mb-8'>
                    You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1) use of the Services; (2) breach of these Legal Terms; (3) any breach of your representations and warranties set forth in these Legal Terms; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Services with whom you connected via the Services. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defence and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defence of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.
                </p>

                <h2 id='user-data' className='text-xl tracking-widest font-normal m-2'>
                    24. USER DATA
                </h2>
                <p>
                    We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.
                </p>

                <h2 id='electronic-communications-transactions-and-signatures' className='text-xl tracking-widest font-normal m-2'>
                    25. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
                </h2>
                <p>
                    Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.
                </p>

                <h2 id='miscellaneous' className='text-xl tracking-widest font-normal m-2'>
                    26. MISCELLANEOUS
                </h2>
                <p>
                    These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services. You agree that these Legal Terms will not be construed against us by virtue of having drafted them. You hereby waive any and all defences you may have based on the electronic form of these Legal Terms and the lack of signing by the parties hereto to execute these Legal Terms.
                </p>

                <h2 id='contact-us' className='text-xl tracking-widest font-normal m-2'>
                    27. CONTACT US
                </h2>
                <p>
                    In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:
                </p>
                <p><b>
                    Maren Stenersen <br />
                    Schweigårds vei 30A <br />
                    BERGEN 5063 <br />
                    Norway <br />
                    Phone: +4793874223 <br />
                    scapebymd@gmail.com
                </b></p>
                <Separator orientation='horizontal' className='border-neutral-400 max-w-100 mt-5' />
                <h2 className='flex flex-col text-2xl font-normal gap-2 mt-5'>
                    S C /\ P E
                    <p className='text-sm content-end tracking-widest'>by md</p>
                </h2>
            </div>
            <Footer />
        </div>
    );
}

export default TermsOfService;
