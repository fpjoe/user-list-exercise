export function isValidEmail(text) {
  if ( text && text.match(/^ *[A-Za-z0-9\.\!\#\$\%\&\'\*\+\-\/\=\?\^\_\`\{\|\}\~]+@[A-Za-z0-9.-]+\.[A-Za-z]+ *$/) ) {
    return true;
  } else {
    return false;
  }
};
