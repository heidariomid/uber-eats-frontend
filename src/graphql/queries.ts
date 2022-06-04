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
				category {
					name
				}
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

export const RESTAURANT = gql`
	query Restaurant($data: RestaurantInputType!) {
		getRestaurant(data: $data) {
			ok
			message
			restaurant {
				name
				isPromoted
				coverImg
				category {
					name
				}
				orders {
					id
				}
				menu {
					name
					price
					options {
						name
						extra
					}
				}
			}
		}
	}
`;

export const SEARCH_RESTAURANT = gql`
	query SearchRestaurants($data: SearchRestaurantInput!) {
		searchRestaurants(data: $data) {
			ok
			message
			totalRestaurants
			totalPages
			restaurants {
				name
				id
				isPromoted
				coverImg
				category {
					name
				}
			}
		}
	}
`;
