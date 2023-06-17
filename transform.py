import math;
def pivoter_droite(point1, point2, angle):
    """
    Optimisation : 
    int(cos(x)*100)
    int(sin(x)*100)
    """

    # Calcul des coordonnées du point pivot
    x_pivot = (point1[0] + point2[0]) // 2
    y_pivot = (point1[1] + point2[1]) // 2
    print(x_pivot, y_pivot)

    # Calcul des coordonnées du point 2 par rapport au point pivot
    x2_relative = point2[0] - x_pivot
    y2_relative = point2[1] - y_pivot
    print(x2_relative, y2_relative)

    # Calcul des coordonnées du point 2 pivoté
    angle_rad = angle * math.pi / 180 # / 60
    cos_angle = int(math.cos(angle_rad) * 100)
    sin_angle = int(math.sin(angle_rad) * 100)
    print(angle_rad, cos_angle, sin_angle)

    x2_pivot = (x2_relative * cos_angle - y2_relative * sin_angle) // 100
    y2_pivot = (x2_relative * sin_angle + y2_relative * cos_angle) // 100
    print(x2_pivot, y2_pivot)

    # Calcul des coordonnées du point 2 pivoté par rapport au point pivot
    x2 = x2_pivot + x_pivot
    y2 = y2_pivot + y_pivot

    return ((point1[0], point1[1]), (x2, y2))


print(pivoter_droite((4,0,0), (0,4,0), 90))