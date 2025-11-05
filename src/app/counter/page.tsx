import Counter from "./counter";

export const metadata = {
  title: "Counter",
};
export default function CounterMain() {
  return (
    <h1>
      This is counter main Page
      <Counter />
    </h1>
  );
}
