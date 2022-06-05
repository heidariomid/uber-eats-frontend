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

export const USER_PROFILE = gql`
	query userProfile($userId: Float!) {
		userProfile(userId: $userId) {
			user {
				email
			}
			ok
			message
		}
	}
`;
export const USERS = gql`
	query Users {
		users {
			id
			email
			role
		}
	}
`;
export const CATEGORY = gql`
	query Category($data: CategoryInputType!) {
		getCategory(data: $data) {
			category {
				name
				restaurants {
					id
				}
			}
			ok
			message
			totalPages
		}
	}
`;
export const DISH = gql`
	query Dish($dishId: Int!) {
		getDish(dishId: $dishId) {
			ok
			message
			dish {
				id
				name
				price
				description
				restaurant {
					id
					name
				}
				options {
					name
					extra

					choices {
						name
						extra
					}
				}
			}
		}
	}
`;
export const PAYMENTS = gql`
	query Payments {
		Payments {
			ok
			message
			payments {
				transactionId
			}
		}
	}
`;
