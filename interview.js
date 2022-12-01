//get 

// {
    // key: `user_id`,
    // value: `123`,
// }

const MAX_CACHE_AMOUNT = 2;

const cache = [];

const getLRUCache = (key) => {
    const result = cache.filter(item => item?.key === key);
    console.log(`🚀 🚀  ->   getLRUCache  result`, result);
    return result;
}

const setLRUCache = (key, value) => {
    if (cache?.length < MAX_CACHE_AMOUNT) {
        const valueToSet = { key, value }
        cache.push(valueToSet);
    } else { 
        cache.shift();
        cache.push({ key, value });
    }
    console.log(cache)
}

const user1 = {
    key: `user_id`,
    value: 1234,
};

const user2 = {
    key: `user_id2`,
    value: 1234,
};

const user3 = {
    key: `user_id3`,
    value: 1234,
};

setLRUCache(`user_id`, user1);
setLRUCache(`user_id2`, user2);
getLRUCache(`user_id`);

setLRUCache(`user_id3`, user3);

getLRUCache(`user_id`);