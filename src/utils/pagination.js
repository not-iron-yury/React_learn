export const getPageCount = (countPosts, limit) => {
  return Math.ceil(countPosts / limit)
};