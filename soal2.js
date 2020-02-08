const is_username_valid = username =>
    /^[a-z]{5,9}/.test(username);

const is_password_valid = password =>
    /[a-zA-Z0-9_!@#$%^&*+-=]{8,}/.test(password);

console.log(is_username_valid("cod3r"));
console.log(is_username_valid("siska"));
console.log(is_password_valid("p4s$gW"));
console.log(is_password_valid("codeYourFuture!123"));