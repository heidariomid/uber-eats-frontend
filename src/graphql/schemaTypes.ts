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
  restaurants?: Maybe<Array<Restaurant>>;
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
  Admin = 'Admin',
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

export type CreateAccountMutationVariables = Exact<{
  data: CreateAccountInput;
}>;


export type CreateAccountMutation = { __typename?: 'Mutation', createAccount: { __typename?: 'createAccountOutput', ok: boolean, message?: string } };

export type ValidateEmailMutationVariables = Exact<{
  data: ValidateEmailInput;
}>;


export type ValidateEmailMutation = { __typename?: 'Mutation', validateEmail: { __typename?: 'ValidateEmailOutput', message?: string, ok: boolean } };

export type EditUserProfileMutationVariables = Exact<{
  data: UpdateUserInput;
}>;


export type EditUserProfileMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'UpdateUserOutput', ok: boolean, message?: string } };

export type CreateRestaurantMutationVariables = Exact<{
  data: CreateRestaurantInput;
}>;


export type CreateRestaurantMutation = { __typename?: 'Mutation', createRestaurant: { __typename?: 'CreateRestaurantOutput', ok: boolean, message?: string } };

export type EditRestaurantMutationVariables = Exact<{
  data: EditRestaurantInput;
}>;


export type EditRestaurantMutation = { __typename?: 'Mutation', editRestaurant: { __typename?: 'EditRestaurantOutput', ok: boolean, message?: string } };

export type DeleteRestaurantMutationVariables = Exact<{
  data: DeleteRestaurantInput;
}>;


export type DeleteRestaurantMutation = { __typename?: 'Mutation', deleteRestaurant: { __typename?: 'DeleteRestaurantOutput', ok: boolean, message?: string } };

export type CreateDishMutationVariables = Exact<{
  data: CreateDishInput;
}>;


export type CreateDishMutation = { __typename?: 'Mutation', createDishe: { __typename?: 'CreateDishOutput', ok: boolean, message?: string } };

export type DeleteDishMutationVariables = Exact<{
  dishId: Scalars['Float'];
}>;


export type DeleteDishMutation = { __typename?: 'Mutation', deleteDish: { __typename?: 'DeleteDishOutput', ok: boolean, message?: string } };

export type EditDishMutationVariables = Exact<{
  data: EditDishInput;
}>;


export type EditDishMutation = { __typename?: 'Mutation', editDish: { __typename?: 'EditDishOutput', ok: boolean, message?: string } };

export type CreateOrderMutationVariables = Exact<{
  data: CreateOrderInput;
}>;


export type CreateOrderMutation = { __typename?: 'Mutation', createOrder: { __typename?: 'CreateOrderOutput', ok: boolean, message?: string } };

export type OrdersMutationVariables = Exact<{
  data: OrdersInputFilter;
}>;


export type OrdersMutation = { __typename?: 'Mutation', getOrders: { __typename?: 'OrdersOutput', ok: boolean, message?: string, orders?: Array<{ __typename?: 'Order', id: number }> } };

export type OrderMutationVariables = Exact<{
  data: OrderInputType;
}>;


export type OrderMutation = { __typename?: 'Mutation', getOrderById: { __typename?: 'OrderOutput', ok: boolean, message?: string, order?: { __typename?: 'Order', id: number, status: OrderStatus, restaurant?: { __typename?: 'Restaurant', id: number, name: string, isPromoted: boolean, address: string, coverImg: string, category?: { __typename?: 'Category', name: string } } } } };

export type EditOrderMutationVariables = Exact<{
  data: EditOrderInput;
}>;


export type EditOrderMutation = { __typename?: 'Mutation', editOrder: { __typename?: 'EditOrderOutput', ok: boolean, message?: string } };

export type TakeOrderMutationVariables = Exact<{
  data: OrderInputType;
}>;


export type TakeOrderMutation = { __typename?: 'Mutation', takeOrder: { __typename?: 'OrderOutput', ok: boolean, message?: string, order?: { __typename?: 'Order', id: number } } };

