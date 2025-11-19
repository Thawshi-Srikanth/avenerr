export default function StatsSection() {
  return (
    <section>
      <div className="bg-muted/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div>
            <h2 className="text-4xl font-semibold lg:text-5xl">
              Avenierr in Numbers
            </h2>
            <p className="text-muted-foreground mt-4 text-balance text-lg">
              Our commitment to quality, reliability, and global partnerships
              continues to strengthen Sri Lanka’s access to trusted
              pharmaceutical, orthopaedic, and surgical products.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 md:mt-16 md:grid-cols-4">
            <div>
              <div className="text-foreground text-4xl font-bold">10+</div>
              <p className="text-muted-foreground">International Partners</p>
            </div>
            <div>
              <div className="text-foreground text-4xl font-bold">1.2k+</div>
              <p className="text-muted-foreground">Product SKUs</p>
            </div>
            <div>
              <div className="text-foreground text-4xl font-bold">98%</div>
              <p className="text-muted-foreground">On-Time Delivery Rate</p>
            </div>
            <div>
              <div className="text-foreground text-4xl font-bold">1k+</div>
              <p className="text-muted-foreground">Hospitals Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
