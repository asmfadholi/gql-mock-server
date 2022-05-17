const otpLoginValidationV3 = `

  type OtpLoginValidationV3Data {
    jwt: String
    user: UserData
  }

  type OtpLoginValidationV3Response {
    data: OtpLoginValidationV3Data
    errors: [Errors]
  }
`;

export { otpLoginValidationV3 };