export type CreatepaymentMutationVariables = Exact<{
  data: CreatePaymentInputType;
}>;


export type CreatepaymentMutation = { __typename?: 'Mutation', createPayment: { __typename?: 'CreatePaymentOutput', ok: boolean, message?: string } };

export type LoggedInUserQueryVariables = Exact<{ [key: string]: never; }>;


export type LoggedInUserQuery = { __typename?: 'Query', loggedInUser: { __typename?: 'User', id: number, email: string, role: UserRole, verified: boolean } };

export type RestaurantsQueryVariables = Exact<{
  data: RestaurantsInput;
}>;


export type RestaurantsQuery = { __typename?: 'Query', getRestaurants: { __typename?: 'RestaurantsOutput', ok: boolean, message?: string, totalPages?: number, totalRestaurants?: number, restaurants?: Array<{ __typename?: 'Restaurant', id: number, name: string, isPromoted: boolean, address: string, coverImg: string, category?: { __typename?: 'Category', name: string } }> } };

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = { __typename?: 'Query', getCategories: { __typename?: 'CategoriesOutput', message?: string, ok: boolean, categories?: Array<{ __typename?: 'Category', id: number, name: string, slug: string, restaurantCount: number, iconImg?: string }> } };

export type RestaurantQueryVariables = Exact<{
  data: RestaurantInputType;
}>;


export type RestaurantQuery = { __typename?: 'Query', getRestaurant: { __typename?: 'RestaurantOutput', ok: boolean, message?: string, restaurant?: { __typename?: 'Restaurant', id: number, name: string, isPromoted: boolean, address: string, coverImg: string, category?: { __typename?: 'Category', id: number, name: string, slug: string, restaurants: Array<{ __typename?: 'Restaurant', id: number }> }, owner: { __typename?: 'User', id: number }, orders: Array<{ __typename?: 'Order', id: number }>, menu: Array<{ __typename?: 'Dish', name: string, price: number, options?: Array<{ __typename?: 'DishOption', name: string, extra?: number }> }> } } };

export type SearchRestaurantsQueryVariables = Exact<{
  data: SearchRestaurantInput;
}>;


export type SearchRestaurantsQuery = { __typename?: 'Query', searchRestaurants: { __typename?: 'SearchRestaurantOutput', ok: boolean, message?: string, totalRestaurants?: number, totalPages?: number, restaurants?: Array<{ __typename?: 'Restaurant', id: number, name: string, isPromoted: boolean, address: string, coverImg: string, category?: { __typename?: 'Category', name: string } }> } };

export type UserProfileQueryVariables = Exact<{
  userId: Scalars['Float'];
}>;


export type UserProfileQuery = { __typename?: 'Query', userProfile: { __typename?: 'UserProfileOutput', ok: boolean, message?: string, user?: { __typename?: 'User', email: string } } };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: number, email: string, role: UserRole }> };

export type CategoryQueryVariables = Exact<{
  data: CategoryInputType;
}>;


export type CategoryQuery = { __typename?: 'Query', getCategory: { __typename?: 'CategoryOutput', ok: boolean, message?: string, totalPages?: number, category?: { __typename?: 'Category', name: string, id: number, iconImg?: string, restaurantCount: number, slug: string }, restaurants?: Array<{ __typename?: 'Restaurant', id: number, name: string, isPromoted: boolean, address: string, coverImg: string, category?: { __typename?: 'Category', name: string } }> } };

export type DishQueryVariables = Exact<{
  dishId: Scalars['Int'];
}>;


export type DishQuery = { __typename?: 'Query', getDish: { __typename?: 'DishOutput', ok: boolean, message?: string, dish?: { __typename?: 'Dish', id: number, name: string, price: number, description?: string, restaurant: { __typename?: 'Restaurant', id: number, name: string }, options?: Array<{ __typename?: 'DishOption', name: string, extra?: number, choices?: Array<{ __typename?: 'DishChoice', name: string, extra?: number }> }> } } };

