import { toRupiah } from "@/lib/format";
import Image from "next/image";
import { FC } from "react";

interface ProductsListProps {
  image: string;
  price: number;
  name: string;
  slug: string;
}

const ProductsList: FC<ProductsListProps> = ({ image, price, name, slug }) => {
  return (
    <div>
      <div>
        <Image
          src={image}
          alt={name}
          width={350}
          height={350}
          className="h-auto w-auto"
        />
        <div className="text-right">
          <p className="font-semibold text-xl">{name}</p>
          <p className="font-medium">{toRupiah(price)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
