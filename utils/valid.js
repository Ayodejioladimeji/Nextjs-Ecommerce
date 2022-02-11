const valid = (username, email, password) => {
  if (!username || !email || !password) {
    return 'Input fields cannot be empty';
  }

  if (!validateEmail) return 'Invalid email';

  if (password.length < 8) return 'Password must be at least 8 characters';
};

function validateEmail(email) {
  var re =
    /^(([^<>()[]\\.,;:\s@\"]+(\.[^<>()[]\\.,;:\s@\"]+)*)|(\".+\"))@(([[0-9]{1,3}\‌​.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export default valid;
