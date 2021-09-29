const valid = (name, email, password, cf_password) => {
  if (!name || !email || !password) return "plaese add all fildes";
  if (!validateEmail(email)) return "invalid email.";
  if (password.length < 8) return "password must be at least 8 charachter.";
  if (password !== cf_password) return "confirm password did not match.";
};

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export default valid;
