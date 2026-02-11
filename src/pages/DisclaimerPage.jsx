import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import WhatsApp from '../components/WhatsApp'

export default function DisclaimerPage() {
    return (
        <div className="min-h-screen text-gray-800 flex flex-col">
            <Nav />
            <main className="flex-grow w-full bg-[var(--cream)]">
                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-6">
                        <h1 className="text-4xl md:text-5xl font-serif text-[var(--coffee)] mb-8">Disclaimer</h1>

                        <div className="prose prose-lg max-w-none text-[rgba(0,0,0,0.8)]">
                            <h2 className="text-2xl font-semibold text-[var(--coffee)] mt-8 mb-4">Legal Disclaimer</h2>
                            <p className="mb-4">
                                The information provided on this website is for general informational purposes only and does not constitute legal advice. The contents of this website should not be construed as legal advice or as establishing an attorney-client relationship between you and Lawthentic.
                            </p>

                            <h2 className="text-2xl font-semibold text-[var(--coffee)] mt-8 mb-4">No Attorney-Client Relationship</h2>
                            <p className="mb-4">
                                Your use of this website does not create an attorney-client relationship. An attorney-client relationship is formed only when there is an express agreement between you and Lawthentic to provide legal services. Until such agreement is formally established in writing, we are under no obligation to provide you with legal advice or services.
                            </p>

                            <h2 className="text-2xl font-semibold text-[var(--coffee)] mt-8 mb-4">Accuracy of Information</h2>
                            <p className="mb-4">
                                While we strive to keep the information on this website accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information contained on this website.
                            </p>

                            <h2 className="text-2xl font-semibold text-[var(--coffee)] mt-8 mb-4">Limitation of Liability</h2>
                            <p className="mb-4">
                                In no event shall Lawthentic be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of this website or the information contained herein, even if advised of the possibility of such damages.
                            </p>

                            <h2 className="text-2xl font-semibold text-[var(--coffee)] mt-8 mb-4">Jurisdictional Limitations</h2>
                            <p className="mb-4">
                                Lawthentic is licensed to practice law in India. The information on this website pertains to Indian law and should not be construed as legal advice regarding any jurisdiction outside of India. Consult with a licensed attorney in your respective jurisdiction for legal advice applicable to your situation.
                            </p>

                            <h2 className="text-2xl font-semibold text-[var(--coffee)] mt-8 mb-4">Third-Party Links</h2>
                            <p className="mb-4">
                                This website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of these external websites. Your use of third-party websites is at your own risk and subject to their terms and conditions.
                            </p>

                            <h2 className="text-2xl font-semibold text-[var(--coffee)] mt-8 mb-4">Changes to Disclaimer</h2>
                            <p className="mb-4">
                                Lawthentic reserves the right to modify this disclaimer at any time without notice. Your continued use of the website following any such modifications constitutes your acceptance of the updated disclaimer.
                            </p>

                            <h2 className="text-2xl font-semibold text-[var(--coffee)] mt-8 mb-4">Contact Us</h2>
                            <p>
                                If you have any questions regarding this disclaimer, please contact us at:
                                <br />

                                Email: <a className="underline" href="mailto:lawthentic07@gmail.com">lawthentic07@gmail.com</a>
                                <br />
                                Phone: +91 83691 65375
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsApp />
        </div>
    )
}
