import truncate from 'truncate';
import { isValidEmail } from './validationUtils';

export default function truncateText(text, numChars) {
  // truncate function doesn't truncate text containing the '@' symbol
  // correctly (can't find any info on Internet on this bug), so we:
  //   1. temporarily replace all '@' chars with ':' chars
  //   2. pass the text into the truncate function
  //   3. replace all ':' back with '@' chars
  // *only if* text looks like an email address
  //
  // If the text looks like an email address, it's unlikely (though
  // not guaranteed) to contain any ':' chars - yes, there's a small
  // possibility that the text is an email address AND contains a ':' char,
  // OR that the text is NOT an email address but looks like one and
  // contains a ':' char (in both of those edge cases this function would
  // erroneously replace all actual instances of ':' with '@' in the
  // return value), but we're willing to live with that rare case
  var replacedAtSymbol = false;
  if ( text && isValidEmail(text) ) {
    text = text.replace(/@/g,':');
    replacedAtSymbol = true;
  }
  text = truncate(text, numChars);
  if (replacedAtSymbol) {
    text = text.replace(/:/g,'@');
  }
  return text;
};
