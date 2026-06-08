import Image from "next/image";
import type { VTProduct } from "@/lib/data";

interface VTProductCardProps {
  product: VTProduct;
}

export default function VTProductCard({ product }: VTProductCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-gold/40">
      <div className="relative aspect-square w-full overflow-hidden bg-section">
        <Image
          src={`/images/vt-${product.slug}.jpg`}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 20vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-body text-sm font-semibold leading-snug text-offwhite">
          {product.name}
        </h3>
        <p className="mt-auto font-display text-lg font-bold text-gold">
          {product.price}
        </p>
      </div>
    </div>
  );
}
