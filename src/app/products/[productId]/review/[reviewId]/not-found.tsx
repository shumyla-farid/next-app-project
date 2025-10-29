"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  console.log(usePathname().split("/"));

  const productId = usePathname().split("/")[2];
  const reviewId = usePathname().split("/")[4];
  return (
    <h1>
      404 - Page Not Found for product id: {productId} of review id: {reviewId}
    </h1>
  );
}
