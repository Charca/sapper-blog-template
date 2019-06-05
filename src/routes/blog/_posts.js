const fs = require('fs')
const path = require('path')
const highlightjs = require('highlight.js')
const marked = require('marked')
const matter = require('gray-matter')

const cwd = process.cwd()
const POSTS_DIR = path.join(cwd, 'src/routes/blog/posts/')
const escapeMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}
const escapeHtml = code => code.replace(/([&<>'"])/g, char => escapeMap[char])
const renderer = new marked.Renderer()

renderer.code = (code, language) => {
  const validLang = !!(language && highlightjs.getLanguage(language))
  const highlighted = validLang
    ? highlightjs.highlight(language, code).value
		: escapeHtml(code)

  return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`
}

marked.setOptions({ renderer })

const posts = fs.readdirSync(POSTS_DIR)
	.filter(fileName => /\.md$/.test(fileName))
	.map(fileName => {
		const fileMd = fs.readFileSync(path.join(POSTS_DIR, fileName), 'utf8')
		const { data, content } = matter(fileMd)
		const { title } = data
		const slug = fileName.split('.')[0]

		return {
			title: title || slug,
			slug,
			html: marked(content),
		}
	})

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '')
})

export default posts
