/* eslint-disable import/first */
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import type * as Types from './schemaTypes';

import {gql} from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client/react';
export type Maybe<T> = T;
export type InputMaybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: string; output: string; }
}

export interface AddressItem {
  __typename?: 'AddressItem';
  address: Scalars['String']['output'];
  apartment: Scalars['String']['output'];
  city: Scalars['String']['output'];
  id: Scalars['String']['output'];
  postalCode: Scalars['Float']['output'];
  region: Scalars['String']['output'];
}

export interface AddressItemObjectType {
  address: Scalars['String']['input'];
  apartment: Scalars['String']['input'];
  city: Scalars['String']['input'];
  id: Scalars['String']['input'];
  postalCode: Scalars['Float']['input'];
  region: Scalars['String']['input'];
}

export interface CategoriesOutput {
  __typename?: 'CategoriesOutput';
  categories?: Maybe<Array<Category>>;
  message?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
}

export interface Category {
  __typename?: 'Category';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  iconImg?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  restaurantCount: Scalars['Int']['output'];
  restaurants: Array<Restaurant>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
}

export interface CategoryInput {
  iconImg?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  restaurants: Array<RestaurantInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
}

export interface CategoryInputType {
  page?: InputMaybe<Scalars['Int']['input']>;
  slug: Scalars['String']['input'];
}

export interface CategoryOutput {
  __typename?: 'CategoryOutput';
  category?: Maybe<Category>;
  message?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  restaurants?: Maybe<Array<Restaurant>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
}

export interface CreateCategoryInput {
  iconImg?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
}

export interface CreateCategoryOutput {
  __typename?: 'CreateCategoryOutput';
  message?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
}

export interface CreateDishInput {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  options?: InputMaybe<Array<DishOptionInput>>;
  photo?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Int']['input'];
  restaurantId: Scalars['Int']['input'];
}

export interface CreateDishOutput {
  __typename?: 'CreateDishOutput';
  message?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
}

export interface CreateOrderInput {
  dishOptionQuantity?: InputMaybe<Array<DishOptionQuantitInputType>>;
  dishQuantity: Array<DishQuantityInputType>;
  restaurantId: Scalars['Int']['input'];
  totalPrice: Scalars['Float']['input'];
  userAddress: AddressItemObjectType;
}

export interface CreateOrderOutput {
  __typename?: 'CreateOrderOutput';
  message?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  orderId?: Maybe<Scalars['Int']['output']>;
}

export interface CreatePaymentInputType {
  orderId: Scalars['Int']['input'];
  payment_method: Scalars['String']['input'];
}

export interface CreatePaymentOutput {
  __typename?: 'CreatePaymentOutput';
  message?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  url?: Maybe<Scalars['String']['output']>;
}

export interface CreateRestaurantInput {
  address: Scalars['String']['input'];
  categoryId: Scalars['Float']['input'];
  coverImg: Scalars['String']['input'];
  name: Scalars['String']['input'];
}

export interface CreateRestaurantOutput {
  __typename?: 'CreateRestaurantOutput';
  message?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
}

export interface DeleteDishOutput {
  __typename?: 'DeleteDishOutput';
  message?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
}

export interface DeleteRestaurantInput {
  address?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['Float']['input']>;
  coverImg?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  restaurantId: Scalars['Float']['input'];
}

export interface DeleteRestaurantOutput {
  __typename?: 'DeleteRestaurantOutput';
  message?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
}

export interface Dish {
  __typename?: 'Dish';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  options?: Maybe<Array<DishOption>>;
  photo?: Maybe<Scalars['String']['output']>;
  price: Scalars['Int']['output'];
  restaurant: Restaurant;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
}

export interface DishInput {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  options?: InputMaybe<Array<DishOptionInput>>;
  photo?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Int']['input'];
  restaurant: RestaurantInput;
}

export interface DishOption {
  __typename?: 'DishOption';
  extra: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
}

export interface DishOptionInput {
  extra: Scalars['Int']['input'];
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
}

export interface DishOptionQuantitInputType {
  id: Scalars['String']['input'];
  quantity: Scalars['Float']['input'];
}

export interface DishOutput {
  __typename?: 'DishOutput';
  dish?: Maybe<Dish>;
  message?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  totalPages?: Maybe<Scalars['Int']['output']>;
}

