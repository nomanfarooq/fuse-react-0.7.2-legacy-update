import moment from 'moment';
import op from 'object-path';

/**
 * Storage library built on localStorage API
 * @example
 *
 * ```
 * import * as Storage from './../storage';
 *
 * - Get a value:
 * const value = await Storage.get('<key>');
 *
 * - Set a value:
 * await Storage.set('<key>', 'new value');
 *
 * - Check for existing key:
 * const exists = await Storage.has('<key>');
 *
 * - Remove existing key:
 * await Storage.remove('<key>');
 *
 * - Get or set value by logic
 * const value = await Storage.getSet(async () => {
 *   return 'Value';
 * }, '<key>');
 * ```
 */

/**
 * @public
 * @static
 * Retrieve value from storage
 * @param {string} key - Key name
 * @param {any} [defaultValue=null] - Default value in case of null
 * @returns {Promise<any>} - Stored value
 */
export async function get ( key, defaultValue = null ) {
  /** @type {string} */
  const storedValue = localStorage.getItem(key);

  if ( !storedValue ) {
    return defaultValue;
  }

  let jsonData = null;

  try {
    jsonData = JSON.parse(storedValue);
  } catch ( e ) {
    return defaultValue;
  }

  const value = op.get(jsonData, 'value');
  const timestamp = op.get(jsonData, 'timestamp');

  if ( timestamp === 0 ) {
    return value;
  }

  const duration = moment(timestamp, 'YYYY-MM-DD HH:mm:ss');
  const diff = duration.diff(moment(), 'seconds');

  if ( diff > 0 ) {
    return value;
  }

  await remove(key);
  return defaultValue;
}

/**
 * @public
 * @static
 * Retrieve value from storage
 * @param {string} key - Key name
 * @param {any} value - Value to store
 * @param {string} duration=0 - Expire duration in seconds [0 for no expiry]
 * @returns {Promise<null|any>} - Stored value
 */
export async function set ( key, value, duration = 0 ) {
  const timestamp = !duration
    ? 0
    : moment().add(duration, 'seconds').format('YYYY-MM-DD HH:mm:ss');

  return localStorage.setItem(key, JSON.stringify({value, timestamp}));
}

/**
 * @public
 * @static
 * Get computed value from storage based on duration
 * @param {Promise<function>} callback - A callback function
 * @param {string} [key=null] - The key
 * @param {any} [defaultValue=null] - Default value in case of null
 * @param {string} duration=0 - Expire duration in seconds [0 for no expiry]
 * @returns {Promise<any>}
 */
export async function getSet ( callback, key = null, defaultValue = null, duration = 0 ) {
  if ( !key ) {
    return await callback();
  }

  const storedValue = await get(key, defaultValue);

  if ( storedValue !== null ) {
    return storedValue;
  }

  const computedValue = await callback();
  await set(key, computedValue, duration);

  return computedValue;
}

/**
 * @public
 * @static
 * Check the value by key exists in storage
 * @param {string} key - Key name
 * @returns {Promise<boolean>} - Stored value
 */
export async function has ( key ) {
  /** @type {string} */
  return localStorage.getItem(key) !== null;
}

/**
 * @public
 * @static
 * Remove value by key from storage
 * @param {string} key - Key name
 * @returns {Promise<null|any>} - Stored value
 */
export async function remove ( key ) {
  return localStorage.removeItem(key);
}

/**
 * @public
 * @static
 * Get value by key - once only (remove immediately once retrieved)
 * @param {string} key - Key name
 * @param {any} [defaultValue=null] - Default value in case of none
 * @returns {Promise<null|any>} - Stored value
 */
export async function flashGet ( key, defaultValue = null ) {
  const _key = `FLASH:${key}`;

  if ( !(await has(_key)) ) {
    return defaultValue;
  }

  const value = await get(_key);
  await remove(_key);
  return value;
}

/**
 * @public
 * @static
 * Srt a flash key
 * @param {string} key - Key name
 * @param {any} value - Value to store
 * @returns {Promise<null|any>} - Stored value
 */
export async function flashSet ( key, value ) {
  await set(`FLASH:${key}`, value);
}
