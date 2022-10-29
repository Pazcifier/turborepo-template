const withTM = require("next-transpile-modules")(["@proyects/ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
