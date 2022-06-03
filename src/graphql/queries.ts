import {gql} from '@apollo/client';
// import {COMMENT_FRAGMENT, PHOTO_FEAGMENT} from './sharedQuery';

export const LOGGED_IN_USER = gql`
	query loggedInUser {
		loggedInUser {
			id
			email
			role
			verified
		}
	}
`;

export const RESTAURANTS = gql`
	query restaurants($data: RestaurantsInput!) {
		getRestaurants(data: $data) {
			ok
			message
			totalPages
			totalRestaurants
			restaurants {
				id
				name
				isPromoted
				address
				coverImg
			}
		}
	}
`;

export const CATEGORIES = gql`
	query categories {
		getCategories {
			message
			ok
			categories {
				id
				name
				slug
				restaurantCount
				iconImg
			}
		}
	}
`;

// export const SEE_FEED = gql`
// 	query {
// 		seeFeed {
// 			...PhotoFragment
// 			comments {
// 				...CommentFragment
// 			}

// 			user {
// 				avatar
// 				userName
// 				id
// 				photos {
// 					...PhotoFragment
// 					user {
// 						id
// 					}
// 				}
// 			}
// 		}
// 	}
// 	${PHOTO_FEAGMENT}
// 	${COMMENT_FRAGMENT}
// `;

export {};