export interface DishQuantityInputType {
  id: Scalars['Float']['input'];
  quantity: Scalars['Float']['input'];
}

export interface EditDishInput {
  description?: InputMaybe<Scalars['String']['input']>;
  dishId: Scalars['Float']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Array<DishOptionInput>>;
  photo?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  restaurantId?: InputMaybe<Scalars['Int']['input']>;
}

export interface EditDishOutput {
  __typename?: 'EditDishOutput';
  message?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
}

export interface EditOrderInput {
  id: Scalars['Float']['input'];
  status: OrderStatus;
}

export interface EditOrderOutput {
  __typename?: 'EditOrderOutput';
  message?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
}

export interface EditRestaurantInput {
  address?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['Float']['input']>;
  coverImg?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  restaurantId: Scalars['Float']['input'];
}

export interface EditRestaurantOutput {
  __typename?: 'EditRestaurantOutput';
  message?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
}

export interface Mutation {
  __typename?: 'Mutation';
  addUser: User;
  createAccount: CreateAccountOutput;
  createCategory: CreateCategoryOutput;
  createDishe: CreateDishOutput;
  createOrder: CreateOrderOutput;
  createPayment: CreatePaymentOutput;
  createRestaurant: CreateRestaurantOutput;
  deleteDish: DeleteDishOutput;
  deleteRestaurant: DeleteRestaurantOutput;
  editDish: EditDishOutput;
  editOrder: EditOrderOutput;
  editRestaurant: EditRestaurantOutput;
  login: LoginOutput;
  takeOrder: OrderOutput;
  updateUser: UpdateUserOutput;
  validateEmail: ValidateEmailOutput;
  verifyPayment: VerifyPaymentOutput;
}


export interface MutationAddUserArgs {
  data: AddUserArgs;
}


export interface MutationCreateAccountArgs {
  data: CreateAccountInput;
}


