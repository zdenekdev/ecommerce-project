import Image from "next/image";
import formatPrice from "@/util/PriceFormat";

function Product({ image, name, price }) {
  return (
    <div>
      <Image src={image} alt={name} width={400} height={400} />
      <h1>{name}</h1>
      {formatPrice(price)}
    </div>
  );
}

export default Product;
