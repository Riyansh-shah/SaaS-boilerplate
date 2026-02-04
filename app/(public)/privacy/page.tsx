import Section from "@/components/ui/Section";

export default function PrivacyPage() {
    return (
        <div style={{ paddingTop: "80px" }}>
            <Section variant="light" padding="md">
                <h1>Privacy <span className="gradient-text">Policy</span></h1>
                <p>Last updated: February 03, 2026</p>
            </Section>

            <Section>
                <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                    <h3>1. Introduction</h3>
                    <p>
                        At CC-Trial, we respect your privacy and are committed to protecting
                        the personal data you share with us. This Privacy Policy describes
                        how we collect, use, and process your personal information.
                    </p>

                    <h3 style={{ marginTop: "2rem" }}>2. Data We Collect</h3>
                    <p>
                        When you visit our website, place an order, or contact us, we may
                        collect:
                        <ul>
                            <li>Name and contact information (email, phone number, address)</li>
                            <li>Order details and customization requirements</li>
                            <li>Payment information (processed securely through third-party providers)</li>
                            <li>Device and usage information through cookies</li>
                        </ul>
                    </p>

                    <h3 style={{ marginTop: "2rem" }}>3. How We Use Your Data</h3>
                    <p>
                        We use your information to:
                        <ul>
                            <li>Process and fulfill your orders</li>
                            <li>Communicate with you regarding your inquiries and orders</li>
                            <li>Send you newsletters and promotional materials (with your consent)</li>
                            <li>Improve our products and website experience</li>
                        </ul>
                    </p>

                    <h3 style={{ marginTop: "2rem" }}>4. Security</h3>
                    <p>
                        We implement appropriate security measures to protect your personal
                        information from unauthorized access and disclosure. However, no
                        method of transmission over the internet is 100% secure.
                    </p>

                    <h3 style={{ marginTop: "2rem" }}>5. Cookies</h3>
                    <p>
                        We use cookies to enhance your experience. You can choose to accept
                        or decline cookies through our cookie consent banner or your
                        browser settings.
                    </p>

                    <h3 style={{ marginTop: "2rem" }}>6. Contact Us</h3>
                    <p>
                        If you have any questions about this Privacy Policy, please contact
                        us at abc@email.com.
                    </p>
                </div>
            </Section>
        </div>
    );
}
