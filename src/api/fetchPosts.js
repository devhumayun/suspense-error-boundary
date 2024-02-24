import { wrapPromise } from "../utils/wrapPromise";

export const fetchPosts = (url) => {
  const response = fetch(url).then((res) => res.json());

  return wrapPromise(response);
};
