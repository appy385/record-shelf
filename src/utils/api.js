import axios from 'axios';

export const getSongs = async () => {
  const opts = { headers: { accept: 'text/plain', Authorization: `Bearer ${process.env.REACT_APP_TOKEN}` } };
  const res = await axios.get('/api/records', opts);
  return res.data;
};

// export default getSongs;
