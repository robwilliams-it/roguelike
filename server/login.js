
const login = (credentials, callback) => {
  const creds = credentials.body;
  console.log(creds);
  if (creds.email.includes('@') && creds.password !== '') {
    callback('good', null);
  } else {
    callback(null, 'bad');
  }
};

module.exports = {
  login
}