import PropTypes from 'prop-types';

export function Product({ name, imgUrl, price }) {
  return (
    <div>
      <h2>{name}</h2>
	  <img src={imgUrl} alt={name} width="480" />
	  <p>Price: {price} credits</p>
    </div>
  );
};

export const Mailbox = ({ name, unreadMessages }) => {
  return (
    <div>
      <p>Hello {name}</p>
      <p>
        {unreadMessages > 0
          ? `You have ${unreadMessages} unread messages`
          : "No unread messages"}
      </p>
    </div>
  );
};

export const BookList = ({ books }) => {
  return (
	<ul>
	  {books.map((book) => {
		return <li key={book.id}>{book.name}</li>;
	  })}
	</ul>
  );
};

export const Card = ({cardText, children }) => {
  return (
    <div>
      {children}
      <p>{cardText}</p>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  price: PropTypes.number.isRequired,
}