export const NOTIFICATIONS = {
  success: {
    profileUpdate: "Profile successfully updated",
  },
};

export const ERRORS = {
  default: "Something went wrong",
  min: {
    default: "This is required field",
    password: "Password should contain at least 6 characters",
  },
  format: {
    email: "Invalid email format",
    cardCVC: "CVC should contain 3 or 4 digits",
    cardNumber: "Card number should contain from 16 to 19 digits",
    cardExpirationDate: "Please follow MM/YY format",
  },
  auth: {
    invalidCredentials:
      "Incorrect email or password. Please check and try again",
    registeredEmail: "This email address is already registered",
  },
};
