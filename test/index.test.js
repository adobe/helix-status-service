/*
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

/* eslint-env mocha */
const assert = require('assert');
const { Request } = require('@adobe/helix-fetch');
const { main } = require('../src/index.js');
const pkgJson = require('../package.json');

describe('Index Tests', () => {
  it('index function returns a response', async () => {
    const resp = await main(new Request('https://helix-status-service.com'), {});
    assert.equal(resp.status, 200);
    const status = await resp.json();
    assert.ok(status.response_time !== undefined);
    delete status.response_time;
    assert.deepEqual(status, {
      process: {},
      status: 'OK',
      version: pkgJson.version,
    });
  });
});
