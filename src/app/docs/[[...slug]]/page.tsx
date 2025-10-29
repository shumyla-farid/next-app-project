export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  console.log(slug);
  return <h1> Docs Page f main slug </h1>;
}
