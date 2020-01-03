var tagarray = [
    "A",
    "ABBR",
    "ACRONYM",
    "ADDRESS",
    "APPLET",
    "AREA",
    "ARTICLE",
    "ASIDE",
    "AUDIO",
    "B",
    "BASE",
    "BASEFONT",
    "BDI",
    "BDO",
    "BIG",
    "BLOCKQUOTE",
    "BODY",
    "BR",
    "BUTTON",
    "CANVAS",
    "CAPTION",
    "CENTER",
    "CITE",
    "CODE",
    "COL",
    "COLGROUP",
    "DATA",
    "DATALIST",
    "DD",
    "DEL",
    "DETAILS",
    "DFN",
    "DIALOG",
    "DIR",
    "DIV",
    "DL",
    "DT",
    "EM",
    "EMBED",
    "FIELDSET",
    "FIGCAPTION",
    "FIGURE",
    "FONT",
    "FOOTER",
    "FORM",
    "FRAME",
    "FRAMESET",
    "H1",
    "H2",
    "H3",
    "H4",
    "H5",
    "H6",
    "HEAD",
    "HEADER",
    "HR",
    "HTML",
    "I",
    "IFRAME",
    "IMG",
    "INPUT",
    "INS",
    "KBD",
    "LABEL",
    "LEGEND",
    "LI",
    "LINK",
    "MAIN",
    "MAP",
    "MARK",
    "META",
    "METER",
    "NAV",
    "NOFRAMES",
    "NOSCRIPT",
    "OBJECT",
    "OL",
    "OPTGROUP",
    "OPTION",
    "OUTPUT",
    "P",
    "PARAM",
    "PICTURE",
    "PRE",
    "PROGRESS",
    "Q",
    "RP",
    "RT",
    "RUBY",
    "S",
    "SAMP",
    "SCRIPT",
    "SECTION",
    "SELECT",
    "SMALL",
    "SOURCE",
    "SPAN",
    "STRIKE",
    "STRONG",
    "STYLE",
    "SUB",
    "SUMMARY",
    "SUP",
    "SVG",
    "TABLE",
    "TBODY",
    "TD",
    "TEMPLATE",
    "TEXTAREA",
    "TFOOT",
    "TH",
    "THEAD",
    "TIME",
    "TITLE",
    "TR",
    "TRACK",
    "TT",
    "U",
    "UL",
    "VAR",
    "VIDEO",
    "WBR"
];

tagarray.forEach(tagSelector);

function tagSelector(it, ind) {
    let tags = document.getElementsByTagName(it);
    if (tags.length != 0) {
        console.log(tags);
        for (var i = 0; i < tags.length; i++) {
            let col1 = Math.random() * 255;
            let col2 = Math.random() * 255;
            let col3 = Math.random() * 255;
            let col4 = Math.random() * 255;
            let col5 = Math.random() * 255;
            let col6 = Math.random() * 255;
            tags[i].style.color = "rgba(" + col1 + ", " + col2 + ", " + col3 + ")";
            tags[i].style.backgroundColor = "rgba(" + col4 + ", " + col5 + ", " + col6 + ")";
            let weight = Math.round(Math.random() * 2);
            if (weight == 1) {
                tags[i].style.fontWeight = "normal";
            } else {
                tags[i].style.fontWeight = "bold";
            }
            let size = Math.random() * 64;
            tags[i].style.fontSize = size + "px";
            let fontFam = Math.round(Math.random() * 25);
            if (fontFam == 1) {
                tags[i].style.fontFamily = "Arial, sans-serif";
            } else if (fontFam == 2) {
                tags[i].style.fontFamily = "Helvetica, sans-serif";
            } else if (fontFam == 3) {
                tags[i].style.fontFamily = "Gill Sans, sans-serif";
            } else if (fontFam == 4) {
                tags[i].style.fontFamily = "Lucida, sans-serif";
            } else if (fontFam == 5) {
                tags[i].style.fontFamily = "Helvetica Narrow, sans-serif";
            } else if (fontFam == 6) {
                tags[i].style.fontFamily = "Times, serif";
            } else if (fontFam == 7) {
                tags[i].style.fontFamily = "Times New Roman, serif";
            } else if (fontFam == 8) {
                tags[i].style.fontFamily = "Palatino, serif";
            } else if (fontFam == 9) {
                tags[i].style.fontFamily = "Bookman, serif";
            } else if (fontFam == 10) {
                tags[i].style.fontFamily = "New Century Schoolbook, serif";
            } else if (fontFam == 11) {
                tags[i].style.fontFamily = "Andale Mono, monospace";
            } else if (fontFam == 12) {
                tags[i].style.fontFamily = "Courier New, monospace";
            } else if (fontFam == 13) {
                tags[i].style.fontFamily = "Courier, monospace";
            } else if (fontFam == 14) {
                tags[i].style.fontFamily = "Lucidatypewriter, monospace";
            } else if (fontFam == 15) {
                tags[i].style.fontFamily = "Fixed, monospace";
            } else if (fontFam == 16) {
                tags[i].style.fontFamily = "Comic Sans, cursive";
            } else if (fontFam == 17) {
                tags[i].style.fontFamily = "Zapf Chancery, cursive";
            } else if (fontFam == 18) {
                tags[i].style.fontFamily = "Coronetscript, cursive";
            } else if (fontFam == 19) {
                tags[i].style.fontFamily = "Florence, cursive";
            } else if (fontFam == 20) {
                tags[i].style.fontFamily = "Parkavenue, cursive";
            } else if (fontFam == 21) {
                tags[i].style.fontFamily = "Impact, fantasy";
            } else if (fontFam == 22) {
                tags[i].style.fontFamily = "Arnoldboeklin, fantasy";
            } else if (fontFam == 23) {
                tags[i].style.fontFamily = "Oldtown, fantasy";
            } else if (fontFam == 24) {
                tags[i].style.fontFamily = "Blippo, fantasy";
            } else {
                tags[i].style.fontFamily = "Brushstroke, fantasy";
            }
            let opac = Math.random() + 0.7;
            tags[i].style.opacity = opac;
            let marg1 = Math.random() * 5;
            let marg2 = Math.random() * 5;
            let marg3 = Math.random() * 5;
            let marg4 = Math.random() * 5;
            tags[i].style.marginTop = marg1 + "px";
            tags[i].style.marginBottom = marg2 + "px";
            tags[i].style.marginLeft = marg3 + "px";
            tags[i].style.marginRight = marg4 + "px";
            let pad1 = Math.random() * 25;
            let pad2 = Math.random() * 25;
            let pad3 = Math.random() * 25;
            let pad4 = Math.random() * 25;
            tags[i].style.paddingTop = pad1 - "px";
            tags[i].style.paddingBottom = pad2 + "px";
            tags[i].style.paddingLeft = pad3 - "px";
            tags[i].style.paddingRight = pad4 + "px";
        }
    }
}