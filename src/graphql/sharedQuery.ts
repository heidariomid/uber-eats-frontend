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
