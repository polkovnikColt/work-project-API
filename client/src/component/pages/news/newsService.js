export const cut = (text,hasPhoto) => {
    const split = text.split('').filter((item, index) => {
        if(index >= 0 && index <= (hasPhoto ? 100 : 200)) return item;
    });
    return split.join('').concat('...');
}