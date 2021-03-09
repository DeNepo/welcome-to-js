/* this exercise has 0 distractors */

let favoriteColor = null;
while (favoriteColor === null) {
  favoriteColor = prompt('please enter your favorite color');
}

let confirmedFavoriteColor = confirm(
  'are you sure "' + favoriteColor + '" is your favorite color?'
);

if (confirmedFavoriteColor) {
  alert('nice.  your favorite color is "' + favoriteColor + '"');
} else {
  alert('well then, what is it?');
}
