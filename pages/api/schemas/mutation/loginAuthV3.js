const loginAuthV3 = `
  type LoginAuthV3Data {
    token_id: String
  }

  type LoginAuthV3Response {
    data: LoginAuthV3Data
    errors: [Errors]
  }
`;

export { loginAuthV3 };