export type PaymentsQueryVariables = Exact<{ [key: string]: never; }>;


export type PaymentsQuery = { __typename?: 'Query', Payments: { __typename?: 'PaymentsOutput', ok: boolean, message?: string, payments?: Array<{ __typename?: 'Payment', transactionId: string }> } };

export type RestaurantFragmentFragment = { __typename?: 'Restaurant', id: number, name: string, isPromoted: boolean, address: string, coverImg: string, category?: { __typename?: 'Category', name: string } };

export const RestaurantFragmentFragmentDoc = gql`
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
export const CreateAccountDocument = gql`
    mutation createAccount($data: createAccountInput!) {
  createAccount(data: $data) {
    ok
    message
  }
}
    `;
export type CreateAccountMutationFn = Apollo.MutationFunction<CreateAccountMutation, CreateAccountMutationVariables>;

/**
 * __useCreateAccountMutation__
 *
 * To run a mutation, you first call `useCreateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountMutation, { data, loading, error }] = useCreateAccountMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateAccountMutation(baseOptions?: Apollo.MutationHookOptions<CreateAccountMutation, CreateAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAccountMutation, CreateAccountMutationVariables>(CreateAccountDocument, options);
      }
export type CreateAccountMutationHookResult = ReturnType<typeof useCreateAccountMutation>;
export type CreateAccountMutationResult = Apollo.MutationResult<CreateAccountMutation>;
export type CreateAccountMutationOptions = Apollo.BaseMutationOptions<CreateAccountMutation, CreateAccountMutationVariables>;
export const ValidateEmailDocument = gql`
    mutation validateEmail($data: ValidateEmailInput!) {
  validateEmail(data: $data) {
    message
    ok
  }
}
    `;
export type ValidateEmailMutationFn = Apollo.MutationFunction<ValidateEmailMutation, ValidateEmailMutationVariables>;

