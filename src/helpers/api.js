import ky from 'ky';

const api = ky.create({
  prefixUrl: 'http://localhost:8080/api/v1',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    'Set-Cookie':
      '_mentor_in_session=kLkANfPr008aHET%2B2Bajnn%2BY4QIKq%2Bp0XW%2F78um%2FC2kMsZPFoL9H0FkRy%2B8OrFyimC6BiW45StI48EtiK9weaiydHAFoSDxahiXhF%2Fg8muAUVXJPVC0UQ5QTaLpC3Oqz2zjbyO0LN6Hr4FrwTcz2v23ySDD%2FL486dYkqU6Tr2zpbF5VA%2FiB5NjlPrG3pQ%2BhEX7iOfkIsbPk3Ec%2BbSo6CyE0CfYa60DXuNj9kxSkoVI7%2F8vaiV5%2FsUa%2BhTk%2BgnEf9p34ycdCO46Yks2hiW6LfnQDExrvsdul1NUbC8mgM18ZtX7UdL7kHT%2B%2FrXQWz1hiudHVXwJGMG8gMM2%2BwU3Q7Ky9xizY3qCQtFS1Urfj%2FRHDX25%2F%2B9OQ3%2FdAVQy1oDf0LM%2BAPtJK8RBKxRvnogBzZ4SVwwafFFyudgTMdYK%2BWYNk3BlyPTxuV0jSiyVmE4WqUzCipDqMWgGp2x96wbLKP6yvBmgo09y%2BulbvxEA0B7f86kQNY346mHJ5Cg0Xlcv8xPIUoF5X8iBDGjQ%3D%3D--FQswuZgz17E0Rg8G--%2FGtYjhxg3qWJjfeZ1CdQdA%3D%3D; path=/; HttpOnly',
  },
});

export default api;
