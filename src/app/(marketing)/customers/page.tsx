// import { Metadata } from "next";

// type Props = {
//   params: Promise<{
//     customerId: string;
//   }>;
// };

// export const generateMetaData = async ({
//   params,
// }: Props): Promise<Metadata> => {
//   const id = (await params).customerId;

//   return {
//     title: `Customer no. ${id}`,
//   };
// };

export default async function CustomersPage() {
  // const customerId = (await params).customerId;
  return <h1>Welcome CUSTOMERS PAGE </h1>;
}
