const initialState = {
  theme: 'dark',
  width: 100,
  fontSize: 30,
};

const customProps = {
  theme: 'light',
  color: 'red',
};

/**
 * ESERCIZIO
 *
 * Fai il Merge tra gli oggetti 'initialState' e 'customProps'
 * NOTA: 'customProps' deve sovrascrivere eventuali proprietà di 'initialState'
 *
 * Puoi usare due tecniche: provale entrambe
 *
 * 1: utilizza Object.assign()
 * 2. utilizza l'object spread operator, ad es:  {...obj}
 *
 *
 * GOAL
 *
 * {"theme":"light","width":100,"fontSize":30,"color":"red"}
 */

export const result = Object.assign(initialState,customProps); // replace this code with yours
console.log(result);
const res = {...initialState,...customProps}
console.log(res)
document.querySelector('#output').innerHTML = JSON.stringify(result);
