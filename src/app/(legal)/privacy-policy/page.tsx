export default function PrivacyPolicy() {
  return (
    <div className="space-y-6 text-foreground">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-primary">
          Privacy Policy
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold tracking-tight">1. Introduction</h3>
        <p className="text-muted-foreground leading-relaxed">
          Welcome to Avenierr Pharma (Pvt) Ltd ("we," "our," or "us"). We are
          committed to protecting your personal information and your right to
          privacy. If you have any questions or concerns about this privacy
          notice or our practices with regard to your personal information,
          please contact us.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold tracking-tight">
          2. Information We Collect
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          We collect personal information that you voluntarily provide to us
          when you express an interest in obtaining information about us or our
          products and services, when you participate in activities on the
          Website, or otherwise when you contact us.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold tracking-tight">
          3. How We Use Your Information
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          We use personal information collected via our Website for a variety of
          business purposes described below. We process your personal
          information for these purposes in reliance on our legitimate business
          interests, in order to enter into or perform a contract with you, with
          your consent, and/or for compliance with our legal obligations.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold tracking-tight">4. Cookies</h3>
        <p className="text-muted-foreground leading-relaxed">
          We use cookies to access or store information. Specific information
          about how we use such technologies and how you can refuse certain
          cookies is set out in our Cookie Policy.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold tracking-tight">5. Contact Us</h3>
        <p className="text-muted-foreground leading-relaxed">
          If you have questions or comments about this policy, you may email us
          at info@avenierrpharma.com or by post to:
        </p>
        <address className="not-italic text-muted-foreground pl-4 border-l-2 border-primary/20">
          <span className="font-semibold text-foreground">
            Avenierr Pharma (Pvt) Ltd
          </span>
          <br />
          14 Anderson Road,
          <br />
          Dehiwala-Mount Lavinia 10350,
          <br />
          Sri Lanka.
        </address>
      </div>
    </div>
  );
}
