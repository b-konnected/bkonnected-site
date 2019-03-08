export const required = value => value ? undefined : 'Required';

// export const maxLength = max => value =>
//     value && value.length > max ? `Must be ${max} characters or less` : undefined
// export const maxLength15 = maxLength(15)

export const zipcode = value => value && isNaN(Number(value)) ? 'Invalid Zip Code' : undefined;

// export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined

export const year = value => value && isNaN(Number(value)) && value > 2019 && value < 1900 ? 'Invalid Zip Code' : undefined;

// export const minValue = min => value =>
//     value && value < min ? `Must be at least ${min}` : undefined
// export const minValue18 = minValue(18)

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined;

// export const tooOld = value =>
//     value && value > 65 ? 'You might be too old for this' : undefined
// export const aol = value =>
//     value && /.+@aol\.com/.test(value) ?
//         'Really? You still use AOL for your email?' : undefined

export const requiredCheckbox = value => (!value || value.length === 0) ? "Required" : "";

const normalizePhone = (value) => {
    if (!value) {
        return value
    }

    const onlyNums = value.replace(/[^\d]/g, '');
    if (onlyNums.length <= 3) {
        return onlyNums
    }
    if (onlyNums.length <= 7) {
        return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`
    }
    return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 6)}-${onlyNums.slice(6, 10)}`
};

export default normalizePhone