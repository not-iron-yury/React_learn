import { useMemo } from "react";

export const useSortedPosts = (posts, select) => {
  
  const sortedPostList = useMemo(() => {
    if (select) {
      return [...posts].sort((a, b) => a[select].localeCompare( b[select]))
    }
    return posts;
  }, [posts, select]);


  return sortedPostList;
}

export const usePosts = (posts, select, search) => {
  const sortedPostList = useSortedPosts(posts, select);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPostList.filter(post => post.title.toLowerCase().includes(search.toLowerCase()))
  }, [search, sortedPostList]);

  return sortedAndSearchedPosts;
}