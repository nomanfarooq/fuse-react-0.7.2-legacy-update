/**
 * @copyright DMS Pvt Ltd - https://dms
 * @author NomanFarooq <nomanfarooq1432@gmail.com>
 * @since 2022-02-17
 */

/**
 * @public
 * @static
 * Convert text into title case
 * @param {string} str - Input text
 * @return {string}
 */
export function titleCase(str) {
    if (typeof (str) === "string") {
        var splitStr = str?.toLowerCase().split(" ");
        for (var i = 0; i < splitStr.length; i++) {
            // You do not need to check if i is larger than splitStr length, as your for does that for you
            // Assign it back to the array
            splitStr[i] =
                splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        // Directly return the joined string
        return splitStr.join(" ");
    }
}

/**
 * @public
 * @static
 * Strip chars after given limit
 * @param {string} str - Source text
 * @param {number} stripAfterChars=0 - Strip chars when limit exceeded (0 = no limit)
 * @param {string} separator='...' - Combine separator
 * @returns {string}
 */
export function stripChars(str, stripAfterChars = 0, separator = "...") {
    const value = String(str || "").trim();
    const formatted = !value ? "" : value;

    return formatted.length &&
    stripAfterChars &&
    formatted.length > stripAfterChars
        ? `${formatted.substring(0, stripAfterChars)}${separator}`
        : formatted;
}

/**
 * @public
 * @static
 * Format a name
 * @param {string} name - The name
 * @param {number} stripAfterChars=0 - Strip chars when limit exceeded (0 = no limit)
 * @param {string} defaultValue='Noname' - Default value in case of null or empty
 * @returns {string}
 */
export function formatName(name, stripAfterChars = 0, defaultValue = "Noname") {
    const value = String(name || "").trim();
    const formatted = !value ? defaultValue : titleCase(value.toLowerCase());

    return formatted.length &&
    stripAfterChars &&
    formatted.length > stripAfterChars
        ? `${formatted.substring(0, stripAfterChars)}...`
        : formatted;
}

/**
 * @public
 * @static
 * Format a name as avatar prefix
 * @param {string} name - The name
 * @param {number} counts=3 - Number of words count
 * @param {string} defaultValue='NN' - Default value in case of null or empty
 * @returns {string}
 */
export function nameToPrefix(name, counts = 3, defaultValue = "NN") {
    const value = String(name || "").trim();

    if (!value) {
        return defaultValue;
    }

    /** @type {Array<string>} */
    const parts = value.match(/\b(\w)/g);

    return !parts ? defaultValue : parts.slice(0, counts).join("")?.toUpperCase();
}

/**
 * @public
 * @static
 * Strip that which exceed the given length
 * @param {string} text - Input text
 * @param {number} length - Max chars limit
 * @return {string} - Stripped text
 */
export function stripTextByLength(text, length) {
    return String(text ?? "").slice(0, length);
}

/**
 * @public
 * @static
 * Check that given value is email or not
 * @param {string} email - Email address
 * @return {boolean}
 */
export function validateEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email || "").toLowerCase());
}

/**
 * @public
 * @static
 * Slugify text
 * @param {string} str - Input text
 * @return {string}
 */
export function slugify(str) {
    return String(str || "").trim();
}
