describe('Signup Page', () => {
	const user = cy;
	it('Should visit Signup Page if No Token Exist', () => {
		user.visit('/auth/signup');
	});
	it('Should visit the Errors if Data not Valid', () => {
		user.visit('/auth/signup');
		user.findAllByPlaceholderText(/email/i).type('clientc.com').get('.bg-red-600').should('have.text', 'email format is incorrect');
		user.findAllByPlaceholderText(/email/i).clear();
		user.findAllByPlaceholderText(/email/i).get('.bg-red-600').should('have.text', 'email is required');
		user.visit('/auth/signup');
		user.get('[name="password"]').type('c').get('.bg-red-600').should('have.text', 'password should be greater than 4');
	});
	it('Should Submit the Form', () => {
		user.visit('/auth/signup');
		user.findAllByPlaceholderText(/email/i).type('owner@ww.com');
		user.findAllByPlaceholderText(/password/i).type('cccc');
		user.get('select.input').select('Client');
		user.get('.px-10 > .mt-5').click();
		user.wait(2000);

		user.get('.px-10 > .mt-5').click();
	});
});
