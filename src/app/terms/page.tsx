import { Container } from '@/components/ui/Container';

export const metadata = {
  title: 'Terms of Service | Josephine\'s Soul Food',
  description: 'Terms of Service for Josephine\'s Soul Food website and services.',
};

export default function TermsOfServicePage() {
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
              Terms of Service
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
                Agreement to Terms
              </h2>
              <p>
                By accessing or using the Josephine&apos;s Soul Food website and services, you agree to
                be bound by these Terms of Service. If you do not agree to these terms, please do
                not use our website or services.
              </p>

              <h2 className="font-display text-xl font-bold text-[var(--color-charcoal)]">
                Use of Our Website
              </h2>
              <p>You agree to use our website only for lawful purposes and in accordance with these Terms. You agree not to:</p>
              <ul>
                <li>Use the website in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to any part of the website or its systems</li>
                <li>Use the website to transmit harmful code or interfere with its operation</li>
                <li>Reproduce, duplicate, copy, sell, or exploit any portion of the website without our express permission</li>
                <li>Use automated systems or software to extract data from the website</li>
              </ul>

              <h2 className="font-display text-xl font-bold text-[var(--color-charcoal)]">
                Online Orders
              </h2>
              <p>When placing orders through our website:</p>
              <ul>
                <li>
                  <strong>Accuracy:</strong> You are responsible for providing accurate order and
                  delivery information. We are not responsible for orders that cannot be fulfilled
                  due to incorrect information.
                </li>
                <li>
                  <strong>Pricing:</strong> All prices are listed in US dollars and are subject to
                  change without notice. Prices do not include applicable taxes or delivery fees,
                  which will be calculated at checkout.
                </li>
                <li>
                  <strong>Availability:</strong> Menu items are subject to availability. We reserve
                  the right to limit quantities or refuse orders at our discretion.
                </li>
                <li>
                  <strong>Order Confirmation:</strong> An order is not confirmed until you receive
                  a confirmation email or notification from us.
                </li>
              </ul>

              <h2 className="font-display text-xl font-bold text-[var(--color-charcoal)]">
                Payment Terms
              </h2>
              <p>
                Payment is required at the time of order. We accept major credit cards and other
                payment methods as indicated on our website. All payment information is processed
                securely through our third-party payment processor.
              </p>
              <p>
                By providing payment information, you represent that you are authorized to use the
                payment method and authorize us to charge the full amount of your order.
              </p>

              <h2 className="font-display text-xl font-bold text-[var(--color-charcoal)]">
                Delivery and Pickup
              </h2>
              <ul>
                <li>
                  <strong>Delivery:</strong> Delivery is available within our designated service
                  areas. Delivery times are estimates and may vary based on order volume, weather,
                  and other factors.
                </li>
                <li>
                  <strong>Pickup:</strong> Orders for pickup must be collected at our restaurant
                  location within a reasonable time of the scheduled pickup time.
                </li>
                <li>
                  <strong>Acceptance:</strong> Someone must be available to accept delivery orders.
                  We are not responsible for orders left unattended or orders that cannot be delivered
                  due to inaccessibility.
                </li>
              </ul>

              <h2 className="font-display text-xl font-bold text-[var(--color-charcoal)]">
                Refunds and Cancellations
              </h2>
              <p>
                Once an order is submitted and confirmed, it may not be possible to cancel or modify
                it. If you have concerns about your order, please contact us immediately at
                (419) 242-6666.
              </p>
              <p>
                Refunds may be issued at our discretion for quality issues or order errors. Please
                report any issues within 24 hours of receiving your order.
              </p>

              <h2 className="font-display text-xl font-bold text-[var(--color-charcoal)]">
                Catering Services
              </h2>
              <p>
                Catering orders are subject to additional terms and conditions, including deposit
                requirements, minimum order amounts, and cancellation policies. These will be
                provided when you request a catering quote.
              </p>

              <h2 className="font-display text-xl font-bold text-[var(--color-charcoal)]">
                Intellectual Property
              </h2>
              <p>
                All content on this website, including text, graphics, logos, images, and software,
                is the property of Josephine&apos;s Soul Food or its content suppliers and is protected
                by copyright and other intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, or create derivative works from any
                content without our prior written permission.
              </p>

              <h2 className="font-display text-xl font-bold text-[var(--color-charcoal)]">
                Disclaimer of Warranties
              </h2>
              <p>
                Our website and services are provided &quot;as is&quot; and &quot;as available&quot; without
                warranties of any kind, either express or implied. We do not warrant that the
                website will be uninterrupted, error-free, or free of viruses or other harmful
                components.
              </p>

              <h2 className="font-display text-xl font-bold text-[var(--color-charcoal)]">
                Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, Josephine&apos;s Soul Food shall not be liable
                for any indirect, incidental, special, consequential, or punitive damages arising
                out of your use of our website or services.
              </p>
              <p>
                Our total liability for any claim arising from these terms or your use of our
                services shall not exceed the amount you paid for the relevant order.
              </p>

              <h2 className="font-display text-xl font-bold text-[var(--color-charcoal)]">
                Indemnification
              </h2>
              <p>
                You agree to indemnify and hold harmless Josephine&apos;s Soul Food, its owners,
                employees, and agents from any claims, damages, losses, or expenses arising from
                your use of our website or violation of these terms.
              </p>

              <h2 className="font-display text-xl font-bold text-[var(--color-charcoal)]">
                Governing Law
              </h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the
                laws of the State of Ohio, without regard to its conflict of law provisions.
              </p>

              <h2 className="font-display text-xl font-bold text-[var(--color-charcoal)]">
                Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes will be
                effective immediately upon posting to the website. Your continued use of the
                website after any changes constitutes acceptance of the new terms.
              </p>

              <h2 className="font-display text-xl font-bold text-[var(--color-charcoal)]">
                Contact Us
              </h2>
              <p>
                If you have questions about these Terms of Service, please contact us at:
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
