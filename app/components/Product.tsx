import Image from "next/image";
import formatPrice from "@/util/PriceFormat";
import { ProductType } from "@/types/ProductType";

function Product({ image, name, price }: ProductType) {
  return (
    <div>
      <Image src={image} alt={name} width={400} height={400} />
      <h1>{name}</h1>
      <h2>{price !== null ? formatPrice(price) : "N/A"}</h2>
    </div>
  );
}

export default Product;
