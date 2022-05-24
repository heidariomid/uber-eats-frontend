import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
}

export interface CategoriesOutput {
  __typename?: 'CategoriesOutput';
  categories?: Maybe<Array<Category>>;
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
}

export interface Category {
  __typename?: 'Category';
  createdAt?: Maybe<Scalars['DateTime']>;
  iconImg?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
  name: Scalars['String'];
  restaurantCount: Scalars['Int'];
  restaurants: Array<Restaurant>;
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
}

export interface CategoryInput {
  iconImg?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  restaurants: Array<RestaurantInput>;
  slug: Scalars['String'];
}

export interface CategoryInputType {
  page?: InputMaybe<Scalars['Int']>;
  slug: Scalars['String'];
}

export interface CategoryOutput {
  __typename?: 'CategoryOutput';
  category?: Maybe<Category>;
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  totalPages?: Maybe<Scalars['Int']>;
}

export interface CreateDishInput {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  options?: InputMaybe<Array<DishOptionInput>>;
  price: Scalars['Int'];
  restaurantId: Scalars['Int'];
}

export interface CreateDishOutput {
  __typename?: 'CreateDishOutput';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
}

export interface CreateOrderInput {
  items: Array<CreateOrderItemInput>;
  restaurantId: Scalars['Int'];
}

export interface CreateOrderItemInput {
  dishId: Scalars['Int'];
  options?: InputMaybe<Array<OrderItemOptionInputType>>;
}

export interface CreateOrderOutput {
  __typename?: 'CreateOrderOutput';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
}

export interface CreatePaymentInputType {
  restaurantId: Scalars['Int'];
  transactionId: Scalars['String'];
}

export interface CreatePaymentOutput {
  __typename?: 'CreatePaymentOutput';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
}

export interface CreateRestaurantInput {
  address: Scalars['String'];
  categoryName: Scalars['String'];
  coverImg: Scalars['String'];
  name: Scalars['String'];
}

export interface CreateRestaurantOutput {
  __typename?: 'CreateRestaurantOutput';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
}

export interface DeleteDishOutput {
  __typename?: 'DeleteDishOutput';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
}

export interface DeleteRestaurantInput {
  address?: InputMaybe<Scalars['String']>;
  categoryName?: InputMaybe<Scalars['String']>;
  coverImg?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  restaurantId: Scalars['Float'];
}

export interface DeleteRestaurantOutput {
  __typename?: 'DeleteRestaurantOutput';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
}

export interface Dish {
  __typename?: 'Dish';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
  name: Scalars['String'];
  options?: Maybe<Array<DishOption>>;
  photo?: Maybe<Scalars['String']>;
  price: Scalars['Int'];
  restaurant: Restaurant;
  updatedAt?: Maybe<Scalars['DateTime']>;
}

export interface DishChoice {
  __typename?: 'DishChoice';
  extra?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
}

export interface DishChoiceInput {
  extra?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
}

export interface DishInput {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  options?: InputMaybe<Array<DishOptionInput>>;
  photo?: InputMaybe<Scalars['String']>;
  price: Scalars['Int'];
  restaurant: RestaurantInput;
}

export interface DishOption {
  __typename?: 'DishOption';
  choices?: Maybe<Array<DishChoice>>;
  extra?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
}

export interface DishOptionInput {
  choices?: InputMaybe<Array<DishChoiceInput>>;
  extra?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
}

export interface DishOutput {
  __typename?: 'DishOutput';
  dish?: Maybe<Dish>;
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  totalPages?: Maybe<Scalars['Int']>;
}

export interface EditDishInput {
  description?: InputMaybe<Scalars['String']>;
  dishId: Scalars['Float'];
  name?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<Array<DishOptionInput>>;
  price?: InputMaybe<Scalars['Int']>;
  restaurantId?: InputMaybe<Scalars['Int']>;
}

export interface EditDishOutput {
  __typename?: 'EditDishOutput';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
}

export interface EditOrderInput {
  id: Scalars['Float'];
  status: OrderStatus;
}

export interface EditOrderOutput {
  __typename?: 'EditOrderOutput';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
}

export interface EditRestaurantInput {
  address?: InputMaybe<Scalars['String']>;
  categoryName?: InputMaybe<Scalars['String']>;
  coverImg?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  restaurantId: Scalars['Float'];
}

export interface EditRestaurantOutput {
  __typename?: 'EditRestaurantOutput';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
}

