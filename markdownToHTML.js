function HTMLtoMD(markdown) {
//  Reference Library
//      ---------------------------------------
//      ---------------------------------------
    var headings = [
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

    var ul = ['- ', ['<ul>', '<li>', '</li>', '</ul>']]
    listLineIndex = []
//      ---------------------------------------
//      ---------------------------------------


    let lines = markdown.split(/\r\n|\n/);
//  Set heading and bold tags
//      ---------------------------------------
//      ---------------------------------------
    for (i=0; i<headings.length; i++) {
        for (line in lines) {
            if (lines[line].includes(headings[i][0])) {
                lines[line] = lines[line].replace(headings[i][0], headings[i][1][0]) + headings[i][1][1];
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
    for (line in lines) {
        if (lines[line].includes(italics[0]) && i1) {
            i1 = false;
            lines[line] = lines[line].replace(italics[0], italics[1][0]);

        }
        if (lines[line].includes(italics[0]) && !i1) {
            i1 = true;
            lines[line] = lines[line].replace(italics[0], italics[1][1]);

        }
        if (lines[line] == '') {
            lines[line] = '<br>'
        }
    }
//  Set UL
//      ---------------------------------------
//      ---------------------------------------
    for (line in lines) { // make index of lines making a list
        if (lines[line].includes(ul[0])) {
            listLineIndex.push(line);

        }
    }
    
    for (x in listLineIndex) {
        if (x == 0 && lines[listLineIndex[x]].includes(ul[0])) {
//                        console.log(lines[listLineIndex[x]])
            lines[listLineIndex[x]] = lines[listLineIndex[x]].replace(ul[0], ul[1][0] + ul[1][1]) + ul[1][2];
            listLineIndex[x] = -1;
//                        console.log(lines[listLineIndex[x]])
        } else if (x == listLineIndex.length && lines[listLineIndex[x]].includes(ul[0])) {
            lines[listLineIndex[x]] = lines[listLineIndex[x]].replace(ul[0], ul[1][1]) + ul[1][2] + ul[1][3];
            listLineIndex[x] = -1;
        } else if (lines[listLineIndex[x]].includes(ul[0])) {
            lines[listLineIndex[x]] = lines[listLineIndex[x]].replace(ul[0], ul[1][1]) + ul[1][2];
            listLineIndex[x] = -1;
        }

    }
    console.log(listLineIndex)
    return lines.join('') // Finally returns html for of the markdown text!
  }
