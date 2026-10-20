import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function paintBeforeScript() {
  return {
    name: 'paint-before-script',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        if (ctx.server) return html
        const css = html.match(/<link rel="stylesheet" crossorigin href="([^"]+)">/)
        const js = html.match(/<script type="module" crossorigin src="([^"]+)"><\/script>/)
        if (!css || !js) return html
        const loader = `<link rel="preload" as="style" crossorigin href="${css[1]}" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" crossorigin href="${css[1]}"></noscript><script>setTimeout(function(){var s=document.createElement('script');s.type='module';s.crossOrigin='anonymous';s.src='${js[1]}';document.body.appendChild(s)},0)</script>`
        return html.replace(css[0], '').replace(js[0], '').replace('</body>', `${loader}</body>`)
      },
    },
  }
}

export default defineConfig({
  plugins: [react(), paintBeforeScript()],
})
