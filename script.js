// Distance between Earth and Moon:         238900 miles or 284472 km
    // The distance is also the height
// Mass of Moon:                            1.35 * (10**22) kg
// mass_g = mass_kg * 0.001

const height_km = 284472
const mass_kg = 1.35 * (10**22)

// Force of gravity on earth:   9.81 m/s^2      
// Force of gravity on moon:    1.62 m/s^2
// Force of gravity = 9.81 - 1.62 = 8.19
// Acceloration of gravity, factoring earth & moon, is 8.19 m/s^2, or 0.00819 km/s^2, or 29.484 km/h^2

// a(t) = -29.484                                         equation for moon chunk acceloration
// v(t) = -29.484t   - init_velocity                      equation for moon chunk velocity
// p(t) = -14.742t^2 - init_velocityt + height_km         equation for moon chunk position

// Solving Quadratic Rormula to find time moon hits earth.
// a = -14.742
// b = init_velocity
// c = height_km
// t = ((-1*b) - Math.sqrt(b^2 - 4(a*c))) / 2*a 

// deceloration = (29.484 * t)*100                        calculate deceloration at moment of impace (assuming it tales 1/100th of a second to come to a complete stop)

// force_newtons = mass_g * acceloration
// force_megaton = force_newtons / 9806650000

