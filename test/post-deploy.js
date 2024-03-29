/*
 * Copyright 2020 Adobe. All rights reserved.
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
/* eslint-disable no-unused-expressions */
import assert from 'assert';
import { noCache } from '@adobe/fetch';
import { createTargets } from './post-deploy-utils.js';

createTargets().forEach((target) => {
  const fetchContext = noCache();
  const { fetch } = fetchContext;

  after(async () => {
    await fetchContext.reset();
  });

  describe(`Post-Deploy Tests (${target.title()})`, () => {
    it('status is returned', async () => {
      const url = target.url('');
      const res = await fetch(url);
      assert.strictEqual(res.status, 200);
      const version = target.version.startsWith('ci')
        ? `0.0.0+${target.version}`
        : target.version;
      const json = await res.json();
      delete json.response_time;
      assert.deepStrictEqual(json, {
        process: {},
        status: 'OK',
        version,
      });
    }).timeout(10000);
  });
});
