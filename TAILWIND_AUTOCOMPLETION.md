# Tailwind CSS Autocompletion Setup

This guide will help you set up Tailwind CSS autocompletion (intellisense) in your code editor.

## Visual Studio Code

1. Install the [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) extension from the VS Code marketplace.

2. Make sure your VS Code settings include:
   ```json
   {
     "editor.quickSuggestions": {
       "strings": true
     },
     "tailwindCSS.includeLanguages": {
       "javascript": "javascriptreact",
       "html": "HTML"
     },
     "editor.inlineSuggest.enabled": true
   }
   ```

3. Restart VS Code after installation.

## WebStorm / IntelliJ IDEA

1. Install the [Tailwind CSS Plugin](https://plugins.jetbrains.com/plugin/15321-tailwind-css) from JetBrains Marketplace.

2. Restart your IDE after installation.

## Sublime Text

1. Install [LSP](https://packagecontrol.io/packages/LSP) and [LSP-tailwindcss](https://packagecontrol.io/packages/LSP-tailwindcss) packages via Package Control.

2. Restart Sublime Text after installation.

## Atom

1. Install the [atom-tailwindcss](https://atom.io/packages/atom-tailwindcss) package.

2. Restart Atom after installation.

## Vim/Neovim

1. Install [coc.nvim](https://github.com/neoclide/coc.nvim) for Vim/Neovim.

2. Install the Tailwind CSS extension:
   ```
   :CocInstall coc-tailwindcss
   ```

## Troubleshooting

If autocompletion isn't working after setting up the extensions:

1. Make sure your project has a valid `tailwind.config.js` file.
2. Ensure that the content paths in your `tailwind.config.js` include all your source files:
   ```js
   module.exports = {
     content: [
       "./src/**/*.{js,jsx,ts,tsx,html,css}",
     ],
     // ...
   }
   ```
3. Try restarting your editor.
4. Check if there are any errors in your editor's console or output panel.

## Using Tailwind CSS Classes

For the specific class mentioned in your issue (`max-w-screen-lg`), this is a Tailwind CSS utility class that sets the maximum width of an element to match the `lg` screen breakpoint (1280px in your configuration).

To use it correctly, add it to the `className` prop in your JSX:

```jsx
<div className="max-w-screen-lg">
  {/* Your content here */}
</div>
```

Other similar classes include:
- `max-w-screen-sm` (900px in your configuration)
- `max-w-screen-md` (1024px in your configuration)
- `max-w-screen-xl` (1536px in your configuration)
- `max-w-screen-2xl` (100% in your configuration)