import {faArrowCircleLeft, faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Pagination = ({data, currentPage, setCurrentPage}) => {
	const {totalPages} = data?.getRestaurants;
	const ButtonHandler = ({setCurrentPage, page}) => {
		if (totalPages === currentPage) {
			return (
				<>
					<button className={`${currentPage === page && 'px-5 '}`} onClick={() => setCurrentPage(page)}>
						{page}
					</button>
				</>
			);
		} else if (totalPages !== currentPage && currentPage !== 1) {
			return (
				<>
					<button className={`${currentPage === page && 'px-5'}`} onClick={() => setCurrentPage(page)}>
						{page}
					</button>
				</>
			);
		} else if (currentPage === 1) {
			return (
				<>
					<button className={`${currentPage === page && 'px-5'}`} onClick={() => setCurrentPage(page)}>
						{page}
					</button>
				</>
			);
		}
		return (
			<span className='mx-5'>
				{currentPage} of {totalPages}
			</span>
		);
	};
	const pages: any = [];
	for (let i = 1; i <= totalPages; i++) {
		pages.push(i);
	}
	return (
		<div className='flex flex-row justify-center items-center my-14 '>
			{/* {totalPages !== currentPage && (
				<>
					<button className=' px-5 mx-1' onClick={() => setCurrentPage((currentPage) => currentPage )}>
						<FontAwesomeIcon className='text-2xl text-green-600 px-1' icon={faArrowCircleLeft} />
					</button>
					<span className='mx-5'>
						{currentPage} of {totalPages}
					</span>
				</>
			)}

			{(currentPage !== 1 || totalPages === currentPage) && (
				<>
					<button className=' px-5 mx-1' onClick={() => setCurrentPage((currentPage) => currentPage - 1)}>
						<FontAwesomeIcon className='text-2xl text-green-600 px-1' icon={faArrowCircleRight} />
					</button>
				</>
			)} */}

			{pages.map((page, i) => {
				return (
					<div key={i} className={` hover:bg-green-400 z-0 bg-gray-400 flex mx-2 px-4 rounded-full text-center items-center justify-center  text-white`}>
						<ButtonHandler key={i} page={page} setCurrentPage={setCurrentPage} />
					</div>
				);
			})}
		</div>
	);
};

export default Pagination;
