const Store = {
    get: (field) => {
        const data = localStorage.getItem(field) ? JSON.parse(localStorage.getItem(field)) : '';
        return data;
    },
    create: (field, body) => {
        localStorage.setItem(field, JSON.stringify(body));
    },
    delete: (field) => {
        localStorage.removeItem(field);
    }
}

const ClipText = (text, length = 50) => {
    let cutText = ``;
    if (text.length > length) {
        for(let i = 0; i < length; i++) {
            cutText += text[i];
        }
        cutText += '...';
    } else cutText = text;
    return cutText;
}