// import {gql} from '@apollo/client';

// export const PENDING_ORDER_SUB = gql`
// 	subscription PendingOrderSub {
// 		pendingOrders {
// 			id
// 			items {
// 				id
// 				dish {
// 					name
// 					options {
// 						name
// 					}
// 				}
// 				options {
// 					name
// 				}
// 			}
// 		}
// 	}
// `;
// export const COOKED_ORDER_SUB = gql`
// 	subscription cookedOrderSub($data: OrderInputType!) {
// 		cookedOrders(data: $data) {
// 			restaurant {
// 				name
// 			}
// 			totalPrice
// 			customer {
// 				email
// 			}
// 		}
// 	}
// `;
// export const UPDATE_ORDER_SUB = gql`
// 	subscription updateOrderSub($data: OrderInputType!) {
// 		updateOrders(data: $data) {
// 			id
// 			status
// 			driver {
// 				email
// 			}
// 		}
// 	}
// `;
