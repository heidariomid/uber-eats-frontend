describe('Login Page', () => {
	const user = cy;
	it('Should See Login Page if No Token Exist', () => {
		user.visit('/');
	});
	it('Should See the Errors if Data not Valid', () => {
		user.visit('/');
		user.findAllByPlaceholderText(/email/i).type('clientc.com').get('.bg-red-600').should('have.text', 'email format is incorrect');
		user.findAllByPlaceholderText(/email/i).clear();
		user.findAllByPlaceholderText(/email/i).get('.bg-red-600').should('have.text', 'email is required');
		user.visit('/');
		user.get('[name="password"]').type('c').get('.bg-red-600').should('have.text', 'password should be greater than 4');
	});
	it('Should Submit the Form', () => {
		user.visit('/');
		user.findAllByPlaceholderText(/email/i).type('client@c.com');
		user.findAllByPlaceholderText(/password/i).type('cccc');
		user.get('.px-10 > .mt-5').click();
		user.window().its('localStorage').invoke('getItem', 'token').should('be.a', 'string');
	});
});
