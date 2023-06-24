

/** @type {import('next').NextConfig} */
const nextConfig = {
  
}
const withMDX = require('@next/mdx')({
  
  options: {
    
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})
module.exports = withMDX(nextConfig)
// module.exports = nextConfig
