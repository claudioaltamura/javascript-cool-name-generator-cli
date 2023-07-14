export function generate(name) {
  const chars = "0123456789!@#$%^&*()";
  let ret = "";

  for (var i = 0; i <= name.length-1; i++) {
    if(name[i] == 'a' || name[i] == 'e' || name[i] == 'i' || name[i] == 'u' || name[i] == 'o') {
      let randomNumber = Math.floor(Math.random() * chars.length);
      let randomCharacter = chars.substring(randomNumber, randomNumber + 1);
      ret += randomCharacter;
    } else {
      ret+= name[i];
    }
  }

  return ret;
}