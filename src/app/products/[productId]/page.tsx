export default async function ProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = await params;
  return <h1>Product Page {productId.productId}</h1>;
}
