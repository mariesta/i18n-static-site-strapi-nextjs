module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '26d09df11866f142a0c5b7f67ecb5ed9'),
  },
});
