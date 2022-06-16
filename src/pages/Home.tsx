import {Navigate} from 'react-router-dom';
import Banner from '../components/banner/Banner';
import Footer from '../components/footer/Footer';
import Loading from '../components/loading/Loading';
import {UserRole} from '../graphql/schemaTypes';
import useUser from '../hooks/useUser';
import Client from './client/Client';
import Owner from './owner/Owner';

const Home = () => {
	const {user, loading} = useUser();

	const homeHandler = () => {
		if (user) {
			if (user.role === UserRole.Client) {
				return <Client />;
			}
			if (user.role === UserRole.Owner) {
				return <Owner />;
			}
		}
	};
	return (
		<div>
			{!loading && user && (
				<div className='font-[Rubik]'>
					{!user?.verified && <Banner text={'please click on the link that we sent to your email'} color={'white'} bgcolor={'red'} />}
					{homeHandler()}
					<Footer />
				</div>
			)}
			{loading && <Loading />}
			{!loading && !user && <Navigate to={'/auth/login'} />}
		</div>
	);
};

export default Home;
