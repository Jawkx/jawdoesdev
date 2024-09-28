import fs from "fs"
import * as cheerio from 'cheerio';
import markdownit from 'markdown-it';
import path from "path";

const md = markdownit()

const styleMd = ($) => {
    $('h1').addClass('text-white text-4xl font-bold mb-5')
    $('h2').addClass('text-white text-3xl font-semibold mt-5 mb-2')
    $('h3').addClass('text-white text-2xl')
    $('p').addClass('text-white text-md')
    $('a').addClass('text-violet-500 hover:underline')
    $('a').attr('target', '_blank')
}

// Reading
const $home = cheerio.load(fs.readFileSync("src/html/index.html", "utf8"))
const $homeContent = cheerio.load(md.render(fs.readFileSync("src/md/home.md", "utf8")))

const $blog = cheerio.load(fs.readFileSync("src/html/blog.html", "utf8"))
const $rambles = cheerio.load(fs.readFileSync("src/html/rambles.html", "utf8"))

// Styling
styleMd($homeContent)

// Compiling
$home('[id=main]').html($homeContent.html())

// Writing
fs.writeFileSync("output/index.html", $home.html())
fs.writeFileSync("output/home.html", $home.html())
fs.writeFileSync("output/blog.html", $blog.html())
fs.writeFileSync("output/rambles.html", $rambles.html())

const srcFolder = './src/assets';
const destFolder = './output';

fs.readdir(srcFolder, (err, files) => {
    if (err) {
        console.error(err);
    } else {
        files.forEach((file) => {
            const srcPath = path.join(srcFolder, file);
            const destPath = path.join(destFolder, file);
            fs.copyFile(srcPath, destPath, (err) => {
                if (err) {
                    console.error(err);
                }
            });
        });
    }
});
