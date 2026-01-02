export default function TermsOfService() {
  return (
    <div className="space-y-6 text-foreground">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-primary">
          Terms of Service
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold tracking-tight">
          1. Agreement to Terms
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          These Terms of Service constitute a legally binding agreement made
          between you, whether personally or on behalf of an entity ("you") and
          Avenierr Pharma (Pvt) Ltd ("we," "us" or "our"), concerning your
          access to and use of the website as well as any other media form,
          media channel, mobile website or mobile application related, linked,
          or otherwise connected thereto (collectively, the "Site").
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold tracking-tight">
          2. Intellectual Property Rights
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          Unless otherwise indicated, the Site is our proprietary property and
          all source code, databases, functionality, software, website designs,
          audio, video, text, photographs, and graphics on the Site
          (collectively, the "Content") and the trademarks, service marks, and
          logos contained therein (the "Marks") are owned or controlled by us or
          licensed to us, and are protected by copyright and trademark laws.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold tracking-tight">
          3. User Representations
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          By using the Site, you represent and warrant that: (1) all
          registration information you submit will be true, accurate, current,
          and complete; (2) you will maintain the accuracy of such information
          and promptly update such registration information as necessary.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold tracking-tight">
          4. Products and Services
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          The products displayed on the Site can be ordered and delivered only
          within Sri Lanka. All products are subject to availability, and we
          cannot guarantee that items will be in stock. We reserve the right to
          discontinue any products at any time for any reason.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold tracking-tight">5. Contact Us</h3>
        <p className="text-muted-foreground leading-relaxed">
          In order to resolve a complaint regarding the Site or to receive
          further information regarding use of the Site, please contact us at:{" "}
          <a
            href="mailto:info@avenierrpharma.com"
            className="text-primary hover:underline"
          >
            info@avenierrpharma.com
          </a>
        </p>
      </div>
    </div>
  );
}
