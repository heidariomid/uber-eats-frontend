describe('Signup Page', () => {
	const user = cy;
	it('Should See Signup Page if No Token Exist', () => {
		user.visit('/auth/signup');
	});
	it('Should See the Errors if Data not Valid', () => {
		user.visit('/auth/signup');
		user.findAllByPlaceholderText(/email/i).type('clientc.com').get('.bg-red-600').should('have.text', 'email format is incorrect');
		user.findAllByPlaceholderText(/email/i).clear();
		user.findAllByPlaceholderText(/email/i).get('.bg-red-600').should('have.text', 'email is required');
		user.visit('/auth/signup');
		user.get('[name="password"]').type('c').get('.bg-red-600').should('have.text', 'password should be greater than 4');
	});
	it('Should Submit the Form', () => {
		user.visit('/auth/signup');
		user.findAllByPlaceholderText(/email/i).type('owner@ccccc.com');
		user.findAllByPlaceholderText(/password/i).type('cccc');
		user.get('select.input').select('Owner');
		user.get('.px-10 > .mt-5').click();
	});
});
