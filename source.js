import got from 'got';

function jira(path, opts) {
  if (typeof path !== 'string') {
    return Promise.reject(new TypeError(`Expected 'path' to be a string, got ${typeof path}`));
  }

  const env = process.env;
  const token = new Buffer(`${env.JIRA_USERNAME}:${env.JIRA_PASSWORD}`).toString('base64');

  opts = Object.assign({
    token,
    json: true,
    endpoint: env.JIRA_ENDPOINT
      ? env.JIRA_ENDPOINT.replace(/[^/]$/, '$&/')
      : 'https://jira.atlassian.com/rest/api/latest/',
  }, opts);

  opts.headers = Object.assign({
    accept: 'application/json',
  }, opts.headers);

  if (opts.token) {
    opts.headers.authorization = `Basic ${opts.token}`;
  }

  const url = /https?/.test(path) ? path : opts.endpoint + path;

  if (opts.stream) {
    return got.stream(url, opts);
  }

  return got(url, opts);
}

const helpers = [
  'get',
  'post',
  'put',
  'patch',
  'head',
  'delete',
];

jira.stream = (url, opts) => jira(url, Object.assign({}, opts, { json: false, stream: true }));

for (const x of helpers) {
  const method = x.toUpperCase();
  jira[x] = (url, opts) => jira(url, Object.assign({}, opts, { method }));
  jira.stream[x] = (url, opts) => jira.stream(url, Object.assign({}, opts, { method }));
}

export default jira;
