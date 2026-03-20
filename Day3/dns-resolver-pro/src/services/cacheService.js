const cache = {};

function setCache(domain, ip, ttl) {
  const expiry = Date.now() + ttl * 1000;
  cache[domain] = { ip, expiry };
}

function getCache(domain) {
  const data = cache[domain];

  if (!data) return null;

  if (Date.now() > data.expiry) {
    delete cache[domain];
    return null;
  }

  return data.ip;
}

module.exports = { setCache, getCache };