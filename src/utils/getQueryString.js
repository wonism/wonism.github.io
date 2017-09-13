export default ((name, search) => {
  const purifiedName = name.replace(/[[\]]/g, '\\$&');

  const regex = new RegExp(`[?&]${purifiedName}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(search);

  if (!results) {
    return null;
  } else if (!results[2]) {
    return '';
  }

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
});
