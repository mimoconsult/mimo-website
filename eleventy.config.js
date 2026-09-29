export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets", "src/admin": "admin", "src/uploads": "uploads", "src/favicon.svg": "favicon.svg" });
  eleventyConfig.addCollection("articles", (api) =>
    api.getFilteredByGlob("src/articles/*.md").sort((a, b) => b.date - a.date)
  );
  const pad = (n) => String(n).padStart(2, "0");
  eleventyConfig.addFilter("twDate", (d) => `${d.getFullYear()}.${pad(d.getMonth() + 1)}.${pad(d.getDate())}`);
  eleventyConfig.addFilter("isoDate", (d) => d.toISOString().slice(0, 10));
  eleventyConfig.addFilter("catSlug", (name, list) => {
    const c = (list || []).find((x) => x.name === name);
    return c ? c.slug : "";
  });
  eleventyConfig.addFilter("countCat", (arr, name) => (arr || []).filter((a) => a.data.category === name).length);
  eleventyConfig.addFilter("head", (arr, n) => (arr || []).slice(0, n));
  return { dir: { input: "src", includes: "_includes", output: "_site" }, markdownTemplateEngine: false, htmlTemplateEngine: "njk" };
}
