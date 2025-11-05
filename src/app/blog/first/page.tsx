import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};

export default function FirstBlogPage() {
  return <h1>First Blog Page</h1>;
}
