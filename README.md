<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Juniper Studio Gatsby Project
</h1>

## 🚀 Quick start

1.  **Start developing.**

    Navigate into your site's directory and start it up.

    ```shell
    cd js4/
    npm run develop
    ```

    Or using Docker:

    ```shell
    cd js4/
    docker-compose up
    ```

2.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

## 📝 Creating Routes in Gatsby

In Gatsby, routes are automatically created based on the file structure in the `src/pages` directory. Each JavaScript or TypeScript file in this directory becomes a route.

### How to Create a New Route

1. Create a new JavaScript file in the `src/pages` directory
2. Name the file according to the desired URL path (e.g., `about.js` creates the `/about` route)
3. Create a React component in the file
4. Export the component as the default export

### Example

For example, to create an "About" page at the URL `/about`:

```jsx
// src/pages/about.js
import * as React from "react"
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  )
}

export default AboutPage
```

### Dynamic Routes

For dynamic routes (like blog posts), you can use Gatsby's File System Route API by naming your files with special syntax:

```
src/pages/blog/{slug}.js  // Creates routes like /blog/my-post
```

Or use Gatsby's `createPages` API in `gatsby-node.js` for more complex routing.

## 🐳 Docker Setup

This project includes Docker configuration for easy development:

### Starting the Development Server

```bash
# Build and start the Docker container
docker-compose up

# The site will be available at http://localhost:8000
# GraphiQL will be available at http://localhost:9000/___graphql
```

### Development Notes

- The Docker setup includes volume mapping, so your code changes will be reflected in real-time
- Node modules are cached in a Docker volume for better performance
- The container exposes ports 8000 (Gatsby dev server) and 9000 (GraphiQL)

## 🔗 Learn more about Gatsby

- [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
- [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
- [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
- [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
- [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
- [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
