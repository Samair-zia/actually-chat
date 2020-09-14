/**
 * Validators
 * ========================
 * Form Input Validations
 * ========================
 */

/**
 * Miscellaneous Helpers - 01
 * ============================================
 * These are some of the miscellaneous helpers
 * that are used often in the application. Use
 * another file if number of these helpers
 * increases to maintain readability & ease
 * ============================================
 */

// Trim The Characters From Start & End Of Strings Recursively Or Single Time
const trimChar = (string, character, recursive = true) => {
    if (typeof string === 'string') {
        if (string.charAt(0) === character) {
            string = string.substr(1);
            if (recursive) return trimChar(string, character, recursive);
        }

        if (string.charAt(string.length - 1) === character) {
            string = string.substr(0, string.length - 1);
            if (recursive) return trimChar(string, character, recursive);
        }
    }

    return string;
};

// Remove The Given Value From Every Index Of Given Array
const clean = (array, value) => array.filter(item => item !== value);

// PHP Like Function To UpperCase The First Letter Of Word Or Sentence
const uc_first = string => {
    let words = [];
    string.split(' ').forEach(word => {
        words.push(word.trim().charAt(0).toUpperCase() + word.trim().slice(1).toLowerCase());
    });
    return words.join(' ');
};

/**
 * Main function that triggers other validation functions
 * Params:
 * -------
 * 1. input: Input to Validate
 * 2. display_name: Input name to use in errors
 * 3. rules: Validation Rules
 * 4. halt: If true, terminate on first error (default false)
 * ============================================================
 */
window.validate = (input, display_name, rules, halt = false) => {
    let result = [];
    const validations = trimChar(rules, '|').split('|');
    for (const validation of validations) {
        if (validation.indexOf(':') === -1) {
            result.push(window[validation.trim()](input, display_name));
        } else {
            const func_params = validation.split(':');
            result.push(window[func_params[0].trim()](input, display_name, func_params[1].indexOf(',') === -1 ? func_params[1] : func_params[1].split(',')));
        }

        if (halt && result[result.length - 1] !== true) {
            return clean(result, true);
        }
    }

    return clean(result, true);
};

window.email = (input, display_name) => {
    const regex = new RegExp('^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');
    return (typeof input === 'string' && regex.test(input.trim())) || `${uc_first(display_name)} is not valid`;
};

window.alphabetic = (input, display_name) => {
    const regex = new RegExp('^[a-zA-Z.\' ]+$');
    return (typeof input === 'string' && regex.test(input.trim())) || `${uc_first(display_name)} must contain only alphabets`;
};

window.numeric = (input, display_name) => {
    const regex = new RegExp('^[0-9]+$');
    // file DeepCode ignore UseNumberIsNan: It's working fine till now
    return (!isNaN(Number(input)) && regex.test(input)) || `${uc_first(display_name)} should be a valid number`;
};

window.string = (input, display_name) => (typeof input.trim() === 'string') || `${uc_first(display_name)} should be a valid string`;

window.required = (input, display_name) => (input !== '' && input !== null && input !== 0 && input !== false) || `${uc_first(display_name)} is required`;

window.accepted = (input, display_name) => (typeof input === 'boolean' && input) || `Please check ${uc_first(display_name)}`;

window.minVal = (input, display_name, min_val) => (Number(input) >= Number(min_val)) || `${uc_first(display_name)} should be minimum ${Number(min_val)}`;

window.valBtwn = (input, display_name, range) => ((Number(input) > Number(range[0])) && (Number(input) < Number(range[1]))) || `${uc_first(display_name)} should be in range ${Number(range[0])} - ${Number(range[1])}`;

window.maxVal = (input, display_name, max_val) => (Number(input) <= Number(max_val)) || `${uc_first(display_name)} should be maximum ${Number(max_val)}`;

window.minChar = (input, display_name, min_char) => (input.trim().length >= Number(min_char)) || `${uc_first(display_name)} should be at least ${Number(min_char)} characters long`;

window.charBtwn = (input, display_name, range) => ((input.trim().length > Number(range[0])) && (input.trim().length < Number(range[1]))) || `${uc_first(display_name)} should be ${Number(range[0])} to ${Number(range[1])} characters long`;

window.maxChar = (input, display_name, max_char) => (input.trim().length <= Number(max_char)) || `${uc_first(display_name)} should be at most ${Number(max_char)} characters long`;