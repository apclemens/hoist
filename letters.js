var lettersDraw = function(roughCanvas, letter, x, y, h, options) {
    switch(letter) {
        case 'A':
            roughCanvas.linearPath([[x-.3*h, y+h/2], [x, y-h/2], [x+.3*h, y+h/2]], options);
            roughCanvas.line(x-.15*h, y, x+.15*h, y, options)
            break;
        case 'B':
            roughCanvas.line(x-.3*h, y-h/2,x-.3*h, y+h/2, options);
            roughCanvas.curve([[x-.3*h, y-h/2], [x+.3*h, y-h/4], [x-.3*h, y]], options)
            roughCanvas.curve([[x-.3*h, y+h/2], [x+.3*h, y+h/4], [x-.3*h, y]], options)
            break;
        case 'C':
            roughCanvas.arc(x, y, h*.6, h, Math.PI/4, 7*Math.PI/4, false, options);
            break;
        case 'D':
            roughCanvas.line(x-.3*h, y-h/2,x-.3*h, y+h/2, options);
            roughCanvas.curve([[x-.3*h, y-h/2], [x+.3*h, y], [x-.3*h, y+h/2]], options)
            break;
        case 'E':
            roughCanvas.line(x-.3*h, y-h/2,x-.3*h, y+h/2, options);
            roughCanvas.line(x-.3*h, y-h/2, x+.3*h, y-h/2, options);
            roughCanvas.line(x-.3*h, y, x+.3*h, y, options);
            roughCanvas.line(x-.3*h, y+h/2, x+.3*h, y+h/2, options);
            break;
        case 'F':
            roughCanvas.line(x-.3*h, y-h/2,x-.3*h, y+h/2, options);
            roughCanvas.line(x-.3*h, y-h/2, x+.3*h, y-h/2, options);
            roughCanvas.line(x-.3*h, y, x+.3*h, y, options);
            break;
        case 'G':
            roughCanvas.arc(x, y, h*.6, h, Math.PI/4, 7*Math.PI/4, false, options);
            roughCanvas.linearPath([[x, y], [x+.3*h, y], [x+.3*h, y+h/2]], options);
            break;
        case 'H':
            roughCanvas.line(x-.3*h, y-h/2,x-.3*h, y+h/2, options);
            roughCanvas.line(x-.3*h, y, x+.3*h, y, options);
            roughCanvas.line(x+.3*h, y-h/2,x+.3*h, y+h/2, options);
            break;
        case 'I':
            roughCanvas.line(x, y-h/2,x, y+h/2, options);
            roughCanvas.line(x-.3*h, y-h/2, x+.3*h, y-h/2, options);
            roughCanvas.line(x-.3*h, y+h/2, x+.3*h, y+h/2, options);
            break;
        case 'J':
            roughCanvas.line(x-.3*h, y-h/2, x+.3*h, y-h/2, options);
            roughCanvas.curve([[x, y-h/2], [x, y+h/4],[x-h*.15, y+h/2],[x-h*.3, y+h/4]], options)
            break;
        case 'K':
            roughCanvas.line(x-.3*h, y-h/2,x-.3*h, y+h/2, options);
            roughCanvas.line(x-.3*h, y, x+.3*h, y-h/2, options);
            roughCanvas.line(x-.3*h, y, x+.3*h, y+h/2, options);
            break;
        case 'L':
            roughCanvas.line(x-.3*h, y-h/2,x-.3*h, y+h/2, options);
            roughCanvas.line(x-.3*h, y+h/2, x+.3*h, y+h/2, options);
            break;
        case 'M':
            roughCanvas.linearPath([[x-.3*h, y+h/2],[x-.3*h, y-h/2], [x, y+h/2],[x+.3*h, y-h/2],[x+.3*h, y+h/2]], options);
            break;
        case 'N':
            roughCanvas.linearPath([[x-.3*h, y+h/2],[x-.3*h, y-h/2], [x+.3*h, y+h/2], [x+.3*h, y-h/2]], options);
            break;
        case 'O':
            roughCanvas.ellipse(x, y, h*.6, h, options);
            break;
        case 'P':
            roughCanvas.line(x-.3*h, y-h/2,x-.3*h, y+h/2, options);
            roughCanvas.curve([[x-.3*h, y-h/2], [x+.3*h, y-h/4], [x-.3*h, y]], options)
            break;
        case 'Q':
            roughCanvas.ellipse(x, y, h*.6, h, options);
            roughCanvas.line(x, y+h/4, x+.3*h, y+h/2, options)
            break;
        case 'R':
            roughCanvas.line(x-.3*h, y-h/2,x-.3*h, y+h/2, options);
            roughCanvas.curve([[x-.3*h, y-h/2], [x+.3*h, y-h/4], [x-.3*h, y]], options);
            roughCanvas.line(x-.1*h, y, x+.3*h, y+h/2, options)
            break;
        case 'S':
            roughCanvas.curve([[x+.3*h, y-.31*h], [x, y-h/2], [x-.3*h, y-.31*h], [x, y], [x+.3*h, y+.31*h], [x, y+h/2], [x-.3*h, y+.31*h]], options);
            break;
        case 'T':
            roughCanvas.line(x, y-h/2,x, y+h/2, options);
            roughCanvas.line(x-.3*h, y-h/2, x+.3*h, y-h/2, options);
            break;
        case 'U':
            roughCanvas.curve([[x-.3*h, y-h/2], [x-.3*h, y+h/4], [x, y+h/2], [x+.3*h, y+h/4], [x+.3*h, y-h/2]], options);
            break;
        case 'V':
            roughCanvas.linearPath([[x-.3*h, y-h/2],[x, y+h/2],[x+.3*h, y-h/2]], options)
            break;
        case 'W':
            roughCanvas.linearPath([[x-.3*h, y-h/2],[x-.3*h, y+h/2], [x, y],[x+.3*h, y+h/2],[x+.3*h, y-h/2]], options);
            break;
        case 'X':
            roughCanvas.line(x-.3*h, y-h/2, x+.3*h, y+h/2, options);
            roughCanvas.line(x+.3*h, y-h/2, x-.3*h, y+h/2, options);
            break;
        case 'Y':
            roughCanvas.line(x-.3*h, y-h/2, x, y, options);
            roughCanvas.line(x+.3*h, y-h/2, x, y, options);
            roughCanvas.line(x, y, x, y+h/2, options)
            break;
        case 'Z':
            roughCanvas.linearPath([[x-.3*h, y-h/2], [x+.3*h, y-h/2], [x-.3*h, y+h/2], [x+.3*h, y+h/2]], options);
            break;
        case '0':
            roughCanvas.ellipse(x, y, h*.6, h, options);
            roughCanvas.line(x-.3*h, y+h/2, x+.3*h, y-h/2, options);
            break;
        case '1':
            roughCanvas.linearPath([[x-.3*h,y-h/4],[x, y-h/2],[x, y+h/2]], options);
            roughCanvas.line(x-.3*h, y+h/2, x+.3*h, y+h/2, options);
            break;
        case '2':
            roughCanvas.curve([[x-.3*h, y-h/4],[x, y-h/2],[x+.3*h, y-h/4],[x-.3*h,y+h/2],[x+.3*h,y+h/2]], options);
            break;
        case '3':
            roughCanvas.curve([[x-.3*h,y-h/4],[x,y-h/2],[x+.3*h,y-h/4],[x+.1*h,y],[x-.1*h,y],[x+.1*h,y],[x+.3*h,y+h/4],[x,y+h/2],[x-.3*h,y+h/4]], options);
            break;
        case '4':
            roughCanvas.linearPath([[x+.1*h,y+h/2],[x+.1*h,y-h/2],[x-.3*h,y],[x+.3*h,y]], options);
            break;
        case '5':
            roughCanvas.linearPath([[x+.3*h, y-h/2],[x-.3*h,y-h/2],[x-.3*h,y-h/4]], options);
            roughCanvas.curve([[x-.3*h,y-h/4],[x+.3*h,y+h/8],[x-.3*h,y+h/2]], options);
            break;
        case '6':
            roughCanvas.curve([[x+.3*h,y-h/4],[x,y-h/2],[x-.3*h,y-h/4],[x-.3*h,y+h/4],[x,y+h/2],[x+.3*h,y+h/4],[x,y-.1*h],[x-.3*h,y]], options);
            break;
        case '7':
            roughCanvas.linearPath([[x-.3*h,y-h/2],[x+.3*h,y-h/2],[x-.3*h,y+h/2]], options);
            roughCanvas.line(x-.3*h,y,x+.3*h,y, options);
            break;
        case '8':
            roughCanvas.circle(x, y-h/4, h/2, options);
            roughCanvas.circle(x, y+h/4, h/2, options);
            break;
        case '9':
            roughCanvas.curve([[x-.3*h,y+h/4],[x,y+h/2],[x+.3*h,y+h/4],[x+.3*h,y-h/4],[x,y-h/2],[x-.3*h,y-h/4],[x,y+.1*h],[x+.3*h,y]], options);
            break;
    }
}
