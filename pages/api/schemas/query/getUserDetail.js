const getUserDetail = `
  type GetUserDetailMedia {
    id: String
    facebook: String
    twitter: String
    linkedin: String
  }

  type GetUserDetailPhoto {
    id: String
    created_at: String
    updated_at: String
    name: String
    mime: String
    size: String
    url: String
    provider: String
  }

  type GetUserDetailData {
    id: String
    created_at: String
    username: String
    provider: String
    address: String
    email: String
    referral_code: String
    phone_number: String
    is_twofactor: Boolean
    profile_progress: Int
    role: UserRole
    media: GetUserDetailMedia
    photo: GetUserDetailPhoto
  }

  type GetUserDetailResponse {
    data: GetUserDetailData
    errors: [Errors]
  }
`;

export { getUserDetail };