/**
 * __useValidateEmailMutation__
 *
 * To run a mutation, you first call `useValidateEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useValidateEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [validateEmailMutation, { data, loading, error }] = useValidateEmailMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useValidateEmailMutation(baseOptions?: Apollo.MutationHookOptions<ValidateEmailMutation, ValidateEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ValidateEmailMutation, ValidateEmailMutationVariables>(ValidateEmailDocument, options);
      }
export type ValidateEmailMutationHookResult = ReturnType<typeof useValidateEmailMutation>;
export type ValidateEmailMutationResult = Apollo.MutationResult<ValidateEmailMutation>;
export type ValidateEmailMutationOptions = Apollo.BaseMutationOptions<ValidateEmailMutation, ValidateEmailMutationVariables>;
export const EditUserProfileDocument = gql`
    mutation EditUserProfile($data: UpdateUserInput!) {
  updateUser(data: $data) {
    ok
    message
  }
}
    `;
export type EditUserProfileMutationFn = Apollo.MutationFunction<EditUserProfileMutation, EditUserProfileMutationVariables>;

/**
 * __useEditUserProfileMutation__
 *
 * To run a mutation, you first call `useEditUserProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditUserProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editUserProfileMutation, { data, loading, error }] = useEditUserProfileMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEditUserProfileMutation(baseOptions?: Apollo.MutationHookOptions<EditUserProfileMutation, EditUserProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditUserProfileMutation, EditUserProfileMutationVariables>(EditUserProfileDocument, options);
      }
export type EditUserProfileMutationHookResult = ReturnType<typeof useEditUserProfileMutation>;
export type EditUserProfileMutationResult = Apollo.MutationResult<EditUserProfileMutation>;
export type EditUserProfileMutationOptions = Apollo.BaseMutationOptions<EditUserProfileMutation, EditUserProfileMutationVariables>;
export const CreateRestaurantDocument = gql`
    mutation CreateRestaurant($data: CreateRestaurantInput!) {
  createRestaurant(data: $data) {
    ok
    message
  }
}
    `;
export type CreateRestaurantMutationFn = Apollo.MutationFunction<CreateRestaurantMutation, CreateRestaurantMutationVariables>;

/**
 * __useCreateRestaurantMutation__
 *
 * To run a mutation, you first call `useCreateRestaurantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRestaurantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRestaurantMutation, { data, loading, error }] = useCreateRestaurantMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateRestaurantMutation(baseOptions?: Apollo.MutationHookOptions<CreateRestaurantMutation, CreateRestaurantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRestaurantMutation, CreateRestaurantMutationVariables>(CreateRestaurantDocument, options);
      }
export type CreateRestaurantMutationHookResult = ReturnType<typeof useCreateRestaurantMutation>;
export type CreateRestaurantMutationResult = Apollo.MutationResult<CreateRestaurantMutation>;
export type CreateRestaurantMutationOptions = Apollo.BaseMutationOptions<CreateRestaurantMutation, CreateRestaurantMutationVariables>;
export const EditRestaurantDocument = gql`
    mutation editRestaurant($data: EditRestaurantInput!) {
  editRestaurant(data: $data) {
    ok
    message
  }
}
    `;
export type EditRestaurantMutationFn = Apollo.MutationFunction<EditRestaurantMutation, EditRestaurantMutationVariables>;

/**
 * __useEditRestaurantMutation__
 *
 * To run a mutation, you first call `useEditRestaurantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditRestaurantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editRestaurantMutation, { data, loading, error }] = useEditRestaurantMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEditRestaurantMutation(baseOptions?: Apollo.MutationHookOptions<EditRestaurantMutation, EditRestaurantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditRestaurantMutation, EditRestaurantMutationVariables>(EditRestaurantDocument, options);
      }
export type EditRestaurantMutationHookResult = ReturnType<typeof useEditRestaurantMutation>;
export type EditRestaurantMutationResult = Apollo.MutationResult<EditRestaurantMutation>;
export type EditRestaurantMutationOptions = Apollo.BaseMutationOptions<EditRestaurantMutation, EditRestaurantMutationVariables>;
export const DeleteRestaurantDocument = gql`
    mutation DeleteRestaurant($data: DeleteRestaurantInput!) {
  deleteRestaurant(data: $data) {
    ok
    message
  }
}
    `;
export type DeleteRestaurantMutationFn = Apollo.MutationFunction<DeleteRestaurantMutation, DeleteRestaurantMutationVariables>;

/**
 * __useDeleteRestaurantMutation__
 *
 * To run a mutation, you first call `useDeleteRestaurantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRestaurantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRestaurantMutation, { data, loading, error }] = useDeleteRestaurantMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeleteRestaurantMutation(baseOptions?: Apollo.MutationHookOptions<DeleteRestaurantMutation, DeleteRestaurantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteRestaurantMutation, DeleteRestaurantMutationVariables>(DeleteRestaurantDocument, options);
      }
export type DeleteRestaurantMutationHookResult = ReturnType<typeof useDeleteRestaurantMutation>;
export type DeleteRestaurantMutationResult = Apollo.MutationResult<DeleteRestaurantMutation>;
export type DeleteRestaurantMutationOptions = Apollo.BaseMutationOptions<DeleteRestaurantMutation, DeleteRestaurantMutationVariables>;
export const CreateDishDocument = gql`
    mutation createDish($data: CreateDishInput!) {
  createDishe(data: $data) {
    ok
    message
  }
}
    `;
export type CreateDishMutationFn = Apollo.MutationFunction<CreateDishMutation, CreateDishMutationVariables>;

/**
 * __useCreateDishMutation__
 *
 * To run a mutation, you first call `useCreateDishMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDishMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDishMutation, { data, loading, error }] = useCreateDishMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateDishMutation(baseOptions?: Apollo.MutationHookOptions<CreateDishMutation, CreateDishMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDishMutation, CreateDishMutationVariables>(CreateDishDocument, options);
      }
export type CreateDishMutationHookResult = ReturnType<typeof useCreateDishMutation>;
export type CreateDishMutationResult = Apollo.MutationResult<CreateDishMutation>;
export type CreateDishMutationOptions = Apollo.BaseMutationOptions<CreateDishMutation, CreateDishMutationVariables>;
export const DeleteDishDocument = gql`
    mutation DeleteDish($dishId: Float!) {
  deleteDish(dishId: $dishId) {
    ok
    message
  }
}
    `;
export type DeleteDishMutationFn = Apollo.MutationFunction<DeleteDishMutation, DeleteDishMutationVariables>;

/**
 * __useDeleteDishMutation__
 *
 * To run a mutation, you first call `useDeleteDishMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDishMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDishMutation, { data, loading, error }] = useDeleteDishMutation({
 *   variables: {
 *      dishId: // value for 'dishId'
 *   },
 * });
 */
