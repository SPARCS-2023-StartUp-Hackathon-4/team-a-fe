import { ServerResponse } from 'http';

export const redirect = (
  res: ServerResponse,
  destination: string,
  statusCode = 302,
) => {
  if (res) {
    res.writeHead(statusCode, { Location: destination });
    res.end();
  }
};
