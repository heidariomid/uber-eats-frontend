import {Navigate} from 'react-router-dom';
import Banner from '../components/banner/Banner';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Loading from '../components/loading/Loading';
import {UserRole} from '../graphql/schemaTypes';
import useUser from '../hooks/useUser';
import Restaurants from './client/Restaurants';
import Owner from './owner/Owner';

const Home = () => {
	const {user, loading} = useUser();
	const homeHandler = () => {
		if (user) {
			if (user.role === UserRole.Client) {
				return <Restaurants />;
			}
			if (user.role === UserRole.Owner) {
				return <Owner />;
			}
		}
	};
	return (
		<>
			{!loading && user && (
				<div className='font-[Rubik]'>
					{!user?.verified && <Banner text={'please click on the link that we sent to your email'} color={'white'} bgcolor={'red'} />}
					<Header />
					{homeHandler()}
					<Footer />
				</div>
			)}
			{loading && <Loading />}
			{!loading && !user && <Navigate to={'/auth/login'} />}
		</>
	);
};

export default Home;
