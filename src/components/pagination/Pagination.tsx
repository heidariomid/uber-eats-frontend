import {faArrowCircleLeft, faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';

const Pagination = ({data, page, setPage}) => {
	return (
		<div className='flex flex-row justify-center items-center my-14 '>
			{data?.getRestaurants?.totalPages === page && (
				<span className='mx-5'>
					{page} of {data?.getRestaurants.totalPages}
				</span>
			)}
			{data?.getRestaurants?.totalPages !== page && (
				<button className=' px-5 mx-1' onClick={() => setPage((page) => page + 1)}>
					<FontAwesomeIcon className='text-2xl text-green-600 px-1' icon={faArrowCircleLeft} />
				</button>
			)}
			{data?.getRestaurants?.totalPages === page && (
				<button className=' px-5 mx-1' onClick={() => setPage((page) => page - 1)}>
					<FontAwesomeIcon className='text-2xl text-green-600 px-1' icon={faArrowCircleRight} />
				</button>
			)}
			{data?.getRestaurants?.totalPages !== page && (
				<span className='mx-5'>
					{page} of {data?.getRestaurants.totalPages}
				</span>
			)}
		</div>
	);
};

export default Pagination;
