const otpStatus = `
  type OtpStatusData {
    is_expired: Boolean
    total_resend: Int
    waiting_resend: String
  }

  type OtpStatusResponse {
    data: OtpStatusData
    errors: [Errors]
  }
`;

export { otpStatus };
