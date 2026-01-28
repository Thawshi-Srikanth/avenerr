import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "src/content");

export interface MDXData {
  slug: string;
  frontMatter: {
    [key: string]: any;
  };
  content: string;
}

export function getPostSlugs(directory: string = "") {
  return fs.readdirSync(path.join(contentDirectory, directory));
}

export function getPostBySlug(slug: string, directory: string = ""): MDXData {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(contentDirectory, directory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    frontMatter: data,
    content,
  };
}

export function getAllPosts(directory: string = ""): MDXData[] {
  const slugs = getPostSlugs(directory);
  const posts = slugs
    .filter((slug) => slug.endsWith(".mdx"))
    .map((slug) => getPostBySlug(slug, directory));
  return posts;
}
