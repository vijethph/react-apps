import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "completed") {
      navigate("/quotes");
    }
  }, [status, navigate]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default NewQuote;

// useHistory is a react-router hook which can be used to navigate pages programmatically, and change browser history. It can also be used to add query parameters
// it has 2 methods: push() - which pushes a new page on to a history of pages (where we can navigate back), and replace() - which replaces the current page, disabling navigating backwards with back button
