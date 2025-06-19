import { Heart, Star, Minus, Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  description?: string;
  price: number;
  category?: string;
  featured?: boolean;
  rating?: number;
  unit?: string;
}

export default function ProductCard({
  name,
  image,
  price,
  rating = 0,
  unit = "1 Unit",
}: ProductCardProps) {
  return (
    <div className="relative space-y-2 rounded-xl border p-4 shadow-md">
      <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500">
        <Heart size={20} />
      </button>

      <figure>
        <Link href="/">
          <Image
            src={image}
            alt={`Image of ${name}`}
            width={200}
            height={200}
            className="mx-auto"
          />
        </Link>
      </figure>

      <h3 className="text-lg font-semibold">{name}</h3>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>{unit}</span>
        <span className="flex items-center gap-1 text-yellow-500">
          <Star size={16} /> {rating.toFixed(1)}
        </span>
      </div>

      <span className="text-lg font-bold text-green-600">
        ${price.toFixed(2)}
      </span>

      <div className="mt-2 flex items-center justify-between">
        <div className="flex items-center gap-1 rounded border px-2">
          <button className="text-red-500">
            <Minus size={16} />
          </button>
          <input
            type="text"
            value="1"
            className="w-8 border-0 text-center focus:outline-none"
            readOnly
          />
          <button className="text-green-500">
            <Plus size={16} />
          </button>
        </div>

        <Link
          href="/cart"
          className="text-primary flex items-center gap-1 hover:underline"
        >
          Add to Cart <ShoppingCart size={18} />
        </Link>
      </div>
    </div>
  );
}
