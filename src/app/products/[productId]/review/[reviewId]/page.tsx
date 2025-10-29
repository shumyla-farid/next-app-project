import { notFound } from "next/navigation";

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  return reviewId === "123" ? (
    <h1>
      Review Page {reviewId} for Product {productId}
    </h1>
  ) : (
    notFound()
  );
}
