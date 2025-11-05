import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "abs",
    template: "%s | def",
  },
};

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
