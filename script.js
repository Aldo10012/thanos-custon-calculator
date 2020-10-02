const percent_input = document.querySelector('#percent_input');
const throw_speed = document.querySelector('#throw_speed');
const display_force = document.querySelector('#display_force');


// Distance between Earth and Moon:         238900 miles or 284472 km
    // The distance is also the height
// Mass of Moon:                            1.35 * (10**22) kg
// mass_g = mass_kg * 0.001

const height_km = 284472
const mass_kg = 1.35 * (10**22)
const mass_g = mass_kg/1000

// Force of gravity on earth:   9.81 m/s^2      
// Force of gravity on moon:    1.62 m/s^2
// Force of gravity = 9.81 - 1.62 = 8.19
// Acceloration of gravity, factoring earth & moon, is 8.19 m/s^2, or 0.00819 km/s^2, or 29.484 km/h^2

// a(t) = -29.484                                         equation for moon chunk acceloration
// v(t) = -29.484t   - initial_velocity                      equation for moon chunk velocity
// p(t) = -14.742t^2 - initial_velocityt + height_km         equation for moon chunk position

// Solving Quadratic Rormula to find time moon hits earth.
// a = -14.742
// b = init_velocity
// c = height_km
// t = ((-1*b) - Math.sqrt(b^2 - 4(a*c))) / 2*a 
// t is in terms of hourse:     1 hour = 3600 seconds

// deceloration = (29.484 * t)*3600               calculate deceloration at moment of impace (assuming it tales 1 second to come to a complete stop)

// force_newtons = mass_g * deceloration
// force_megaton = force_newtons / 9806650000





function calculateForce() {
  const percent_value = parseFloat(percent_input.value)/100;
  const throw_value = parseFloat(throw_speed.value);

  // Quadratic Formula to find t at moment of impact
  const a = -14.742
  const b = throw_value
  const c = height_km
  const t = ((-1*b) - Math.sqrt(b^2 - 4*(a*c))) / 2*a   

  // force = mass * acceloration
  const mass_of_chunk_kg = mass_kg * percent_value;
  const mass_of_chunk_g = mass_of_chunk_kg/1000;
  const deceloration = (29.484 * t)*3600;
  const force_newtons = mass_of_chunk_g * deceloration;
  const force_megaton = force_newtons / 9806650000
  const force_gigaton = force_megaton / 1000


  // const force_value = percent_value * throw_value;
  console.log(`${force_gigaton.toFixed(2)} gigatons`)
  display_force.innerHTML = `${force_gigaton.toFixed(2)} gigatons`;
}


percent_input.addEventListener('input', calculateForce);
throw_speed.addEventListener('input', calculateForce);