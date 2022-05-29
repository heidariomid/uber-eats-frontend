import {gql} from '@apollo/client';

export const LOGIN_MUTATION = gql`
	mutation login($data: loginInput!) {
		login(data: $data) {
			ok
			message
			token
		}
	}
`;
export const SIGN_UP_MUTATION = gql`
	mutation createAccount($data: createAccountInput!) {
		createAccount(data: $data) {
			ok
			message
		}
	}
`;

export const VALIDATE_EMAIL = gql`
	mutation validateEmail($data: ValidateEmailInput!) {
		validateEmail(data: $data) {
			message
			ok
		}
	}
`;

export const EDIT_USER_PROFILE = gql`
	mutation EditUserProfile($data: UpdateUserInput!) {
		updateUser(data: $data) {
			ok
			message
		}
	}
`;

// export const DELETE_COMMENT = gql`
// 	mutation ($id: Int!) {
// 		deleteComment(id: $id) {
// 			isCommentDeleted
// 			error
// 		}
// 	}
// `;

// export const TOGGLE_FOLLOW_STATUS = gql`
// 	mutation ($userName: String!) {
// 		toggleFollowStatus(userName: $userName) {
// 			isToggleSuccess
// 			message
// 			error
// 		}
// 	}
// `;

// export const UPLOAD_PHOTO = gql`
// 	mutation ($file: String!, $caption: String) {
// 		uploadPhoto(file: $file, caption: $caption) {
// 			file
// 		}
// 	}
// `;

// export const DELETE_PHOTO = gql`
// 	mutation DeletePhoto($photoId: Int!) {
// 		deletePhoto(id: $photoId) {
// 			isPhotoDeleted
// 			error
// 		}
// 	}
// `;
