export function handleSubmitLogin(e) {
  e.preventDefault();
  const surname = e.target[0].value;
  const password = e.target[1].value;
  const value = {
    surname: surname,
    password: password,
  };
  console.log(value);
}

export function handleSubmitSignup(e) {
  e.preventDefault();
  const email = e.target[0].value;
  const surname = e.target[1].value;
  const password = e.target[2].value;
  const verifPassword = e.target[3].value;

  if (password !== verifPassword) {
    console.log("error password isn't identic");
  } else {
    const value = {
      email: email,
      surname: surname,
      password: password,
    };
    console.log(value);
  }
}
