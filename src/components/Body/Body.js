import QuoteCard from '../QuoteCard/QuoteCard.js';
import './Body.css';
import QuotesArr from '../../quotes.json';

const Body = () => {
    return (
        <section className='body'>
            {
                QuotesArr.map((quoteObj) => {
                    return <QuoteCard quoteObj={quoteObj}/>;
                })
            }
        </section>
    )
}

export default Body;