export function useDeleteDishMutation(baseOptions?: Apollo.MutationHookOptions<DeleteDishMutation, DeleteDishMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteDishMutation, DeleteDishMutationVariables>(DeleteDishDocument, options);
      }
export type DeleteDishMutationHookResult = ReturnType<typeof useDeleteDishMutation>;
export type DeleteDishMutationResult = Apollo.MutationResult<DeleteDishMutation>;
export type DeleteDishMutationOptions = Apollo.BaseMutationOptions<DeleteDishMutation, DeleteDishMutationVariables>;
export const EditDishDocument = gql`
    mutation editDish($data: EditDishInput!) {
  editDish(data: $data) {
    ok
    message
  }
}
    `;
export type EditDishMutationFn = Apollo.MutationFunction<EditDishMutation, EditDishMutationVariables>;

/**
 * __useEditDishMutation__
 *
 * To run a mutation, you first call `useEditDishMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditDishMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editDishMutation, { data, loading, error }] = useEditDishMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEditDishMutation(baseOptions?: Apollo.MutationHookOptions<EditDishMutation, EditDishMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditDishMutation, EditDishMutationVariables>(EditDishDocument, options);
      }
export type EditDishMutationHookResult = ReturnType<typeof useEditDishMutation>;
export type EditDishMutationResult = Apollo.MutationResult<EditDishMutation>;
export type EditDishMutationOptions = Apollo.BaseMutationOptions<EditDishMutation, EditDishMutationVariables>;
export const CreateOrderDocument = gql`
    mutation createOrder($data: CreateOrderInput!) {
  createOrder(data: $data) {
    ok
    message
  }
}
    `;
export type CreateOrderMutationFn = Apollo.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(CreateOrderDocument, options);
      }
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<CreateOrderMutation, CreateOrderMutationVariables>;
export const OrdersDocument = gql`
    mutation Orders($data: OrdersInputFilter!) {
  getOrders(data: $data) {
    ok
    message
    orders {
      id
    }
  }
}
    `;
export type OrdersMutationFn = Apollo.MutationFunction<OrdersMutation, OrdersMutationVariables>;

/**
 * __useOrdersMutation__
 *
 * To run a mutation, you first call `useOrdersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOrdersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [ordersMutation, { data, loading, error }] = useOrdersMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useOrdersMutation(baseOptions?: Apollo.MutationHookOptions<OrdersMutation, OrdersMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OrdersMutation, OrdersMutationVariables>(OrdersDocument, options);
      }
export type OrdersMutationHookResult = ReturnType<typeof useOrdersMutation>;
export type OrdersMutationResult = Apollo.MutationResult<OrdersMutation>;
export type OrdersMutationOptions = Apollo.BaseMutationOptions<OrdersMutation, OrdersMutationVariables>;
export const OrderDocument = gql`
    mutation Order($data: OrderInputType!) {
  getOrderById(data: $data) {
    ok
    message
    order {
      id
      status
      restaurant {
        ...RestaurantFragment
      }
    }
  }
}
    ${RestaurantFragmentFragmentDoc}`;
export type OrderMutationFn = Apollo.MutationFunction<OrderMutation, OrderMutationVariables>;

/**
 * __useOrderMutation__
 *
 * To run a mutation, you first call `useOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [orderMutation, { data, loading, error }] = useOrderMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useOrderMutation(baseOptions?: Apollo.MutationHookOptions<OrderMutation, OrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OrderMutation, OrderMutationVariables>(OrderDocument, options);
      }
export type OrderMutationHookResult = ReturnType<typeof useOrderMutation>;
export type OrderMutationResult = Apollo.MutationResult<OrderMutation>;
export type OrderMutationOptions = Apollo.BaseMutationOptions<OrderMutation, OrderMutationVariables>;
export const EditOrderDocument = gql`
    mutation editOrder($data: EditOrderInput!) {
  editOrder(data: $data) {
    ok
    message
  }
}
    `;
export type EditOrderMutationFn = Apollo.MutationFunction<EditOrderMutation, EditOrderMutationVariables>;

/**
 * __useEditOrderMutation__
 *
 * To run a mutation, you first call `useEditOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editOrderMutation, { data, loading, error }] = useEditOrderMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEditOrderMutation(baseOptions?: Apollo.MutationHookOptions<EditOrderMutation, EditOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditOrderMutation, EditOrderMutationVariables>(EditOrderDocument, options);
      }
export type EditOrderMutationHookResult = ReturnType<typeof useEditOrderMutation>;
export type EditOrderMutationResult = Apollo.MutationResult<EditOrderMutation>;
export type EditOrderMutationOptions = Apollo.BaseMutationOptions<EditOrderMutation, EditOrderMutationVariables>;
export const TakeOrderDocument = gql`
    mutation TakeOrder($data: OrderInputType!) {
  takeOrder(data: $data) {
    ok
    message
    order {
      id
    }
  }
}
    `;
export type TakeOrderMutationFn = Apollo.MutationFunction<TakeOrderMutation, TakeOrderMutationVariables>;

/**
 * __useTakeOrderMutation__
 *
 * To run a mutation, you first call `useTakeOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTakeOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [takeOrderMutation, { data, loading, error }] = useTakeOrderMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useTakeOrderMutation(baseOptions?: Apollo.MutationHookOptions<TakeOrderMutation, TakeOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TakeOrderMutation, TakeOrderMutationVariables>(TakeOrderDocument, options);
      }
export type TakeOrderMutationHookResult = ReturnType<typeof useTakeOrderMutation>;
export type TakeOrderMutationResult = Apollo.MutationResult<TakeOrderMutation>;
export type TakeOrderMutationOptions = Apollo.BaseMutationOptions<TakeOrderMutation, TakeOrderMutationVariables>;
export const CreatepaymentDocument = gql`
    mutation Createpayment($data: CreatePaymentInputType!) {
  createPayment(data: $data) {
    ok
    message
  }
}
    `;
export type CreatepaymentMutationFn = Apollo.MutationFunction<CreatepaymentMutation, CreatepaymentMutationVariables>;

/**
 * __useCreatepaymentMutation__
 *
 * To run a mutation, you first call `useCreatepaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatepaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createpaymentMutation, { data, loading, error }] = useCreatepaymentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreatepaymentMutation(baseOptions?: Apollo.MutationHookOptions<CreatepaymentMutation, CreatepaymentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatepaymentMutation, CreatepaymentMutationVariables>(CreatepaymentDocument, options);
      }
export type CreatepaymentMutationHookResult = ReturnType<typeof useCreatepaymentMutation>;
export type CreatepaymentMutationResult = Apollo.MutationResult<CreatepaymentMutation>;
export type CreatepaymentMutationOptions = Apollo.BaseMutationOptions<CreatepaymentMutation, CreatepaymentMutationVariables>;
export const LoggedInUserDocument = gql`
    query loggedInUser {
  loggedInUser {
    id
    email
    role
    verified
  }
}
    `;

/**
 * __useLoggedInUserQuery__
 *
 * To run a query within a React component, call `useLoggedInUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoggedInUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoggedInUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useLoggedInUserQuery(baseOptions?: Apollo.QueryHookOptions<LoggedInUserQuery, LoggedInUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LoggedInUserQuery, LoggedInUserQueryVariables>(LoggedInUserDocument, options);
      }
export function useLoggedInUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoggedInUserQuery, LoggedInUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LoggedInUserQuery, LoggedInUserQueryVariables>(LoggedInUserDocument, options);
        }
export type LoggedInUserQueryHookResult = ReturnType<typeof useLoggedInUserQuery>;
export type LoggedInUserLazyQueryHookResult = ReturnType<typeof useLoggedInUserLazyQuery>;
export type LoggedInUserQueryResult = Apollo.QueryResult<LoggedInUserQuery, LoggedInUserQueryVariables>;
export const RestaurantsDocument = gql`
    query restaurants($data: RestaurantsInput!) {
  getRestaurants(data: $data) {
    ok
    message
    totalPages
    totalRestaurants
    restaurants {
      ...RestaurantFragment
    }
  }
}
    ${RestaurantFragmentFragmentDoc}`;

/**
 * __useRestaurantsQuery__
 *
 * To run a query within a React component, call `useRestaurantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRestaurantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRestaurantsQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRestaurantsQuery(baseOptions: Apollo.QueryHookOptions<RestaurantsQuery, RestaurantsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RestaurantsQuery, RestaurantsQueryVariables>(RestaurantsDocument, options);
      }
export function useRestaurantsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RestaurantsQuery, RestaurantsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RestaurantsQuery, RestaurantsQueryVariables>(RestaurantsDocument, options);
        }
export type RestaurantsQueryHookResult = ReturnType<typeof useRestaurantsQuery>;
export type RestaurantsLazyQueryHookResult = ReturnType<typeof useRestaurantsLazyQuery>;
export type RestaurantsQueryResult = Apollo.QueryResult<RestaurantsQuery, RestaurantsQueryVariables>;
export const CategoriesDocument = gql`
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

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const RestaurantDocument = gql`
    query Restaurant($data: RestaurantInputType!) {
  getRestaurant(data: $data) {
    ok
    message
    restaurant {
      category {
        id
        name
        slug
        restaurants {
          id
        }
      }
      owner {
        id
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
      ...RestaurantFragment
    }
  }
}
    ${RestaurantFragmentFragmentDoc}`;

/**
 * __useRestaurantQuery__
 *
 * To run a query within a React component, call `useRestaurantQuery` and pass it any options that fit your needs.
 * When your component renders, `useRestaurantQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRestaurantQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRestaurantQuery(baseOptions: Apollo.QueryHookOptions<RestaurantQuery, RestaurantQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RestaurantQuery, RestaurantQueryVariables>(RestaurantDocument, options);
      }
export function useRestaurantLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RestaurantQuery, RestaurantQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RestaurantQuery, RestaurantQueryVariables>(RestaurantDocument, options);
        }
export type RestaurantQueryHookResult = ReturnType<typeof useRestaurantQuery>;
export type RestaurantLazyQueryHookResult = ReturnType<typeof useRestaurantLazyQuery>;
export type RestaurantQueryResult = Apollo.QueryResult<RestaurantQuery, RestaurantQueryVariables>;
export const SearchRestaurantsDocument = gql`
    query SearchRestaurants($data: SearchRestaurantInput!) {
  searchRestaurants(data: $data) {
    ok
    message
    totalRestaurants
    totalPages
    restaurants {
      ...RestaurantFragment
    }
  }
}
    ${RestaurantFragmentFragmentDoc}`;

/**
 * __useSearchRestaurantsQuery__
 *
 * To run a query within a React component, call `useSearchRestaurantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchRestaurantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchRestaurantsQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSearchRestaurantsQuery(baseOptions: Apollo.QueryHookOptions<SearchRestaurantsQuery, SearchRestaurantsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchRestaurantsQuery, SearchRestaurantsQueryVariables>(SearchRestaurantsDocument, options);
      }
export function useSearchRestaurantsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchRestaurantsQuery, SearchRestaurantsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchRestaurantsQuery, SearchRestaurantsQueryVariables>(SearchRestaurantsDocument, options);
        }
export type SearchRestaurantsQueryHookResult = ReturnType<typeof useSearchRestaurantsQuery>;
export type SearchRestaurantsLazyQueryHookResult = ReturnType<typeof useSearchRestaurantsLazyQuery>;
export type SearchRestaurantsQueryResult = Apollo.QueryResult<SearchRestaurantsQuery, SearchRestaurantsQueryVariables>;
export const UserProfileDocument = gql`
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

/**
 * __useUserProfileQuery__
 *
 * To run a query within a React component, call `useUserProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserProfileQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserProfileQuery(baseOptions: Apollo.QueryHookOptions<UserProfileQuery, UserProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserProfileQuery, UserProfileQueryVariables>(UserProfileDocument, options);
      }
export function useUserProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserProfileQuery, UserProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserProfileQuery, UserProfileQueryVariables>(UserProfileDocument, options);
        }
export type UserProfileQueryHookResult = ReturnType<typeof useUserProfileQuery>;
export type UserProfileLazyQueryHookResult = ReturnType<typeof useUserProfileLazyQuery>;
export type UserProfileQueryResult = Apollo.QueryResult<UserProfileQuery, UserProfileQueryVariables>;
export const UsersDocument = gql`
    query Users {
  users {
    id
    email
    role
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const CategoryDocument = gql`
    query Category($data: CategoryInputType!) {
  getCategory(data: $data) {
    ok
    message
    totalPages
    category {
      name
      id
      iconImg
      restaurantCount
      slug
    }
    restaurants {
      ...RestaurantFragment
    }
  }
}
    ${RestaurantFragmentFragmentDoc}`;

/**
 * __useCategoryQuery__
 *
 * To run a query within a React component, call `useCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCategoryQuery(baseOptions: Apollo.QueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
      }
export function useCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
        }
export type CategoryQueryHookResult = ReturnType<typeof useCategoryQuery>;
export type CategoryLazyQueryHookResult = ReturnType<typeof useCategoryLazyQuery>;
export type CategoryQueryResult = Apollo.QueryResult<CategoryQuery, CategoryQueryVariables>;
export const DishDocument = gql`
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

/**
 * __useDishQuery__
 *
 * To run a query within a React component, call `useDishQuery` and pass it any options that fit your needs.
 * When your component renders, `useDishQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDishQuery({
 *   variables: {
 *      dishId: // value for 'dishId'
 *   },
 * });
 */
