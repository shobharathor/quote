
import './QuoteCard.css';

const QuoteCard = (props) => {

    const {quote,writer} = props.quoteObj;

    return (
        <div className='quote-card'>
            <h5>{quote}</h5>
            <p>{writer}</p>
        </div>
    )
}

export default QuoteCard;