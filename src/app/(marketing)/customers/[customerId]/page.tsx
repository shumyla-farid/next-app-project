import { Metadata } from "next";

type Props = {
  params: Promise<{
    customerId: string;
  }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).customerId;

  console.log("customer id", id);
  return {
    title: `Customer no. ${id}`,
  };
};

export default async function CustomersPage({ params }: Props) {
  const customerId = (await params).customerId;
  return <h1>Welcome CUSTOMERS PAGE for {customerId}</h1>;
}
