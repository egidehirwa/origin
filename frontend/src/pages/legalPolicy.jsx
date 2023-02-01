import { useNavigate } from "react-router-dom";

const LegalPolicyPage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <section className="px-10 py-10 relative bg-gradient-to-r from-[#7b8b7f] to-[#7b8b7f]" id="style">
                <h6 className=" p-2 text-center font-primaryFont text-xxl text-darkgreen">Legal Policy</h6>
                <p className=" text-center font-secondaryFont text-base text-lightcream">
                    When utilizing our services, you are entrusting us with your personal information. We acknowledge the gravity of this responsibility and
                    make every effort to safeguard your information while also giving you control over it. This Privacy Policy is designed to provide you with
                    an understanding of the information we collect, the reasons behind it, and the ways in which you can manage, export, update, and delete your
                    information.
                </p>
            </section>

            <div className="container px-5 py-24 mx-auto">
                <div className="xl:w-1/1.2 lg:w-3/4 w-full mx-auto ">
                    <p className="p-2 font-secondaryFont text-base text-lightcream ">
                        <ol className=" whitespace-pre-line list-decimal list-inside text-center leading-8 	">
                            <p>
                                This Privacy Statement sets out how Origin processes your personal data which you provide to us or which we obtain through our
                                website(s). This Privacy Statement was last amended on 4 January 2023. We may amend this Privacy Statement from time to time
                            </p>
                            <br></br>
                            <li>
                                Origin is the data controller when processing your personal data within the meaning of the General Data Protection Regulation
                                (GDPR). Origin is located at ixelles 200-A3, 1097 Brussels
                            </li>
                            <br></br>
                            <li>
                                Processing of your personal data When using our website, you may leave personal data with us. Which personal data these are
                                depends on the functionalities that you use via the website. Below, we explain for each functionality what personal data of
                                yours we process and what those personal data are used for. We don’t ask for sensitive personal data. Make sure you don’t
                                provide us with such data. We also don’t have the intention to process personal data of minors. We cannot verify whether a
                                website visitor is under the age of 16. If you think we have processed personal data of someone under 16, please let us know via
                                privacy@origin.com and we will delete said data. Demo or contact request You can directly request to be contacted by us or
                                request a demo via the website. Origin will then contact you to follow up on your request. Origin requires certain personal data
                                to be able to contact you. Origin will process the following data: First name and surname; Telephone number; Email address;
                            </li>
                            <br></br>
                            <li>
                                For what purposes do we process personal data? Next to above specified purposes, we process personal data to provide our
                                services and in order to comply with statutory obligations. More specifically, we process personal data for the following
                                purposes: to be able to call or email you to provide our services; to inform you on changes in our products or services; to
                                analyze your website use to improve the website and to coordinate our products and services better with your needs; to compile
                                user statistics; for internal training and quality purposes; for recruitment purposes; to promote security of our websites; and
                                to improve our services. We do not make decisions based solely on automated processing, including profiling.
                            </li>
                            <br></br>
                            <li>
                                Grounds for processing personal data In order to be allowed to process your personal data, there must be a legitimate basis for
                                doing so. In the case of Origin this legitimate basis will be – depending on the type of personal data concerned – performance
                                of an agreement, a legitimate interest that does not outweigh your privacy interests or consent. If you do not provide certain
                                personal data, you may not be allowed to fully benefit from all website functionality.
                            </li>
                            <br></br>
                            <li>
                                To whom does Origin issue personal data? In order to perform our services to you, we enlist the services of other parties to
                                process personal data on our behalf. If we instruct a third party to process personal data on our behalf and we have and retain
                                control over the processing, we will sign a written processing agreement with the third party concerned (the 'processor'). That
                                document will lay down agreements on such points as the objective, the duration and scope of the processing, the retention times
                                and the security measures for the personal data.
                            </li>
                            <br></br>
                            <li>
                                Your rights with regard to personal data You are entitled, under certain circumstances, to access any personal data processed by
                                us or to have it corrected or deleted or restrict its processing. Sometimes you can also lodge an objection or request a
                                transfer of your personal data. To submit a request to us in this respect, please contact us by sending an email to
                                privacy@origin.com. If in doubt about your identity, we are entitled to ask you to provide proof of your identity first.
                                Agreement We need to process personal data for the purposes of fulfilling certain contractual obligations. Legitimate interest
                                We have an interest in being in a position to carry out certain surveys and to send direct marketing messages or to contact you
                                by phone. On the grounds of these interests, we will process your personal data unless your privacy interests outweigh our
                                interests. Consent If none of the aforementioned bases for processing apply, then we will request your consent to process
                                certain personal data. You are free to withdraw your consent at any time.
                            </li>
                            <br></br>
                            <li>
                                How do we secure your personal data? We have taken appropriate technical and organizational measures to prevent loss or unlawful
                                processing of personal data. For example, your personal data can only be viewed by staff authorized to view it on the grounds of
                                their role.
                            </li>
                            <br></br>
                            <li>
                                How long do we keep your personal data? We will not keep your personal data for longer than is necessary for the purposes for
                                which we use it. We are required by law to keep some data for a certain period of time. Wherever possible, we will pseudonymised
                                or anonymize your personal data to the fullest extent possible.
                            </li>
                            <br></br>
                            <li>
                                Questions and complaints If you have any questions on the way in which we process your personal data, please let us know by
                                sending an email to privacy@origin.com. We will be happy to help. You are also free to submit a complaint to the Data Protection
                                Authority directly.
                            </li>
                        </ol>
                    </p>
                </div>
                <div className="flex items-center justify-center mt-10">
                    <button className="btn rounded-md px-4 py-4  bg-darkgreen text-lightcream hover:bg-creemish " onClick={() => navigate("/")}>
                        Turn Home Page{" "}
                    </button>
                </div>
            </div>
        </div>
    );
};
export default LegalPolicyPage;
