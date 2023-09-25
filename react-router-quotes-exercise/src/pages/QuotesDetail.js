import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";
import Comments from '../components/comments/Comments'
export const QuotesDetail = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Quotes Detail Page</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments/>

      </Route>
    </Fragment>
  );
};
