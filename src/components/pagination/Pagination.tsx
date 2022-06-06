import {faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Pagination = ({totalPages, currentPage, setCurrentPage}) => {
	const ButtonHandler = ({setCurrentPage, page}) => {
		if (totalPages === currentPage) {
			return (
				<button onClick={() => setCurrentPage(page)}>
					<div className={`${currentPage === page && 'bg-black px-6 '}  hover:bg-black  transition-all duration-500 bg-gray-400 flex mx-2 px-2 rounded-full  text-center items-center justify-center  text-white`}>{page}</div>
				</button>
			);
		} else if (totalPages !== currentPage && currentPage !== 1) {
			return (
				<>
					<button onClick={() => setCurrentPage(page)}>
						<div className={`${currentPage === page && 'bg-black px-6 '}   hover:bg-black  transition-all duration-500 bg-gray-400 flex mx-2 px-2 rounded-full  text-center items-center justify-center  text-white`}>{page}</div>
					</button>
				</>
			);
		} else if (currentPage === 1) {
			return (
				<>
					<button onClick={() => setCurrentPage(page)}>
						<div className={`${currentPage === page && 'bg-black px-6 '}  hover:px6 hover:bg-black  transition-all duration-500 bg-gray-400 flex mx-2 rounded-full px-2  text-center items-center justify-center  text-white`}>{page}</div>
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
		<div className='text-center justify-center'>
			<div className='flex flex-row justify-center items-center my-14 '>
				{currentPage !== 1 && (
					<button onClick={() => setCurrentPage(1)} className='relative inline-flex items-center px-4  text-sm font-medium rounded-l-full text-gray-400  hover:text-black'>
						<FontAwesomeIcon icon={faAnglesLeft} />
					</button>
				)}
				{currentPage !== 1 && (
					<button onClick={() => setCurrentPage(currentPage - 1)} className=' relative inline-flex items-center px-4  text-sm font-medium rounded-r-full text-gray-400  hover:text-black'>
						<FontAwesomeIcon icon={faAngleLeft} />
					</button>
				)}
				{pages.map((page: number) => {
					return <ButtonHandler key={page} page={page} setCurrentPage={setCurrentPage} />;
				})}
				{currentPage !== totalPages && (
					<button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)} className=' relative inline-flex items-center px-4  text-sm font-medium rounded-r-full text-gray-400  hover:text-black'>
						<FontAwesomeIcon icon={faAngleRight} />
					</button>
				)}
				{currentPage !== totalPages && (
					<button onClick={() => setCurrentPage(totalPages)} className=' relative inline-flex items-center px-4  text-sm font-medium rounded-r-full text-gray-400  hover:text-black'>
						<FontAwesomeIcon icon={faAnglesRight} />
					</button>
				)}
			</div>
		</div>
	);
};

export default Pagination;
