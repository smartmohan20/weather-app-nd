import app from './app';

const PROTOCOL = process.env.SERVER_PROTOCOL;
const HOSTNAME = process.env.SERVER_HOSTNAME;
const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Server URL: ${PROTOCOL}://${HOSTNAME}:${PORT}`);
});
