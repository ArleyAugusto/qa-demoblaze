/** Guardar funções auxiliares */

export function randomUsername() {
  const length = Math.floor(Math.random() * 5) + 5; 
  return Math.random().toString(36).substring(2, 2 + length);
}

export function randomPassword(exclude = '') {
  let password = '';
  do {
    const length = Math.floor(Math.random() * 5) + 5; 
    password = Math.random().toString(36).substring(2, 2 + length);
  } while (password === exclude);  
  return password;
}