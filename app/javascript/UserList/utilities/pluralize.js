export default function pluralize(quantity,strSingular, strPlural = `${strSingular}s` ) {
  const word = ( Number(quantity) == 1 ? strSingular : strPlural );
  return `${quantity || 0} ${word}`;
};
