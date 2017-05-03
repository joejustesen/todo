import strictUriEncode from 'strict-uri-encode';

export function stringToUrl(str) {
    return strictUriEncode(str);
}