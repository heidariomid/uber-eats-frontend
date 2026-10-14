import type {Metadata} from 'next';
import App from '../App';
import Providers from './providers';
import './globals.css';

export const metadata: Metadata = {
	title: 'Uber Eats',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang='en'>
			<body>
				<Providers>
					<App>{children}</App>
				</Providers>
			</body>
		</html>
	);
}
