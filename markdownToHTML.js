function HTMLtoMD(markdown) {
//  Reference Library
//      ---------------------------------------
//      ---------------------------------------
    var headers = [
        ['####### ', ['<h7>', '</h7>']],
        ['###### ', ['<h6>', '</h6>']],
        ['##### ', ['<h5>', '</h5>']],
        ['#### ', ['<h4>', '</h4>']],
        ['### ', ['<h3>', '</h3>']],
        ['## ', ['<h2>', '</h2>']],
        ['# ', ['<h1>', '</h1>']]
    ]
    var b1 = true;
    var bold = ['**', ['<b>', '</b>']]

    var i1 = true;
    var italics = ['*', ['<i>', '</i>']]

    var hr = ['---', '<hr>']
//      ---------------------------------------
//      ---------------------------------------


    let lines = markdown.split(/\r\n|\n/);
//  Set heading and bold tags
//      ---------------------------------------
//      ---------------------------------------
    for (i=0; i<headers.length; i++) {
        for (line in lines) {
            if (lines[line].includes(headers[i][0])) {
                lines[line] = lines[line].replace(headers[i][0], headers[i][1][0]) + headers[i][1][1];
            }
            if (lines[line].includes(hr[0])) {
                lines[line] = lines[line].replace(hr[0], hr[1]);
            }
            if (lines[line].includes(bold[0]) && b1) {
                b1 = false;
                lines[line] = lines[line].replace(bold[0], bold[1][0]);

            } else if (lines[line].includes(bold[0]) && !b1) {
                b1 = true;
                lines[line] = lines[line].replace(bold[0], bold[1][1]);

            }

        }
    }
//  Set Italics
//      ---------------------------------------
//      ---------------------------------------
    for (i=0; i<headers.length; i++) {
        for (line in lines) {
            if (lines[line].includes(italics[0]) && i1) {
                i1 = false;
                lines[line] = lines[line].replace(italics[0], italics[1][0]);

            } else if (lines[line].includes(italics[0]) && !i1) {
                i1 = true;
                lines[line] = lines[line].replace(italics[0], italics[1][1]);

            }
        }
    }
    return lines.join('') // Finally returns html for of the markdown text!
  }