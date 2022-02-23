import { Fragment } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from '../components/comments/Comments';

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Max', text: 'Learning React is fun!'},
    {id: 'q2', author: 'Maximus', text: 'Learning React is great!'},
];

const QuoteDetail = () => {
    const params = useParams();
    const match = useRouteMatch();

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if(!quote){
        return <h1>No quote found</h1>
    }

    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author} />            
            <Route path={`/quotes/${params.quoteId}`} exact> {/* you can use path={`{match.path}} only */}
                <div className="centered">
                    <Link className="btn--flat"  to={`${match.url}/comments`}> {/* match.url cuz it's a Link? */}
                        Load Comments
                    </Link>
                </div>
            </Route>
            
            <Route path={`${match.path}/comments`}>
                <Comments/>
            </Route>
        </Fragment>
    ); 
};

export default QuoteDetail;