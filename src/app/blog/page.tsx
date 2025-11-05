export default async function BlogPage() {
  const id = "123";

  await new Promise((resolve) =>
    setTimeout(() => {
      resolve(true);
    }, 2000),
  );
  return <h1>Blog Page id={id}</h1>;
}
