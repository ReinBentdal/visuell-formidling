
const key = "USER_INFO";

export function applyVisit(name) {
    const userInfoRaw = localStorage.getItem(key);
    const userInfo = userInfoRaw ? JSON.parse(userInfoRaw) : [];
    if (!userInfo.includes(name))
        userInfo.push(name);
    console.log(userInfo);
    localStorage.setItem(key, JSON.stringify(userInfo));
}

export function getVisits() {
    const userInfoRaw = localStorage.getItem(key);
    return userInfoRaw ? JSON.parse(userInfoRaw) : [];
}