import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { partners } from "@/lib/partners-data";

interface Product {
  title: string;
  link?: string;
  image?: string;
  supplier?: string;
}

interface ProductGridProps {
  products: Product[] | undefined;
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
      {products?.map((product, index) => {
        // Resolve link: Supplier Website > Product Link > Fallback
        const supplierData = product.supplier
          ? partners.find((p) => p.name === product.supplier)
          : null;
        const targetLink = supplierData?.website || product.link || "#";
        const isExternal = !!supplierData?.website;

        return (
          <div
            key={index}
            className="group flex flex-col bg-background border hover:border-primary/50 transition-all duration-300"
          >
            {/* Image Container */}
            <div className="relative aspect-square w-full overflow-hidden bg-muted border-b">
              <Image
                src={product.image || "/images/product-placeholder.png"}
                alt={product.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="font-bold text-lg leading-tight mb-2 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                {product.supplier && (
                  <p className="text-sm text-muted-foreground mb-2">
                    by {product.supplier}
                  </p>
                )}
              </div>

              {/* <div className="mt-4 pt-4 border-t flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  View Product
                </span>
                <div className="h-8 w-8 flex items-center justify-center bg-muted group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div> */}

              {/* Full Card Link overlay */}
              {/* <Link
                href={targetLink}
                className="absolute inset-0 z-10"
                aria-label={`View ${product.title}`}
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              /> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}
