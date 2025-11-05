"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();

  return (
    <>
      <button onClick={() => router.push("/")}>Place Order</button>
    </>
  );
}
