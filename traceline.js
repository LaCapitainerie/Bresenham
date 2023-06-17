function bresenham(x0, y0, x1, y1) {
    /**
     * 
     * @param {Constant} dx   Math.abs(x1 - x0);
     * @param {Constant} dy   Math.abs(y1 - y0);
     * @param {Constant} xsign   x1 - x0 > 0 ? 1 : -1;  // x1 - x0 est récuperé de dx
     * @param {Constant} ysign   y1 - y0 > 0 ? 1 : -1;  // y1 - y0 est récuperé de dy
     * 
     * @param {Constant} xx xsign || 0
     * @param {Constant} xy 0 || ysign
     * @param {Constant} yx 0 || xsign
     * @param {Constant} yy ysign || 0
     * 
     * @param {Constant} DY Math.min(dx,dy);
     * @param {Constant} DX Math.max(dx,dy);
     * @param {Constant} xs x0;
     * @param {Constant} ys y0;
     * 
     * 
     * @param {Incrementor} x   incrementeur de la boucle for;
     * @param {Incrementor} y   incrementeur de la condition D > 0;
     * 
    */

    const dx = Math.abs(x1 - x0);
    const dy = Math.abs(y1 - y0);
  
    const xsign = x1 - x0 > 0 ? 1 : -1;
    const ysign = y1 - y0 > 0 ? 1 : -1;
  
    var xx, xy, yx, yy;
    if (dx > dy) {
      xx = xsign;
      xy = 0;
      yx = 0;
      yy = ysign;
    } else {
      xx = 0;
      xy = ysign;
      yx = xsign;
      yy = 0;
    };


    // ! remember after this line that dy = min(dx,dy), dx = max(dx,dy)
    const DY = Math.min(dx,dy);
    const DX = Math.max(dx,dy);

    const xs = x0;
    const ys = y0;
  
    const dstart = 2 * DY - DX; // constante
    var y = 0; // incrementeur

    var D = 0; // dstart + (x - y) * (2 * dx)
    /*
        D = dstart + 2*(x*dy - y*dx)

        dstart correspond à la valeur initiale de D,
        puis on construit un incrementeur autour du if 
        enfin on prend la valeur x de l'incrementeur qui sert de boucle

        x * (2*dy) - y * (2*dx)
        2*(x*dy) - 2(y-dx)
        2*(x*dy - y*dx)
    */
  
    for (var x = 0; x < DX+1; ++x) {
        var D = dstart + 2*(x*DY - y*DX) // cas en vert

        console.log(...[  xs  +  x*xx  +  y*yx   ,   ys  +  x*xy  +  y*yy  ]);

        if (D >= 0) {
            ++y;
        };
    };
    
};

bresenham(0,0,-5,3)
