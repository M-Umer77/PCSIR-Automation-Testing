const loginData = {
  validUser: {
    email: "superadmin@pcsir.gov.pk",
    password: "SuperAdmin@123",
  },

  invalidUser: {
    email: "wrong@gmail.com",
    password: "123456",
  },

  emptyEmail: {
    email: "",
    password: "SuperAdmin@123",
  },

  emptyPassword: {
    email: "superadmin@pcsir.gov.pk",
    password: "",
  },

  bothEmpty: {
    email: "",
    password: "",
  },

  invalidEmailFormat: {
    email: "invalid-email",
    password: "SuperAdmin@123",
  },

  sqlInjection: {
    email: "' OR '1'='1",
    password: "' OR '1'='1",
  },

  xssAttempt: {
    email: "<script>alert('xss')</script>",
    password: "password",
  },

  longEmail: {
    email: "a".repeat(100) + "@example.com",
    password: "SuperAdmin@123",
  },

  longPassword: {
    email: "superadmin@pcsir.gov.pk",
    password: "a".repeat(100),
  },

  specialChars: {
    email: "test@#$%^&*().com",
    password: "!@#$%^&*()",
  },
};

export default loginData;
