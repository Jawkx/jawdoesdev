import fs from "fs"
import * as cheerio from 'cheerio';
import markdownit from 'markdown-it';

const md = markdownit()

const styleMd = ($) => {
    $('h1').addClass('text-white text-4xl font-bold mb-5')
    $('h2').addClass('text-white text-3xl font-semibold mt-5 mb-2')
    $('h3').addClass('text-white text-2xl')
    $('p').addClass('text-white text-md')
    $('a').addClass('text-violet-500 hover:underline')
    $('a').attr('target', '_blank')
}

const $home = cheerio.load(fs.readFileSync("src/index.html", "utf8"))
const $homeContent = cheerio.load(md.render(fs.readFileSync("src/home.md", "utf8")))

const $blog = cheerio.load(fs.readFileSync("src/blog.html", "utf8"))
const $rambles = cheerio.load(fs.readFileSync("src/rambles.html", "utf8"))

styleMd($homeContent)

$home('[id=main]').html($homeContent.html())

fs.writeFileSync("output/index.html", $home.html())
fs.writeFileSync("output/home.html", $home.html())
fs.writeFileSync("output/blog.html", $blog.html())
fs.writeFileSync("output/rambles.html", $rambles.html())
