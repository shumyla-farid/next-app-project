// "use client";

import Link from "next/link";
import { use } from "react";

// export default async function NewsArticle({
//   params,
//   searchParams,
// }: {
//   params: Promise<{ articlesId: string }>;
//   searchParams: Promise<{ lang?: "en" | "fr" }>;
// }) {
//   const { articlesId } = await params;
//   const { lang } = await searchParams;
//   return (
//     <>
//       <h1>News Articles by {articlesId}</h1>
//       <p>Reading in Language: {lang}</p>
//       <Link href={`/articles/${articlesId}?lang=en`}>English</Link>
//       <Link href={`/articles/${articlesId}?lang=fr`}>French</Link>
//     </>
//   );
// }

export default function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articlesId: string }>;
  searchParams: Promise<{ lang?: "en" | "fr" }>;
}) {
  const { articlesId } = use(params);
  const { lang } = use(searchParams);
  return (
    <>
      <h1>News Articles by {articlesId}</h1>
      <p>Reading in Language: {lang}</p>
      <Link href={`/articles/${articlesId}?lang=en`}>English</Link>
      <Link href={`/articles/${articlesId}?lang=fr`}>French</Link>
    </>
  );
}
