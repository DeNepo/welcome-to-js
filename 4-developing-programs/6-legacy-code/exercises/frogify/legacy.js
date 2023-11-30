/* Analyze the legacy code.

  Developer:

  - Formatting:
  - Variable Names:
  - Comments:
  - Logs:

  User:

  - Clear Instructions:
  - Helpful Feedback:
  - Consistency:
  - Tone of Voice:

  Computer:

  - Variables and Types:
  - Data Input:
  - Control Flow:
  - Operations:

*/

tbf = null
while (tbf == null)
  tbf = prompt(
    'frogify this.\n' +
      '"f" -> "frog"\n' +
      '"F" -> "FROG"'
  )

fd = ''
for (i = 0; i < tbf.length; i++) {
  ch = tbf[i]

  if (ch == 'f') fd = fd + 'frog'
  else if (ch == 'F') fd = fd + 'FROG'
  else fd = fd + ch
}

alert(fd)
