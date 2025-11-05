export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <div className="bg-gray-500 p-4 mt-5">
        <p className="text-white">Feature Products</p>
      </div>
    </div>
  );
}
