export default ((name, search) => {
  if (!search) {
    search = document.location.search;
  }

  name = name.replace(/[\[\]]/g, "\\$&");

  const regex = new RegExp(`[?&]${ name }(=([^&#]*)|&|#|$)`);
  const results = regex.exec(search);

  if (!results) {
    return null;
  } else if (!results[2]) {
    return '';
  } else {
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
});
