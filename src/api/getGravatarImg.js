import md5 from 'crypto-js/md5';

const gravatarImg = (email) => {
  const hash = md5(email).toString();
  const url = `https://www.gravatar.com/avatar/${hash}`;
  return url;
};
export default gravatarImg;
