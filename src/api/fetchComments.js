import { wrapPromise } from "../utils/wrapPromise";

export const fetchComments = (url) => {
  const response = fetch(url).then((res) => res.json());

  return wrapPromise(response);
};
