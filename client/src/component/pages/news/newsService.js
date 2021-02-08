export const cut = (text) => {
    const split = text.split('').filter((item, index) => {
        if(index >= 0 && index <= 200) return item;
    });
    return split.join('').concat('...');
}