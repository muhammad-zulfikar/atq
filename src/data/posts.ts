import __posts from "./jsons/__posts.json";
import { CATEGORIES } from "./taxonomies";
import { PostDataType } from "./types";
import { TEACHERS } from "./teachers";

const POSTS = __posts.map((post): PostDataType => {
  const categories = post.categoriesId.map(
    (id) => CATEGORIES.filter((taxonomy) => taxonomy.id === id)[0]
  );

  return {
    ...post,
    author: TEACHERS.filter((user) => user.id === post.authorId)[0],
    categories: [categories[0]],
  } as PostDataType;
});

export { POSTS };
