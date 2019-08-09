
exports.formatFrom = (from) => {
  if (from.charAt(0) == "/") from = from.substr(1);

  if (!from.includes("index.html")) {
    from = from.endsWith("/") ? from : from + "/";
    from += "index.html";
  }
  return from;
}

exports.formatTo = (to) => {
  return to.charAt(0) == "/" ? to : "/" + to;
}