export function useDishQuery(baseOptions: Apollo.QueryHookOptions<DishQuery, DishQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DishQuery, DishQueryVariables>(DishDocument, options);
      }
export function useDishLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DishQuery, DishQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DishQuery, DishQueryVariables>(DishDocument, options);
        }
export type DishQueryHookResult = ReturnType<typeof useDishQuery>;
export type DishLazyQueryHookResult = ReturnType<typeof useDishLazyQuery>;
export type DishQueryResult = Apollo.QueryResult<DishQuery, DishQueryVariables>;
export const PaymentsDocument = gql`
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

/**
 * __usePaymentsQuery__
 *
 * To run a query within a React component, call `usePaymentsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaymentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaymentsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePaymentsQuery(baseOptions?: Apollo.QueryHookOptions<PaymentsQuery, PaymentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PaymentsQuery, PaymentsQueryVariables>(PaymentsDocument, options);
      }
export function usePaymentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PaymentsQuery, PaymentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PaymentsQuery, PaymentsQueryVariables>(PaymentsDocument, options);
        }
export type PaymentsQueryHookResult = ReturnType<typeof usePaymentsQuery>;
export type PaymentsLazyQueryHookResult = ReturnType<typeof usePaymentsLazyQuery>;
export type PaymentsQueryResult = Apollo.QueryResult<PaymentsQuery, PaymentsQueryVariables>;