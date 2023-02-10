import './ComponentInHome.css';
import cardLogo from '../../../Asset/bookSeat/seat-logo.png'

function BookSeatComponent() {

    let bookings = [
        {
            pricing: '5000',
            ticketType: 'Basic Ticket'
        },
        {
            pricing: '10,000',
            ticketType: 'Basic Ticket'
        },
        {
            pricing: '15,000',
            ticketType: 'Basic Ticket'
        }
    ];

    return (
        <div className='book-seat-component py-5' id='BookSeatComponent'>
            <div className='container my-5'>
                <h1 className='book-seat-text fs-1 py-5 ms-2'>BOOK A SEAT</h1>
                <div className='row row-cols-1 row-cols-lg-3 row-cols-md-2 g-2 g-lg-3 justify-content-center'>
                    {
                        bookings.map((product) => {
                            return (
                                <div className="col" key={product.pricing}>
                                    <div className="p-3  d-grid gap-4 book-seat-card rounded bg-light">
                                        <div>
                                            <img src={cardLogo} alt='' className='float-end' />
                                        </div>
                                        <div className=''>
                                            <p className='fs-1 cash-price py-2'>₦{product.pricing} </p>
                                        </div>
                                        <div className='d-flex gap-5'>
                                            <p className='mt-3 fs-4 basic-ticket'>{product.ticketType} </p>
                                            <p className='fs-4 border ticket rounded px-3 py-2'>Book ticket</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default BookSeatComponent;