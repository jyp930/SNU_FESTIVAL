export function getPasswordFromEmail(email = 'jyp930@snu.ac.kr') {
  const asciiFromEmail = email.split('').map(char => char.charCodeAt(0));
  const salt = asciiFromEmail[0] * asciiFromEmail[3] * asciiFromEmail[5];
  const passwordNumbers = [
    asciiFromEmail[0] * asciiFromEmail[1] * salt,
    asciiFromEmail[1] * asciiFromEmail[2] * salt,
    asciiFromEmail[2] * asciiFromEmail[3] * salt,
    asciiFromEmail[3] * asciiFromEmail[4] * salt,
    asciiFromEmail[4] * asciiFromEmail[5] * salt,
  ];
  return passwordNumbers.map(number => (number % 26) + 65);
}
