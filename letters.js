var h = 25;

var lettersDraw = function(roughCanvas, letter, x, y) {
    switch(letter) {
        case 'A':
            roughCanvas.linearPath([[x-.3*h, y+h/2], [x, y-h/2], [x+.3*h, y+h/2]]);
            roughCanvas.line(x-.15*h, y, x+.15*h, y)
            break;
        case 'B':
            roughCanvas.line(x-.3*h, y-h/2,x-.3*h, y+h/2);
            roughCanvas.curve([[x-.3*h, y-h/2], [x+.3*h, y-h/4], [x-.3*h, y]])
            roughCanvas.curve([[x-.3*h, y+h/2], [x+.3*h, y+h/4], [x-.3*h, y]])
            break;
        case 'C':
            roughCanvas.arc(x, y, h*.6, h, Math.PI/4, 7*Math.PI/4, false);
            break;
        case 'D':
            roughCanvas.line(x-.3*h, y-h/2,x-.3*h, y+h/2);
            roughCanvas.curve([[x-.3*h, y-h/2], [x+.3*h, y], [x-.3*h, y+h/2]])
            break;
        case 'E':
            roughCanvas.line(x-.3*h, y-h/2,x-.3*h, y+h/2);
            roughCanvas.line(x-.3*h, y-h/2, x+.3*h, y-h/2);
            roughCanvas.line(x-.3*h, y, x+.3*h, y);
            roughCanvas.line(x-.3*h, y+h/2, x+.3*h, y+h/2);
            break;
        case 'F':
            roughCanvas.line(x-.3*h, y-h/2,x-.3*h, y+h/2);
            roughCanvas.line(x-.3*h, y-h/2, x+.3*h, y-h/2);
            roughCanvas.line(x-.3*h, y, x+.3*h, y);
            break;
        case 'G':
            roughCanvas.arc(x, y, h*.6, h, Math.PI/4, 7*Math.PI/4, false);
            roughCanvas.linearPath([[x, y], [x+.3*h, y], [x+.3*h, y+h/2]]);
            break;
        case 'H':
            roughCanvas.line(x-.3*h, y-h/2,x-.3*h, y+h/2);
            roughCanvas.line(x-.3*h, y, x+.3*h, y);
            roughCanvas.line(x+.3*h, y-h/2,x+.3*h, y+h/2);
            break;
        case 'I':
            roughCanvas.line(x, y-h/2,x, y+h/2);
            roughCanvas.line(x-.3*h, y-h/2, x+.3*h, y-h/2);
            roughCanvas.line(x-.3*h, y+h/2, x+.3*h, y+h/2);
            break;
        case 'J':
            roughCanvas.line(x-.3*h, y-h/2, x+.3*h, y-h/2);
            roughCanvas.curve([[x, y-h/2], [x, y+h/4],[x-h*.15, y+h/2],[x-h*.3, y+h/4]])
            break;
        case 'K':
            roughCanvas.line(x-.3*h, y-h/2,x-.3*h, y+h/2);
            roughCanvas.line(x-.3*h, y, x+.3*h, y-h/2);
            roughCanvas.line(x-.3*h, y, x+.3*h, y+h/2);
            break;
        case 'L':
            roughCanvas.line(x-.3*h, y-h/2,x-.3*h, y+h/2);
            roughCanvas.line(x-.3*h, y+h/2, x+.3*h, y+h/2);
            break;
        case 'M':
            roughCanvas.linearPath([[x-.4*h, y+h/2],[x-.4*h, y-h/2], [x, y+h/2],[x+.4*h, y-h/2],[x+.4*h, y+h/2]]);
            break;
        case 'N':
            roughCanvas.linearPath([[x-.3*h, y+h/2],[x-.3*h, y-h/2], [x+.3*h, y+h/2], [x+.3*h, y-h/2]]);
            break;
        case 'O':
            roughCanvas.ellipse(x, y, h*.6, h);
            break;
        case 'P':
            roughCanvas.line(x-.3*h, y-h/2,x-.3*h, y+h/2);
            roughCanvas.curve([[x-.3*h, y-h/2], [x+.3*h, y-h/4], [x-.3*h, y]])
            break;
        case 'Q':
            roughCanvas.ellipse(x, y, h*.6, h);
            roughCanvas.line(x, y+h/4, x+.3*h, y+h/2)
            break;
        case 'R':
            roughCanvas.line(x-.3*h, y-h/2,x-.3*h, y+h/2);
            roughCanvas.curve([[x-.3*h, y-h/2], [x+.3*h, y-h/4], [x-.3*h, y]]);
            roughCanvas.line(x-.1*h, y, x+.3*h, y+h/2)
            break;
        case 'S':
            roughCanvas.curve([[x+.3*h, y-.31*h], [x, y-h/2], [x-.3*h, y-.31*h], [x, y], [x+.3*h, y+.31*h], [x, y+h/2], [x-.3*h, y+.31*h]]);
            break;
        case 'T':
            roughCanvas.line(x, y-h/2,x, y+h/2);
            roughCanvas.line(x-.3*h, y-h/2, x+.3*h, y-h/2);
            break;
        case 'U':
            roughCanvas.curve([[x-.3*h, y-h/2], [x-.3*h, y+h/4], [x, y+h/2], [x+.3*h, y+h/4], [x+.3*h, y-h/2]]);
            break;
        case 'V':
            roughCanvas.linearPath([[x-.3*h, y-h/2],[x, y+h/2],[x+.3*h, y-h/2]])
            break;
        case 'W':
            roughCanvas.linearPath([[x-.3*h, y-h/2],[x-.3*h, y+h/2], [x, y],[x+.3*h, y+h/2],[x+.3*h, y-h/2]]);
            break;
        case 'X':
            roughCanvas.line(x-.3*h, y-h/2, x+.3*h, y+h/2);
            roughCanvas.line(x+.3*h, y-h/2, x-.3*h, y+h/2);
            break;
        case 'Y':
            roughCanvas.line(x-.3*h, y-h/2, x, y);
            roughCanvas.line(x+.3*h, y-h/2, x, y);
            roughCanvas.line(x, y, x, y+h/2)
            break;
        case 'Z':
            roughCanvas.linearPath([[x-.3*h, y-h/2], [x+.3*h, y-h/2], [x-.3*h, y+h/2], [x+.3*h, y+h/2]]);
            break;
    }
}
