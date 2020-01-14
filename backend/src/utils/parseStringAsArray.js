export default function utils(arrayAsString) {
  return arrayAsString.split(',').map(item => item.trim());
}
