export const filter = (text, posts) => {
    if (!text) {
        return posts;
    }
    const regex = new RegExp(`(^|\\s)${text}`, "iu");
    return posts.filter(({ name }) => regex.test(name.toLowerCase()));
};