export interface MutationCreateCategoryArgs {
  data: CreateCategoryInput;
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
  dishId: Scalars['Float']['input'];
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


export interface MutationVerifyPaymentArgs {
  data: VerifyPaymentInputType;
}

export interface Order {
  __typename?: 'Order';
  address?: Maybe<AddressItem>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customer?: Maybe<User>;
  driver?: Maybe<User>;
  id: Scalars['Float']['output'];
  items: Array<OrderItem>;
  options?: Maybe<Array<OrderOptionItem>>;
  restaurant?: Maybe<Restaurant>;
  status: OrderStatus;
  totalPrice?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
}

export interface OrderInputType {
  id: Scalars['Float']['input'];
}

export interface OrderItem {
  __typename?: 'OrderItem';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  photo: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  quantity: Scalars['Float']['output'];
  restaurantId: Scalars['Float']['output'];
}

export interface OrderItemInputType {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  photo: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  quantity: Scalars['Float']['input'];
  restaurantId: Scalars['Float']['input'];
}

export interface OrderOptionItem {
  __typename?: 'OrderOptionItem';
  dishId: Scalars['Float']['output'];
  extra: Scalars['Float']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  quantity: Scalars['Float']['output'];
}

export interface OrderOptionItemInputType {
  dishId: Scalars['Float']['input'];
  extra: Scalars['Float']['input'];
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  quantity: Scalars['Float']['input'];
}

export interface OrderOutput {
  __typename?: 'OrderOutput';
  message?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  order?: Maybe<Order>;
  totalPages?: Maybe<Scalars['Int']['output']>;
}

export enum OrderStatus {
  Cooked = 'Cooked',
  Cooking = 'Cooking',
  Delivered = 'Delivered',
  Failed = 'Failed',
  PickedUp = 'PickedUp'
}

export interface OrdersInputFilter {
  status?: InputMaybe<OrderStatus>;
}

export interface OrdersInputType {
  address?: InputMaybe<AddressItemObjectType>;
  customer?: InputMaybe<UserInput>;
  driver?: InputMaybe<UserInput>;
  items: Array<OrderItemInputType>;
  options?: InputMaybe<Array<OrderOptionItemInputType>>;
  restaurant?: InputMaybe<RestaurantInput>;
  status: OrderStatus;
  totalPrice?: InputMaybe<Scalars['Float']['input']>;
}

export interface OrdersOutput {
  __typename?: 'OrdersOutput';
  message?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  orders?: Maybe<Array<Order>>;
}

export interface Payment {
  __typename?: 'Payment';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Float']['output'];
  order: Order;
  orderId: Scalars['Int']['output'];
  payment_amount?: Maybe<Scalars['Float']['output']>;
  payment_method: Scalars['String']['output'];
  transactionId: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: User;
}

export interface PaymentsInputType {
  order: OrdersInputType;
  orderId: Scalars['Int']['input'];
  payment_amount?: InputMaybe<Scalars['Float']['input']>;
  payment_method: Scalars['String']['input'];
  transactionId: Scalars['String']['input'];
  user: UserInput;
}

export interface PaymentsOutput {
  __typename?: 'PaymentsOutput';
  message?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  payments?: Maybe<Array<Payment>>;
}

export interface Query {
  __typename?: 'Query';
  Payments: PaymentsOutput;
  getCategories: CategoriesOutput;
  getCategory: CategoryOutput;
  getDish: DishOutput;
  getOrderById: OrderOutput;
  getOrders: OrdersOutput;
  getOwnerRestaurant: RestaurantOutput;
  getOwnerRestaurants: RestaurantsOutput;
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
  dishId: Scalars['Int']['input'];
}


export interface QueryGetOrderByIdArgs {
  data: OrderInputType;
}


export interface QueryGetOrdersArgs {
  data: OrdersInputFilter;
}


export interface QueryGetOwnerRestaurantArgs {
  data: RestaurantInputType;
}


export interface QueryGetOwnerRestaurantsArgs {
  data: RestaurantsInput;
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
  userId: Scalars['Float']['input'];
}

export interface Restaurant {
  __typename?: 'Restaurant';
  address: Scalars['String']['output'];
  category?: Maybe<Category>;
  coverImg: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Float']['output'];
  isOpen: Scalars['Boolean']['output'];
  isPromoted: Scalars['Boolean']['output'];
  menu: Array<Dish>;
  name: Scalars['String']['output'];
  orders: Array<Order>;
  owner: User;
  promotedUntil?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
}

export interface RestaurantInput {
  address: Scalars['String']['input'];
  category?: InputMaybe<CategoryInput>;
  coverImg: Scalars['String']['input'];
  isOpen: Scalars['Boolean']['input'];
  isPromoted: Scalars['Boolean']['input'];
  menu: Array<DishInput>;
  name: Scalars['String']['input'];
  orders: Array<OrdersInputType>;
  owner: UserInput;
  promotedUntil?: InputMaybe<Scalars['DateTime']['input']>;
}

export interface RestaurantInputType {
  restaurantId: Scalars['Int']['input'];
}

export interface RestaurantOutput {
  __typename?: 'RestaurantOutput';
  message?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  restaurant?: Maybe<Restaurant>;
}

export interface RestaurantsInput {
  page?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
}

export interface RestaurantsOutput {
  __typename?: 'RestaurantsOutput';
  message?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  restaurants?: Maybe<Array<Restaurant>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalRestaurants?: Maybe<Scalars['Int']['output']>;
}

export interface SearchRestaurantInput {
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
}

export interface SearchRestaurantOutput {
  __typename?: 'SearchRestaurantOutput';
  message?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  restaurants?: Maybe<Array<Restaurant>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalRestaurants?: Maybe<Scalars['Int']['output']>;
}

export interface Subscription {
  __typename?: 'Subscription';
  cookedOrders: Order;
  pendingOrders: Order;
  pendingPayments: Payment;
  updateOrders: Order;
}

export interface UpdateUserInput {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<UserRole>;
}

export interface UpdateUserOutput {
  __typename?: 'UpdateUserOutput';
  message?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
}

export interface User {
  __typename?: 'User';
  address?: Maybe<Array<AddressItem>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  lastName: Scalars['String']['output'];
  mobile: Scalars['String']['output'];
  orders: Array<Order>;
  password: Scalars['String']['output'];
  payments: Array<Payment>;
  restaurants: Array<Restaurant>;
  rides: Array<Order>;
  role: UserRole;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  verified: Scalars['Boolean']['output'];
}

export interface UserInput {
  address?: InputMaybe<Array<AddressItemObjectType>>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  mobile: Scalars['String']['input'];
  orders: Array<OrdersInputType>;
  password: Scalars['String']['input'];
  payments: Array<PaymentsInputType>;
  restaurants: Array<RestaurantInput>;
  rides: Array<OrdersInputType>;
  role: UserRole;
  verified: Scalars['Boolean']['input'];
}

export interface UserProfileOutput {
  __typename?: 'UserProfileOutput';
  message?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  user?: Maybe<User>;
}

export enum UserRole {
  Admin = 'Admin',
  Client = 'Client',
  Delivery = 'Delivery',
  Owner = 'Owner'
}

export interface ValidateEmailInput {
  code: Scalars['String']['input'];
}

export interface ValidateEmailOutput {
  __typename?: 'ValidateEmailOutput';
  message?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
}

export interface VerifyPaymentInputType {
  refID: Scalars['String']['input'];
  transactionId: Scalars['String']['input'];
}

export interface VerifyPaymentOutput {
  __typename?: 'VerifyPaymentOutput';
  message?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  orderId?: Maybe<Scalars['Float']['output']>;
}

export interface AddUserArgs {
  address?: InputMaybe<Array<AddressItemObjectType>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  mobile: Scalars['String']['input'];
  orders: Array<OrdersInputType>;
  password: Scalars['String']['input'];
  payments: Array<PaymentsInputType>;
  restaurants: Array<RestaurantInput>;
  rides: Array<OrdersInputType>;
  role: UserRole;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  verified: Scalars['Boolean']['input'];
}

export interface CreateAccountInput {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  mobile: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role: UserRole;
}

export interface CreateAccountOutput {
  __typename?: 'createAccountOutput';
  message?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
}

export interface LoginInput {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}

export interface LoginOutput {
  __typename?: 'loginOutput';
  message?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
}

export type LoginMutationVariables = Exact<{
  data: Types.LoginInput;
}>;


export interface LoginMutation { login: { ok: boolean, message: string, token: string } }

export type CreateAccountMutationVariables = Exact<{
  data: Types.CreateAccountInput;
}>;


export interface CreateAccountMutation { createAccount: { ok: boolean, message: string } }

export type ValidateEmailMutationVariables = Exact<{
  data: Types.ValidateEmailInput;
}>;


export interface ValidateEmailMutation { validateEmail: { message: string, ok: boolean } }

export type EditUserProfileMutationVariables = Exact<{
  data: Types.UpdateUserInput;
}>;


export interface EditUserProfileMutation { updateUser: { ok: boolean, message: string } }

export type CreateCategoryMutationVariables = Exact<{
  data: Types.CreateCategoryInput;
}>;


export interface CreateCategoryMutation { createCategory: { ok: boolean, message: string } }

export type CreateRestaurantMutationVariables = Exact<{
  data: Types.CreateRestaurantInput;
}>;


export interface CreateRestaurantMutation { createRestaurant: { ok: boolean, message: string } }

export type EditRestaurantMutationVariables = Exact<{
  data: Types.EditRestaurantInput;
}>;


export interface EditRestaurantMutation { editRestaurant: { ok: boolean, message: string } }

export type DeleteRestaurantMutationVariables = Exact<{
  data: Types.DeleteRestaurantInput;
}>;


export interface DeleteRestaurantMutation { deleteRestaurant: { ok: boolean, message: string } }

export type CreateDishMutationVariables = Exact<{
  data: Types.CreateDishInput;
}>;


export interface CreateDishMutation { createDishe: { ok: boolean, message: string } }

export type DeleteDishMutationVariables = Exact<{
  dishId: number;
}>;


export interface DeleteDishMutation { deleteDish: { ok: boolean, message: string } }

export type EditDishMutationVariables = Exact<{
  data: Types.EditDishInput;
}>;


export interface EditDishMutation { editDish: { ok: boolean, message: string } }

export type CreateOrderMutationVariables = Exact<{
  data: Types.CreateOrderInput;
}>;


export interface CreateOrderMutation { createOrder: { ok: boolean, message: string, orderId: number } }

export type EditOrderMutationVariables = Exact<{
  data: Types.EditOrderInput;
}>;


export interface EditOrderMutation { editOrder: { ok: boolean, message: string } }

export type TakeOrderMutationVariables = Exact<{
  data: Types.OrderInputType;
}>;


export interface TakeOrderMutation { takeOrder: { ok: boolean, message: string, order: { id: number } } }

export type CreatePaymentMutationVariables = Exact<{
  data: Types.CreatePaymentInputType;
}>;


export interface CreatePaymentMutation { createPayment: { ok: boolean, message: string, url: string } }

export type MutationMutationVariables = Exact<{
  data: Types.VerifyPaymentInputType;
}>;


export interface MutationMutation { verifyPayment: { message: string, ok: boolean, orderId: number } }

export type LoggedInUserQueryVariables = Exact<{ [key: string]: never; }>;


export interface LoggedInUserQuery { loggedInUser: { id: number, email: string, role: Types.UserRole, verified: boolean, address: Array<{ id: string, address: string, apartment: string, postalCode: number, region: string, city: string }> } }

export type GetOrdersQueryVariables = Exact<{
  data: Types.OrdersInputFilter;
}>;


export interface GetOrdersQuery { getOrders: { ok: boolean, message: string, orders: Array<{ id: number, totalPrice: number, status: Types.OrderStatus, createdAt: string, driver: { id: number }, customer: { id: number, email: string }, restaurant: { id: number, name: string, coverImg: string } }> } }

export type GetOrderByIdQueryVariables = Exact<{
  data: Types.OrderInputType;
}>;


export interface GetOrderByIdQuery { getOrderById: { ok: boolean, message: string, order: { id: number, createdAt: string, status: Types.OrderStatus, totalPrice: number, options: Array<{ id: string, quantity: number, name: string, extra: number, dishId: number }>, items: Array<{ id: string, quantity: number, photo: string, price: number, name: string, restaurantId: number }>, customer: { id: number, email: string, role: Types.UserRole }, driver: { id: number }, address: { id: string, address: string, apartment: string, postalCode: number, region: string, city: string }, restaurant: { id: number, name: string, isPromoted: boolean, address: string, coverImg: string, isOpen: boolean, category: { id: number, name: string } } } } }

export type RestaurantsQueryVariables = Exact<{
  data: Types.RestaurantsInput;
}>;


export interface RestaurantsQuery { getRestaurants: { ok: boolean, message: string, totalPages: number, totalRestaurants: number, restaurants: Array<{ id: number, name: string, isPromoted: boolean, address: string, coverImg: string, isOpen: boolean, category: { id: number, name: string } }> } }

export type RestaurantsOwnerQueryVariables = Exact<{
  data: Types.RestaurantsInput;
}>;


export interface RestaurantsOwnerQuery { getOwnerRestaurants: { ok: boolean, message: string, totalPages: number, totalRestaurants: number, restaurants: Array<{ id: number, name: string, isPromoted: boolean, address: string, coverImg: string, isOpen: boolean, category: { id: number, name: string } }> } }

export type RestaurantQueryVariables = Exact<{
  data: Types.RestaurantInputType;
}>;


export interface RestaurantQuery { getRestaurant: { ok: boolean, message: string, restaurant: { id: number, name: string, isPromoted: boolean, address: string, coverImg: string, isOpen: boolean, menu: Array<{ id: number, name: string, price: number, description: string, photo: string, options: Array<{ id: string, name: string, extra: number }> }>, category: { id: number, name: string } } } }

export type RestaurantOwnerQueryVariables = Exact<{
  data: Types.RestaurantInputType;
}>;


export interface RestaurantOwnerQuery { getOwnerRestaurant: { ok: boolean, message: string, restaurant: { id: number, name: string, isPromoted: boolean, address: string, coverImg: string, isOpen: boolean, menu: Array<{ id: number, name: string, price: number, description: string, photo: string, options: Array<{ id: string, name: string, extra: number }> }>, orders: Array<{ id: number, status: Types.OrderStatus, totalPrice: number, createdAt: string }>, category: { id: number, name: string } } } }

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export interface CategoriesQuery { getCategories: { message: string, ok: boolean, categories: Array<{ id: number, name: string, slug: string, restaurantCount: number, iconImg: string }> } }

export type SearchRestaurantsQueryVariables = Exact<{
  data: Types.SearchRestaurantInput;
}>;


export interface SearchRestaurantsQuery { searchRestaurants: { ok: boolean, message: string, totalRestaurants: number, totalPages: number, restaurants: Array<{ id: number, name: string, isPromoted: boolean, address: string, coverImg: string, isOpen: boolean, category: { id: number, name: string } }> } }

export type UserProfileQueryVariables = Exact<{
  userId: number;
}>;


export interface UserProfileQuery { userProfile: { ok: boolean, message: string, user: { email: string } } }

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export interface UsersQuery { users: Array<{ id: number, email: string, role: Types.UserRole }> }

export type CategoryQueryVariables = Exact<{
  data: Types.CategoryInputType;
}>;


export interface CategoryQuery { getCategory: { ok: boolean, message: string, totalPages: number, category: { name: string, id: number, iconImg: string, restaurantCount: number, slug: string }, restaurants: Array<{ id: number, name: string, isPromoted: boolean, address: string, coverImg: string, isOpen: boolean, category: { id: number, name: string } }> } }

export type GetDishQueryVariables = Exact<{
  dishId: number;
}>;


export interface GetDishQuery { getDish: { message: string, ok: boolean, totalPages: number, dish: { id: number, name: string, description: string, price: number, photo: string, createdAt: string, updatedAt: string, restaurant: { id: number }, options: Array<{ id: string, name: string, extra: number, quantity: number }> } } }

export type PaymentsQueryVariables = Exact<{ [key: string]: never; }>;


export interface PaymentsQuery { Payments: { ok: boolean, message: string, payments: Array<{ payment_method: string }> } }

export type RestaurantFragmentFragment = { id: number, name: string, isPromoted: boolean, address: string, coverImg: string, isOpen: boolean, category: { id: number, name: string } };

export type DishFragmentFragment = { id: number, name: string, price: number, description: string, photo: string, options: Array<{ id: string, name: string, extra: number }> };

export type OrderFragmentFragment = { id: number, status: Types.OrderStatus, totalPrice: number, createdAt: string };

export type PendingOrderSubSubscriptionVariables = Exact<{ [key: string]: never; }>;


export interface PendingOrderSubSubscription { pendingOrders: { id: number } }

export type UpdateOrdersSubscriptionVariables = Exact<{ [key: string]: never; }>;


export interface UpdateOrdersSubscription { updateOrders: { id: number, status: Types.OrderStatus, totalPrice: number, createdAt: string, driver: { email: string }, restaurant: { id: number, name: string, isPromoted: boolean, address: string, coverImg: string, category: { id: number } }, customer: { id: number } } }

export const RestaurantFragmentFragmentDoc = gql`
    fragment RestaurantFragment on Restaurant {
  id
  name
  isPromoted
  address
  coverImg
  isOpen
  category {
    id
    name
  }
  coverImg
}
    `;
export const DishFragmentFragmentDoc = gql`
    fragment DishFragment on Dish {
  id
  name
  price
  description
  photo
  options {
    id
    name
    extra
  }
}
    `;
export const OrderFragmentFragmentDoc = gql`
    fragment OrderFragment on Order {
  id
  status
  totalPrice
  createdAt
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
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export const CreateAccountDocument = gql`
    mutation createAccount($data: createAccountInput!) {
  createAccount(data: $data) {
    ok
    message
  }
}
    `;
export type CreateAccountMutationResult = ApolloReactCommon.MutationResult<CreateAccountMutation>;
export const ValidateEmailDocument = gql`
    mutation validateEmail($data: ValidateEmailInput!) {
  validateEmail(data: $data) {
    message
    ok
  }
}
    `;
export type ValidateEmailMutationResult = ApolloReactCommon.MutationResult<ValidateEmailMutation>;
export const EditUserProfileDocument = gql`
    mutation EditUserProfile($data: UpdateUserInput!) {
  updateUser(data: $data) {
    ok
    message
  }
}
    `;
export type EditUserProfileMutationResult = ApolloReactCommon.MutationResult<EditUserProfileMutation>;
export const CreateCategoryDocument = gql`
    mutation CreateCategory($data: CreateCategoryInput!) {
  createCategory(data: $data) {
    ok
    message
  }
}
    `;
export type CreateCategoryMutationResult = ApolloReactCommon.MutationResult<CreateCategoryMutation>;
export const CreateRestaurantDocument = gql`
    mutation CreateRestaurant($data: CreateRestaurantInput!) {
  createRestaurant(data: $data) {
    ok
    message
  }
}
    `;
export type CreateRestaurantMutationResult = ApolloReactCommon.MutationResult<CreateRestaurantMutation>;
export const EditRestaurantDocument = gql`
    mutation editRestaurant($data: EditRestaurantInput!) {
  editRestaurant(data: $data) {
    ok
    message
  }
}
    `;
export type EditRestaurantMutationResult = ApolloReactCommon.MutationResult<EditRestaurantMutation>;
export const DeleteRestaurantDocument = gql`
    mutation DeleteRestaurant($data: DeleteRestaurantInput!) {
  deleteRestaurant(data: $data) {
    ok
    message
  }
}
    `;
export type DeleteRestaurantMutationResult = ApolloReactCommon.MutationResult<DeleteRestaurantMutation>;
export const CreateDishDocument = gql`
    mutation createDish($data: CreateDishInput!) {
  createDishe(data: $data) {
    ok
    message
  }
}
    `;
export type CreateDishMutationResult = ApolloReactCommon.MutationResult<CreateDishMutation>;
export const DeleteDishDocument = gql`
    mutation DeleteDish($dishId: Float!) {
  deleteDish(dishId: $dishId) {
    ok
    message
  }
}
    `;
export type DeleteDishMutationResult = ApolloReactCommon.MutationResult<DeleteDishMutation>;
export const EditDishDocument = gql`
    mutation editDish($data: EditDishInput!) {
  editDish(data: $data) {
    ok
    message
  }
}
    `;
export type EditDishMutationResult = ApolloReactCommon.MutationResult<EditDishMutation>;
export const CreateOrderDocument = gql`
    mutation createOrder($data: CreateOrderInput!) {
  createOrder(data: $data) {
    ok
    message
    orderId
  }
}
    `;
export type CreateOrderMutationResult = ApolloReactCommon.MutationResult<CreateOrderMutation>;
export const EditOrderDocument = gql`
    mutation editOrder($data: EditOrderInput!) {
  editOrder(data: $data) {
    ok
    message
  }
}
    `;
export type EditOrderMutationResult = ApolloReactCommon.MutationResult<EditOrderMutation>;
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
export type TakeOrderMutationResult = ApolloReactCommon.MutationResult<TakeOrderMutation>;
export const CreatePaymentDocument = gql`
    mutation CreatePayment($data: CreatePaymentInputType!) {
  createPayment(data: $data) {
    ok
    message
    url
  }
}
    `;
export type CreatePaymentMutationResult = ApolloReactCommon.MutationResult<CreatePaymentMutation>;
export const MutationDocument = gql`
    mutation Mutation($data: VerifyPaymentInputType!) {
  verifyPayment(data: $data) {
    message
    ok
    orderId
  }
}
    `;
export type MutationMutationResult = ApolloReactCommon.MutationResult<MutationMutation>;
export const LoggedInUserDocument = gql`
    query loggedInUser {
  loggedInUser {
    id
    email
    role
    verified
    address {
      id
      address
      apartment
      postalCode
      region
      city
    }
  }
}
    `;
export type LoggedInUserQueryResult = ApolloReactCommon.QueryResult<LoggedInUserQuery, LoggedInUserQueryVariables>;
export const GetOrdersDocument = gql`
    query GetOrders($data: OrdersInputFilter!) {
  getOrders(data: $data) {
    ok
    message
    orders {
      id
      totalPrice
      status
      driver {
        id
      }
      customer {
        id
        email
      }
      createdAt
      restaurant {
        id
        name
        coverImg
      }
    }
  }
}
    `;
export type GetOrdersQueryResult = ApolloReactCommon.QueryResult<GetOrdersQuery, GetOrdersQueryVariables>;
export const GetOrderByIdDocument = gql`
    query GetOrderById($data: OrderInputType!) {
  getOrderById(data: $data) {
    ok
    message
    order {
      id
      createdAt
      status
      totalPrice
      options {
        id
        quantity
        name
        extra
        dishId
      }
      items {
        id
        quantity
        photo
        price
        name
        restaurantId
      }
      customer {
        id
        email
        role
      }
      driver {
        id
      }
      address {
        id
        address
        apartment
        postalCode
        region
        city
      }
      restaurant {
        ...RestaurantFragment
      }
    }
  }
}
    ${RestaurantFragmentFragmentDoc}`;
export type GetOrderByIdQueryResult = ApolloReactCommon.QueryResult<GetOrderByIdQuery, GetOrderByIdQueryVariables>;
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
export type RestaurantsQueryResult = ApolloReactCommon.QueryResult<RestaurantsQuery, RestaurantsQueryVariables>;
export const RestaurantsOwnerDocument = gql`
    query restaurantsOwner($data: RestaurantsInput!) {
  getOwnerRestaurants(data: $data) {
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
export type RestaurantsOwnerQueryResult = ApolloReactCommon.QueryResult<RestaurantsOwnerQuery, RestaurantsOwnerQueryVariables>;
export const RestaurantDocument = gql`
    query Restaurant($data: RestaurantInputType!) {
  getRestaurant(data: $data) {
    ok
    message
    restaurant {
      ...RestaurantFragment
      menu {
        ...DishFragment
      }
    }
  }
}
    ${RestaurantFragmentFragmentDoc}
${DishFragmentFragmentDoc}`;
export type RestaurantQueryResult = ApolloReactCommon.QueryResult<RestaurantQuery, RestaurantQueryVariables>;
export const RestaurantOwnerDocument = gql`
    query restaurantOwner($data: RestaurantInputType!) {
  getOwnerRestaurant(data: $data) {
    ok
    message
    restaurant {
      ...RestaurantFragment
      menu {
        ...DishFragment
      }
      orders {
        ...OrderFragment
      }
    }
  }
}
    ${RestaurantFragmentFragmentDoc}
${DishFragmentFragmentDoc}
${OrderFragmentFragmentDoc}`;
export type RestaurantOwnerQueryResult = ApolloReactCommon.QueryResult<RestaurantOwnerQuery, RestaurantOwnerQueryVariables>;
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
export type CategoriesQueryResult = ApolloReactCommon.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
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
export type SearchRestaurantsQueryResult = ApolloReactCommon.QueryResult<SearchRestaurantsQuery, SearchRestaurantsQueryVariables>;
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
export type UserProfileQueryResult = ApolloReactCommon.QueryResult<UserProfileQuery, UserProfileQueryVariables>;
export const UsersDocument = gql`
    query Users {
  users {
    id
    email
    role
  }
}
    `;
export type UsersQueryResult = ApolloReactCommon.QueryResult<UsersQuery, UsersQueryVariables>;
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
export type CategoryQueryResult = ApolloReactCommon.QueryResult<CategoryQuery, CategoryQueryVariables>;
export const GetDishDocument = gql`
    query getDish($dishId: Int!) {
  getDish(dishId: $dishId) {
    message
    ok
    totalPages
    dish {
      id
      name
      description
      price
      restaurant {
        id
      }
      options {
        id
        name
        extra
        quantity
      }
      photo
      createdAt
      updatedAt
    }
  }
}
    `;
export type GetDishQueryResult = ApolloReactCommon.QueryResult<GetDishQuery, GetDishQueryVariables>;
export const PaymentsDocument = gql`
    query Payments {
  Payments {
    ok
    message
    payments {
      payment_method
    }
  }
}
    `;
export type PaymentsQueryResult = ApolloReactCommon.QueryResult<PaymentsQuery, PaymentsQueryVariables>;
export const PendingOrderSubDocument = gql`
    subscription PendingOrderSub {
  pendingOrders {
    id
  }
}
    `;
export type PendingOrderSubSubscriptionResult = ApolloReactCommon.SubscriptionResult<PendingOrderSubSubscription>;
export const UpdateOrdersDocument = gql`
    subscription UpdateOrders {
  updateOrders {
    id
    status
    driver {
      email
    }
    restaurant {
      id
      name
      isPromoted
      address
      category {
        id
      }
      coverImg
    }
    totalPrice
    customer {
      id
    }
    createdAt
  }
}
    `;
export type UpdateOrdersSubscriptionResult = ApolloReactCommon.SubscriptionResult<UpdateOrdersSubscription>;