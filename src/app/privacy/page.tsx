import { Container } from '@/components/ui/Container';

export const metadata = {
  title: 'Privacy Policy | Josephine\'s Soul Food',
  description: 'Privacy Policy for Josephine\'s Soul Food - how we collect, use, and protect your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20 pb-32 md:pb-16 min-h-screen bg-[var(--color-warm-white)]">
      {/* Hero */}
      <section className="py-16 bg-[var(--color-cream)] texture-paper">
        <Container size="wide">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-[var(--color-gold)] font-semibold tracking-wider uppercase text-sm mb-4">
              Legal
            </span>
            <h1 className="font-display text-[var(--text-h1)] font-bold text-[var(--color-charcoal)] mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-[var(--color-charcoal-light)]">
              Last updated: January 2025
            </p>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16">
        <Container size="narrow">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[var(--shadow-soft)]">
            <div className="prose prose-lg max-w-none text-[var(--color-charcoal-light)]">

              <h2 className="font-display text-xl font-bold text-[var(--color-charcoal)] mt-0">
                Introduction
              </h2>
              <p>
                Josephine&apos;s Soul Food (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is
                committed to protecting your personal information. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you visit our website or
                use our services.
              </p>

              <h2 className="font-display text-xl font-bold text-[var(--color-charcoal)]">
                Information We Collect
              </h2>
              <p>We may collect personal information that you voluntarily provide when you:</p>
              <ul>
                <li>Place an order for food or merchandise</li>
                <li>Create an account on our website</li>
                <li>Sign up for our newsletter or promotions</li>
                <li>Contact us with inquiries or feedback</li>
                <li>Request catering services</li>
              </ul>
              <p>This information may include:</p>
              <ul>
                <li>Name and contact information (email, phone number, address)</li>
                <li>Payment information (processed securely through our payment provider)</li>
                <li>Order history and preferences</li>
                <li>Delivery addresses</li>
                <li>Communication preferences</li>
              </ul>

              <h2 className="font-display text-xl font-bold text-[var(--color-charcoal)]">
                Automatically Collected Information
              </h2>
              <p>
                When you visit our website, we may automatically collect certain information about
                your device and usage, including:
              </p>
              <ul>
                <li>IP address and browser type</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website addresses</li>
                <li>Device identifiers</li>
              </ul>

              <h2 className="font-display text-xl font-bold text-[var(--color-charcoal)]">
                How We Use Your Information
              </h2>
              <p>We use your information to:</p>
              <ul>
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your orders, inquiries, or requests</li>
                <li>Send promotional materials and updates (with your consent)</li>
                <li>Improve our website, products, and services</li>
                <li>Personalize your experience</li>
                <li>Prevent fraudulent transactions and protect our business</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="font-display text-xl font-bold text-[var(--color-charcoal)]">
                Cookies and Tracking Technologies
              </h2>
              <p>
                We use cookies and similar tracking technologies to enhance your browsing experience,
                analyze website traffic, and understand where our visitors come from. You can control
                cookies through your browser settings, though disabling them may affect some website
                functionality.
              </p>

              <h2 className="font-display text-xl font-bold text-[var(--color-charcoal)]">
                Sharing Your Information
              </h2>
              <p>We may share your information with:</p>
              <ul>
                <li>
                  <strong>Service providers:</strong> Third parties who assist us in operating our
                  website, processing payments, fulfilling orders, or providing other services
                </li>
                <li>
                  <strong>Delivery partners:</strong> To complete delivery orders
                </li>
                <li>
                  <strong>Legal requirements:</strong> When required by law or to protect our rights
                </li>
              </ul>
              <p>We do not sell your personal information to third parties.</p>

              <h2 className="font-display text-xl font-bold text-[var(--color-charcoal)]">
                Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures to protect your
                personal information against unauthorized access, alteration, disclosure, or
                destruction. However, no method of transmission over the internet is 100% secure,
                and we cannot guarantee absolute security.
              </p>

              <h2 className="font-display text-xl font-bold text-[var(--color-charcoal)]">
                Your Rights
              </h2>
              <p>Depending on your location, you may have the right to:</p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt out of marketing communications</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>

              <h2 className="font-display text-xl font-bold text-[var(--color-charcoal)]">
                Children&apos;s Privacy
              </h2>
              <p>
                Our website is not intended for children under 13 years of age. We do not knowingly
                collect personal information from children under 13. If you believe we have collected
                information from a child under 13, please contact us immediately.
              </p>

              <h2 className="font-display text-xl font-bold text-[var(--color-charcoal)]">
                Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any
                changes by posting the new Privacy Policy on this page and updating the &quot;Last
                updated&quot; date.
              </p>

              <h2 className="font-display text-xl font-bold text-[var(--color-charcoal)]">
                Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy or our privacy practices, please
                contact us at:
              </p>
              <address className="not-italic">
                <strong>Josephine&apos;s Soul Food</strong><br />
                902 Lagrange St<br />
                Toledo, OH 43604<br />
                Phone: <a href="tel:+14192426666" className="text-[var(--color-primary)] hover:underline">(419) 242-6666</a><br />
                Email: <a href="mailto:info@josephines.com" className="text-[var(--color-primary)] hover:underline">info@josephines.com</a>
              </address>

            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
