function getTLD(domain) {
  return domain.split(".").pop();
}

module.exports = getTLD;