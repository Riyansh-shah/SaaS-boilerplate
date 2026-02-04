import Section from "@/components/ui/Section";

export default function TermsPage() {
    return (
        <div style={{ paddingTop: "80px" }}>
            <Section variant="light" padding="md">
                <h1>Terms & <span className="gradient-text">Conditions</span></h1>
                <p>Last updated: February 03, 2026</p>
            </Section>

            <Section>
                <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                    <h3>1. General</h3>
                    <p>
                        By accessing and using this website, you agree to comply with and
                        be bound by the following terms and conditions. If you do not agree,
                        please do not use this website.
                    </p>

                    <h3 style={{ marginTop: "2rem" }}>2. Customization</h3>
                    <p>
                        As we provide customized products, please ensure that all details
                        provided (names, photos, colors) are accurate. We are not responsible
                        for errors in customization based on incorrect information provided
                        by the customer.
                    </p>

                    <h3 style={{ marginTop: "2rem" }}>3. Orders and Payments</h3>
                    <p>
                        Orders are confirmed only after successful payment. We reserve the
                        right to refuse or cancel any order for reasons including product
                        availability or pricing errors.
                    </p>

                    <h3 style={{ marginTop: "2rem" }}>4. Delivery</h3>
                    <p>
                        We aim to deliver products within the estimated timeframe. However,
                        delays due to shipping partners or unforeseen circumstances are
                        beyond our control.
                    </p>

                    <h3 style={{ marginTop: "2rem" }}>5. Intellectual Property</h3>
                    <p>
                        All content on this website, including designs, images, and text,
                        is the property of CC-Trial and protected by copyright laws.
                        Unauthorized use is strictly prohibited.
                    </p>

                    <h3 style={{ marginTop: "2rem" }}>6. Limitation of Liability</h3>
                    <p>
                        CC-Trial shall not be liable for any direct, indirect, incidental,
                        or consequential damages arising from the use or inability to use
                        our services or products.
                    </p>
                </div>
            </Section>
        </div>
    );
}
