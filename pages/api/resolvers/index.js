export const resolvers = {
  Mutation: {
    loginAuthV3: () => {
      return {
        data: {
          token_id: "sd6xhjs",
        },
        errors: [],
      };
    },

    otpLoginValidationV3: () => {
      return {
        data: {
          jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUxNTQ3OTg2LCJleHAiOjE2NTQxMzk5ODZ9.Pa2QBGNMos9qcReaXmQZnZvudyubfPr9hS6CR-pHhdg",
          user: {
            id: "1",
            username: "user",
            email: "user@mailinator.com",
            role: {
              name: "user",
              id: "3",
            },
          },
        },
        errors: [],
      };
    },
  },
  Query: {
    otpStatus: () => {
      return {
        data: {
          is_expired: false,
          total_resend: 2,
          waiting_resend: "110s",
        },
        errors: [],
      };
    },

    getUserDetail: (ctx, arg) => {
      console.log(JSON.stringify(arg));
      return {
        data: {
          id: "1",
          created_at: "2021-08-18",
          username: "user",
          provider: "local",
          address: "jl. street",
          email: "user@mailinator.com",
          profile_progress: 80,
          media: {
            id: "1",
            facebook: "face",
            twitter: "twit",
            linkedin: "link",
          },
          role: {
            name: "user",
            id: "3",
          },
          photo: {
            id: "2",
            created_at: "2021-08-18",
            updated_at: "2021-08-18",
            name: "Joman",
            mime: "Joman",
            size: "Joman",
            url: "Joman",
            provider: "local",
          },
          phone_number: "082828282",
          is_twofactor: false,
        },
        errors: [],
      };
    },
  },
};
