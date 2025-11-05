import Link from "next/link";

type Props = {
  params: Promise<{
    productId: string;
  }>;
};

export default async function ProductsPage({ params }: Props) {
  const id = await params;

  return (
    <div>
      <Link href={"/"}>HOME</Link>
      <h1>Products Page</h1>
      <h2>Product List</h2>
      <ul>
        <li>
          <Link href={`/products/${1}`}>Product 1</Link>
        </li>
        <li>Product 2</li>
        <li>
          <Link href={`/products/${3}`} replace>
            Product 3
          </Link>
        </li>
      </ul>
    </div>
  );
}
