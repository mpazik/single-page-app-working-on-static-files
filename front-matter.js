define(['node_modules/js-yaml/dist/js-yaml'], (parser) => {
    const optionalByteOrderMark = '\\ufeff?';
    const pattern = '^(' +
        optionalByteOrderMark +
        '(= yaml =|---)' +
        '$([\\s\\S]*?)' +
        '(?:\\2|\\.\\.\\.)' +
        '$(?:\\n)?)';

    const regex = new RegExp(pattern, 'm');

    return function (string) {
        const match = regex.exec(string);

        if (!match) {
            return {
                attributes: {},
                body: string
            }
        }

        const yaml = match[match.length - 1].replace(/^\s+|\s+$/g, '');
        const attributes = parser.load(yaml) || {};
        const body = string.replace(match[0], '');

        return {attributes: attributes, body: body}
    }
});
