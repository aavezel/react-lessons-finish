export const inc = () => ({ type : "INC" });

export const dec = () => ({ type : "DEC" });

export const add = (payload) => ({ type : "ADD", payload });

export const rnd = () => {
    const payload = Math.floor(Math.random() * 10);
    return { type : "ADD", payload }
};
