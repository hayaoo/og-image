
import { readFileSync } from 'fs';
import marked from 'marked';
import { sanitizeHtml } from './sanitizer';
import { ParsedRequest } from './types';
// import { Logo } from './svg';
const twemoji = require('twemoji');
const twOptions = { folder: 'svg', ext: '.svg' };
const emojify = (text: string) => twemoji.parse(text, twOptions);

const rglr = readFileSync(`${__dirname}/../_fonts/NotoSansJP-Bold.woff`).toString('base64');

function getCss() {

    return `
    /* noto-sans-jp-regular - latin */
    @font-face {
        font-family: 'Noto Sans JP';
        font-style: normal;
        font-weight: 400;
        src: url(data:font/woff;charset=utf-8;base64,${rglr}) format('woff');
    }

    body {
        background: #FFF;
        background-image: url('/mesh-gradient.png');
        background-size: cover;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 100px;
    }

    code {
        color: #D400FF;
        font-family: 'Vera';
        white-space: pre-wrap;
        letter-spacing: -5px;
    }

    code:before, code:after {
        content: '\`';
    }

    .logo-wrapper {
        width: 100%;
        text-align: right;
    }

    .logo {
        margin: 0 75px;
    }

    .plus {
        color: #BBB;
        font-family: Times New Roman, Verdana;
        font-size: 100px;
    }

    .spacer {
        padding: 90px 100px 80px;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        background: #fff;
        borderRadius: 1em;
    }

    .emoji {
        height: 1em;
        width: 1em;
        margin: 0 .05em 0 .1em;
        vertical-align: -0.1em;
    }
    
    .heading {
        font-family: 'Noto Sans JP', sans-serif;
        font-size: 80px;
        color: #333;
        letter-spacing: 0.04em;
        line-height: 1.5;
        width: 90%;
    }`;
}

export function getHtml(parsedReq: ParsedRequest) {
    const { text, md } = parsedReq;
    return `<!DOCTYPE html>
<html>
    <meta charset="utf-8">
    <title>Generated Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        ${getCss()}
    </style>
    <body>
        <div class="spacer">
            <div class="heading">
            ${emojify(
                md ? marked(text) : sanitizeHtml(text)
            )}
            </div>
            <div class="logoWrapper">
                hoge
            </div>
        </div>
    </body>
</html>`;
}

// function getImage(src: string, width ='auto', height = '225') {
//     return `<img
//         class="logo"
//         alt="Generated Image"
//         src="${sanitizeHtml(src)}"
//         width="${sanitizeHtml(width)}"
//         height="${sanitizeHtml(height)}"
//     />`
// }
