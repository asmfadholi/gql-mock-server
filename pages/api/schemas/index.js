import { gql } from "apollo-server-micro";

// query
import { otpStatus } from "./query/otpStatus";
import { getUserDetail } from "./query/getUserDetail";

// mutation
import { loginAuthV3 } from "./mutation/loginAuthV3";
import { otpLoginValidationV3 } from "./mutation/otpLoginValidationV3";

export const typeDefs = gql`
  type UserRole {
    name: String
    id: String
    description: String
  }

  type UserData {
    id: String
    username: String
    email: String
    role: UserRole
  }

  type Errors {
    code: Int
    message: String
  }

  ${otpStatus}
  ${getUserDetail}

  type Query {
    otpStatus(token_id: String!): OtpStatusResponse
    getUserDetail: GetUserDetailResponse
  }

  ${loginAuthV3}
  ${otpLoginValidationV3}

  type Mutation {
    loginAuthV3(email: String!, visitor_id: String!): LoginAuthV3Response
    otpLoginValidationV3(
      token_id: String!
      otp_code: String!
    ): OtpLoginValidationV3Response
  }
`;
