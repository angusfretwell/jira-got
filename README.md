jira-got
========

[![Travis](https://img.shields.io/travis/angusfretwell/jira-got.svg)](https://travis-ci.org/angusfretwell/jira-got)
[![Code Climate](https://img.shields.io/codeclimate/github/angusfretwell/jira-got.svg)](https://codeclimate.com/github/angusfretwell/jira-got)
[![Codecov](https://img.shields.io/codecov/c/github/angusfretwell/jira-got.svg)](https://codecov.io/github/angusfretwell/jira-got)
[![NPM Version](http://img.shields.io/npm/v/jira-got.svg)](https://www.npmjs.org/package/jira-got)
[![NPM Downloads](https://img.shields.io/npm/dm/jira-got.svg)](https://www.npmjs.org/package/jira-got)

Convenience wrapper for got to interact with the Jira API

Install
-------

```
$ npm install --save jira-got
```

Usage
-----

```js
import jira from 'jira-got';

jira('user?username=angus', { token: 'foo' }).then(res => {
  console.log(res.body.name);
  //=> 'angus'
});
```

API
---

Same as [`got`](https://github.com/sindresorhus/got) (including the stream API and aliases), but with some additional options:

- **`token`**

	Base64 encoded Jira username and password (`echo -n username:password | base64`).

	Can be set globally with the `JIRA_USERNAME` and `JIRA_PASSWORD` environment variables.

- **`endpoint`**

	Default: `https://jira.atlassian.com/rest/api/latest/`

	Can be set globally with the `JIRA_ENDPOINT` environment variable.

License
-------

The MIT License (MIT)

Copyright (c) 2016 Angus Fretwell
