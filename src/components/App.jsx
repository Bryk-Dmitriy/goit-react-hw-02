import './App.css'
import { Product } from './Product';
import { Mailbox } from './Product';
import { BookList } from './Product';
import { favouriteBooks } from './Collections';
import { Card } from './Product';
import { Alert } from "./Alert";
import { AlertVanilla } from './Alert';
import { UserMenu } from './Alert';

export default function App() {
  return (
    <div>
      <h1>Best selling</h1>

     <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <Mailbox
        name="Mango"
        unreadMessages={2}
      />
      <h1>Books of the week</h1>
      <BookList books={favouriteBooks} />
      <Card cardText="Lorem">
	      <h1>Card title</h1>
        <p>Text between opening and closing tag</p>
        <p></p>
      </Card>
      <>
      <Alert variant="info" outlined>
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success" elevated>
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert>
      <AlertVanilla>Lorem</AlertVanilla>
      <UserMenu name='Mango'></UserMenu>
    </>
    </div>
  );
}
