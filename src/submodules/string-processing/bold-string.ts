export const boldString = (str: string, ...shouldBold: string[]) => {
    let result = str;
    shouldBold.forEach(toReplace => {
        result = result.replaceAll(toReplace, `<b>${toReplace}</b>`);
    });

    return result;
};