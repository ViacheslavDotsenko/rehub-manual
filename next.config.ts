import withMDX from "@next/mdx";

const nextConfig = withMDX({
  extension: /\.mdx?$/, // Додаємо підтримку MDX
})({
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"], // Визначаємо доступні розширення для сторінок
  experimental: {
    appDir: true, // Включаємо підтримку папки `app`
  },
});

export default nextConfig;
