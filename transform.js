function pivoter_droite(point1, point2, angle){
    /**
    * @param {Constante} Cos int(cos(x)*100)
    * @param {Constante} Sin int(sin(x)*100)
    */

    // Calcul des coordonnées du point pivot
    const x_pivot = Math.floor((point1[0] + point2[0]) / 2)
    const y_pivot = Math.floor((point1[1] + point2[1]) / 2)
    console.log(x_pivot, y_pivot)

    // Calcul des coordonnées du point 2 par rapport au point pivot
    const x2_relative = point2[0] - x_pivot
    const y2_relative = point2[1] - y_pivot
    console.log(x2_relative, y2_relative)

    // Calcul des coordonnées du point 2 pivoté
    const angle_rad = angle * 314/18000
    const cos_angle = Math.floor(Math.cos(angle_rad) * 100)
    const sin_angle = Math.floor(Math.sin(angle_rad) * 100)
    console.log(angle_rad, cos_angle, sin_angle)

    const x2_pivot = Math.floor((x2_relative * cos_angle - y2_relative * sin_angle) / 100)
    const y2_pivot = Math.floor((x2_relative * sin_angle + y2_relative * cos_angle) / 100)
    console.log(x2_pivot, y2_pivot)

    // Calcul des coordonnées du point 2 pivoté par rapport au point pivot
    const x2 = x2_pivot + x_pivot
    const y2 = y2_pivot + y_pivot

    return [[point1[0], point1[1]], [x2, y2]]
};

console.log(...pivoter_droite([4,0,0], [0,4,0], 90))