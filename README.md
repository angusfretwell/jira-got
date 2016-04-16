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

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
