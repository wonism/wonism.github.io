const headers = {
  Accept: 'application/vnd.github.VERSION.raw',
  'Content-Type': 'application/vnd.github.jean-grey-preview+json; charset=UTF-8',
};

function fetchData(action) {
  const { url } = action;

  return fetch(url, {
    method: 'GET',
    headers: {
      ...headers,
    },
  });
}

export { fetchData, fetchData as default };
