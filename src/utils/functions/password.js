export function getPasswordFromEmail(email = 'test123@snu.ac.kr', password = 1) {
  const asciiFromEmail = email.split('').map(char => char.charCodeAt(0));
  const salt = asciiFromEmail[0] + asciiFromEmail[3] + asciiFromEmail[5] + password;
  const passwordNumbers = [
    (asciiFromEmail[0] + asciiFromEmail[1] + salt * 3),
    (asciiFromEmail[2] + asciiFromEmail[3] + salt * 5),
    (asciiFromEmail[4] + asciiFromEmail[5] + salt * 7),
    (asciiFromEmail[0] + asciiFromEmail[5] + salt * 11),
    (asciiFromEmail[2] + asciiFromEmail[4] + salt * 17),
  ];
  return passwordNumbers.map(number => String.fromCharCode((number % 26) + 65)).join('');
}
