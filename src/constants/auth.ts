export const SECRET = new TextEncoder().encode(process.env.AUTH_SECRET);

export const TOKEN_COOKIE_NAME = "fram-token";

export const TEST_USER = {
  email: "example@email.com",
  password: "Password123!",
  name: "John Doe",
  newName: "Jane Doe",
};
