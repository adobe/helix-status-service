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
import { Response } from '@adobe/fetch';
import { report } from '@adobe/helix-status';

/**
 * This is the main function
 * @param {Request} req Universal API Request
 * @param {UniversalContext} context Universal API Context
 * @returns {Response} a status response
 */
export async function main(req, context) {
  const result = await report({}, context.env);
  return new Response(JSON.stringify(result.body), {
    headers: result.headers,
    status: result.statusCode,
  });
}
