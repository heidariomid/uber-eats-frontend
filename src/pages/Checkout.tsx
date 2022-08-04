import PaymentForms from '../components/Payment/PaymentForms';
import OrderSummary from '../components/shopping-cart/OrderSummary';

const Checkout = () => {
	return (
		<>
			<div>
				<div className='hidden lg:block fixed top-100 left-0 w-1/2 h-full bg-white' aria-hidden='true' />
				<div className='hidden lg:block fixed top-100 right-0 w-1/2 h-full bg-gray-100' aria-hidden='true' />

				<div className='relative grid grid-cols-1 gap-x-16 max-w-7xl mx-auto lg:px-8 lg:grid-cols-2 xl:gap-x-48'>
					<h1 className='sr-only'>Order information</h1>

					<OrderSummary />
					<PaymentForms />
				</div>
			</div>
		</>
	);
};

export default Checkout;