export interface Mutation {
  __typename?: 'Mutation';
  addUser: User;
  createAccount: CreateAccountOutput;
  createDishe: CreateDishOutput;
  createOrder: CreateOrderOutput;
  createPayment: CreatePaymentOutput;
  createRestaurant: CreateRestaurantOutput;
  deleteDish: DeleteDishOutput;
  deleteRestaurant: DeleteRestaurantOutput;
  editDish: EditDishOutput;
  editOrder: EditOrderOutput;
  editRestaurant: EditRestaurantOutput;
  getOrderById: OrderOutput;
  getOrders: OrdersOutput;
  login: LoginOutput;
  takeOrder: OrderOutput;
  updateUser: UpdateUserOutput;
  validateEmail: ValidateEmailOutput;
}


export interface MutationAddUserArgs {
  data: AddUserArgs;
}


export interface MutationCreateAccountArgs {
  data: CreateAccountInput;
}


export interface MutationCreateDisheArgs {
  data: CreateDishInput;
}


export interface MutationCreateOrderArgs {
  data: CreateOrderInput;
}


export interface MutationCreatePaymentArgs {
  data: CreatePaymentInputType;
}


export interface MutationCreateRestaurantArgs {
  data: CreateRestaurantInput;
}


export interface MutationDeleteDishArgs {
  dishId: Scalars['Float'];
}


export interface MutationDeleteRestaurantArgs {
  data: DeleteRestaurantInput;
}


export interface MutationEditDishArgs {
  data: EditDishInput;
}


export interface MutationEditOrderArgs {
  data: EditOrderInput;
}


export interface MutationEditRestaurantArgs {
  data: EditRestaurantInput;
}


export interface MutationGetOrderByIdArgs {
  data: OrderInputType;
}


export interface MutationGetOrdersArgs {
  data: OrdersInputFilter;
}


export interface MutationLoginArgs {
  data: LoginInput;
}


export interface MutationTakeOrderArgs {
  data: OrderInputType;
}


export interface MutationUpdateUserArgs {
  data: UpdateUserInput;
}


export interface MutationValidateEmailArgs {
  data: ValidateEmailInput;
}

export interface Order {
  __typename?: 'Order';
  createdAt?: Maybe<Scalars['DateTime']>;
  customer?: Maybe<User>;
  driver?: Maybe<User>;
  id: Scalars['Float'];
  items: Array<OrderItem>;
  restaurant?: Maybe<Restaurant>;
  status: OrderStatus;
  totalPrice?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
}

export interface OrderInputType {
  id: Scalars['Float'];
}

export interface OrderItem {
  __typename?: 'OrderItem';
  createdAt?: Maybe<Scalars['DateTime']>;
  dish: Dish;
  id: Scalars['Float'];
  options?: Maybe<Array<OrderItemOption>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
}

export interface OrderItemInputType {
  dish: DishInput;
  options?: InputMaybe<Array<OrderItemOptionInputType>>;
}

export interface OrderItemOption {
  __typename?: 'OrderItemOption';
  choice?: Maybe<Scalars['String']>;
  name: Scalars['String'];
}

export interface OrderItemOptionInputType {
  choice?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
}

export interface OrderOutput {
  __typename?: 'OrderOutput';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  order?: Maybe<Order>;
  totalPages?: Maybe<Scalars['Int']>;
}

export enum OrderStatus {
  Cooked = 'Cooked',
  Cooking = 'Cooking',
  Delivered = 'Delivered',
  Pending = 'Pending',
  PickedUp = 'PickedUp'
}

export interface OrdersInputFilter {
  status?: InputMaybe<OrderStatus>;
}

export interface OrdersInputType {
  customer?: InputMaybe<UserInput>;
  driver?: InputMaybe<UserInput>;
  items: Array<OrderItemInputType>;
  restaurant?: InputMaybe<RestaurantInput>;
  status: OrderStatus;
  totalPrice?: InputMaybe<Scalars['Float']>;
}

export interface OrdersOutput {
  __typename?: 'OrdersOutput';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  orders?: Maybe<Array<Order>>;
}

export interface Payment {
  __typename?: 'Payment';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Float'];
  restaurant: Restaurant;
  restaurantId: Scalars['Int'];
  transactionId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: User;
}

export interface PaymentsInputType {
  restaurant: RestaurantInput;
  restaurantId: Scalars['Int'];
  transactionId: Scalars['String'];
  user: UserInput;
}

export interface PaymentsOutput {
  __typename?: 'PaymentsOutput';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  payments?: Maybe<Array<Payment>>;
}

export interface Query {
  __typename?: 'Query';
  Payments: PaymentsOutput;
  getCategories: CategoriesOutput;
  getCategory: CategoryOutput;
  getDish: DishOutput;
  getRestaurant: RestaurantOutput;
  getRestaurants: RestaurantsOutput;
  loggedInUser: User;
  searchRestaurants: SearchRestaurantOutput;
  userProfile: UserProfileOutput;
  users: Array<User>;
}


