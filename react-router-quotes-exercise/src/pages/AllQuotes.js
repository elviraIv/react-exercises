import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Elvira", text: "Be brave!" },
  { id: "q2", author: "Elvira2", text: "Be happy!" },
  { id: "q3", author: "Elvira3", text: "Be curious!" },
];

export const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};
