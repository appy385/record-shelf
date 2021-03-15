import axios from 'axios';

export const getSongs = async () => {
  const opts = { headers: { accept: 'text/plain', Authorization: `Bearer ${process.env.REACT_APP_TOKEN}` } };
  const res = await axios.get('/api/records', opts);
  return res.data;
};

export const getLikes = async (id) => {
  const opts = { headers: { Authorization: `Bearer ${process.env.REACT_APP_TOKEN}` } };
  const res = await axios.get(`/api/records/${id}/likes`, opts);
  return res.data;
};

export const updateLike = async (id, value) => {
  const body = {
    like: value,
  };
  const opts = { headers: { Authorization: `Bearer ${process.env.REACT_APP_TOKEN}` } };
  const res = await axios.patch(`/api/records/${id}/likes`, body, opts);
  return res.data;
};

// export default getSongs;