export interface QueryGetCategoryArgs {
  data: CategoryInputType;
}


export interface QueryGetDishArgs {
  dishId: Scalars['Int'];
}


export interface QueryGetRestaurantArgs {
  data: RestaurantInputType;
}


export interface QueryGetRestaurantsArgs {
  data: RestaurantsInput;
}


export interface QuerySearchRestaurantsArgs {
  data: SearchRestaurantInput;
}


export interface QueryUserProfileArgs {
  userId: Scalars['Float'];
}

export interface Restaurant {
  __typename?: 'Restaurant';
  address: Scalars['String'];
  category?: Maybe<Category>;
  coverImg: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Float'];
  isPromoted: Scalars['Boolean'];
  menu: Array<Dish>;
  name: Scalars['String'];
  orders: Array<Order>;
  owner: User;
  promotedUntil?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
}

export interface RestaurantInput {
  address: Scalars['String'];
  category?: InputMaybe<CategoryInput>;
  coverImg: Scalars['String'];
  isPromoted: Scalars['Boolean'];
  menu: Array<DishInput>;
  name: Scalars['String'];
  orders: Array<OrdersInputType>;
  owner: UserInput;
  promotedUntil?: InputMaybe<Scalars['DateTime']>;
}

export interface RestaurantInputType {
  restaurantId: Scalars['Int'];
}

export interface RestaurantOutput {
  __typename?: 'RestaurantOutput';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  restaurant?: Maybe<Restaurant>;
}

export interface RestaurantsInput {
  page?: InputMaybe<Scalars['Int']>;
}

export interface RestaurantsOutput {
  __typename?: 'RestaurantsOutput';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  restaurants?: Maybe<Array<Restaurant>>;
  totalPages?: Maybe<Scalars['Int']>;
  totalRestaurants?: Maybe<Scalars['Int']>;
}

export interface SearchRestaurantInput {
  page?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
}

export interface SearchRestaurantOutput {
  __typename?: 'SearchRestaurantOutput';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  restaurants?: Maybe<Array<Restaurant>>;
  totalPages?: Maybe<Scalars['Int']>;
  totalRestaurants?: Maybe<Scalars['Int']>;
}

export interface Subscription {
  __typename?: 'Subscription';
  cookedOrders: Order;
  pendingOrders: Order;
  pendingPayments: Payment;
  updateOrders: Order;
}


export interface SubscriptionUpdateOrdersArgs {
  data: OrderInputType;
}

export interface UpdateUserInput {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<UserRole>;
}

export interface UpdateUserOutput {
  __typename?: 'UpdateUserOutput';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
}

export interface User {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id: Scalars['Float'];
  orders: Array<Order>;
  password: Scalars['String'];
  payments: Array<Payment>;
  restaurants: Array<Restaurant>;
  rides: Array<Order>;
  role: UserRole;
  updatedAt?: Maybe<Scalars['DateTime']>;
  verified: Scalars['Boolean'];
}

export interface UserInput {
  email: Scalars['String'];
  orders: Array<OrdersInputType>;
  password: Scalars['String'];
  payments: Array<PaymentsInputType>;
  restaurants: Array<RestaurantInput>;
  rides: Array<OrdersInputType>;
  role: UserRole;
  verified: Scalars['Boolean'];
}

export interface UserProfileOutput {
  __typename?: 'UserProfileOutput';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  user?: Maybe<User>;
}

export enum UserRole {
  Client = 'Client',
  Delivery = 'Delivery',
  Owner = 'Owner'
}

export interface ValidateEmailInput {
  code: Scalars['String'];
}

export interface ValidateEmailOutput {
  __typename?: 'ValidateEmailOutput';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
}

export interface AddUserArgs {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  orders: Array<OrdersInputType>;
  password: Scalars['String'];
  payments: Array<PaymentsInputType>;
  restaurants: Array<RestaurantInput>;
  rides: Array<OrdersInputType>;
  role: UserRole;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  verified: Scalars['Boolean'];
}

export interface CreateAccountInput {
  email: Scalars['String'];
  password: Scalars['String'];
  role: UserRole;
}

export interface CreateAccountOutput {
  __typename?: 'createAccountOutput';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
}

export interface LoginInput {
  email: Scalars['String'];
  password: Scalars['String'];
}

export interface LoginOutput {
  __typename?: 'loginOutput';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
}

export type LoginMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'loginOutput', ok: boolean, message?: string, token?: string } };


export const LoginDocument = gql`
    mutation login($data: loginInput!) {
  login(data: $data) {
    ok
    message
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;