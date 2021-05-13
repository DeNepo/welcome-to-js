let loggedIn = false;

while (!loggedIn) {
  let didAgree = confirm('do you agree to our terms of service?');
  if (didAgree === true) {
    alert('welcome to social media!');
    loggedIn = true;
  } else {
    alert('not an option, you must agree');
  }
}
