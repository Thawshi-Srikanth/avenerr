export default function CookiePolicy() {
  return (
    <div className="space-y-6 text-foreground">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-primary">
          Cookie Policy
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold tracking-tight">1. Use of Cookies</h3>
        <p className="text-muted-foreground leading-relaxed">
          We may use cookies, web beacons, tracking pixels, and other tracking
          technologies when you visit our website, including any other media
          form, media channel, mobile website, or mobile application related or
          connected thereto (collectively, the "Site") to help customize the
          Site and improve your experience.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold tracking-tight">
          2. Types of Cookies
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          The following types of cookies may be used when you visit the Site:
        </p>

        <div className="ml-4 space-y-4 border-l-2 border-primary/20 pl-4 mt-4">
          <div>
            <h4 className="font-bold text-foreground">Necessary Cookies</h4>
            <p className="text-muted-foreground mt-1 leading-relaxed">
              Necessary cookies allow us to offer you the best possible
              experience when accessing and navigating through our website and
              using its features. For example, these cookies let us recognize
              that you have created an account and have logged into that account
              to access the content.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-foreground">Analytics Cookies</h4>
            <p className="text-muted-foreground mt-1 leading-relaxed">
              These cookies monitor how users use the website during their visit
              and how they interact with the content. We use this information to
              optimize the experience and content for all visitors.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold tracking-tight">
          3. Control of Cookies
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          Most browsers are set to accept cookies by default. However, you can
          remove or reject cookies in your browser's settings. Please be aware
          that such action could affect the availability and functionality of
          the Site.
        </p>
      </div>
    </div>
  );
}
