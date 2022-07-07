import {gql} from '@apollo/client';

export const RESTAURANT_FEAGMENT = gql`
	fragment RestaurantFragment on Restaurant {
		id
		name
		isPromoted
		address
		coverImg
		category {
			name
		}
		coverImg
	}
`;
export const DISH_FEAGMENT = gql`
	fragment DishFragment on Dish {
		id
		name
		price
		description
		photo
		options {
			name
			extra
			choices {
				name
				extra
			}
		}
	}
`;
export const ORDER_FEAGMENT = gql`
	fragment OrderFragment on Order {
		id
		status
		totalPrice
		createdAt
	}
`;
