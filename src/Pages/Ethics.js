import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';


function Ethics() {
    return (
        <div>
            <Header />
            <section className="services section bd-container services__content" id="services">
                <h2 className="section-title">Medical Ethics</h2>
                <span className="section-sub">Effective May 1, 2021</span>
                <br />
                The greatest ethical imperative for the physician is the welfare of the patient.
                <ol>
                    <li>
                        The physician should approach patients with consideration, respecting
                        their personal dignity, right to intimacy and privacy.
                    </li>
                    <li>
                        The physician should perform all diagnostic, therapeutic and preventive
                        procedures with due exactitude and devoting the necessary time.
                    </li>
                    <li>
                        The physician has the duty to maintain confidentiality. Information obtained
                        in the course of physician's professional duties concerning the patient and
                        his background is to be kept confidential. The death of the patient does not
                        release the physician from the duty of maintaining confidentiality.
                    </li>
                    <li>
                        A physician shall be dedicated to providing competent medical care, with
                        compassion and respect for human dignity and rights.
                    </li>
                    <li>
                        A physician shall uphold the standards of professionalism, be honest in all
                        professional interactions, and strive to report physicians deficient in
                        character or competence, or engaging in fraud or deception, to appropriate entities.
                    </li>
                    <li>
                        A physician shall respect the law and also recognize a responsibility to seek
                        changes in those requirements which are contrary to the best interests of the patient.
                    </li>
                    <li>
                        A physician shall respect the rights of patients, colleagues, and other
                        health professionals, and shall safeguard patient confidences and privacy
                        within the constraints of the law.
                    </li>
                    <li>
                        A physician shall continue to study, apply, and advance scientific knowledge,
                        maintain a commitment to medical education, make relevant information available
                        to patients, colleagues, and the public, obtain consultation, and use the talents
                        of other health professionals when indicated.
                    </li>
                    <li>
                        A physician shall, in the provision of appropriate patient care, except in
                        emergencies, be free to choose whom to serve, with whom to associate, and
                        the environment in which to provide medical care.
                    </li>
                    <li>
                        A physician shall recognize a responsibility to participate in activities
                        contributing to the improvement of the community and the betterment of
                        public health.
                    </li>
                    <li>
                        A physician shall, while caring for a patient, regard responsibility to the patient as paramount.
                    </li>
                    <li>
                        A physician shall support access to medical care for all people.
                    </li>
                </ol>
                It is the duty of every physician to continually update and develop professional
                knowledge and skills as well as to share them with co-workers.
                <br />
                <br />
                <span className="section-sub">Medical Ethics (May 1, 2021)</span>
            </section>
            <Footer />
        </div>
    )
}

export default Ethics;
