// -----------------------------------------------------------
// Given the molecular mass of two molecules M1 and M2, their masses present m1 and m2 in a vessel of volume V at a specific temperature T, find 
// the total pressure P_total exerted by the molecules. Formula to calculate the pressure is:
// 
// P_total = (m1 / M1 + m2 / M2) * R * T / V
// 
// Input
// Six values :
// 
// M1, M2: molar masses of both gases, in grams(g)
// m1 and m2: present mass of both gases, in g * mol^-1
// V: volume of the vessel, in dm^3
// T: temperature, in Celsius
// 
// Output
// One value: P_total, in units of atm
// 
// Notes
// Remember: Temperature is given in Celsius while SI unit is Kelvin(K). 0 C = 273.15 K
// 
// The gas constant R = 0.082dm^3 * atm * K^-1 * mol^-1
// -----------------------------------------------------------

const solution = (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
  var n1 = (givenMass1 / molarMass1); 
  var n2 = (givenMass2 / molarMass2);
  var R = 0.082;
  var tempKelvin = temp + 273.15;
  var P1 = (n1 * R * tempKelvin) / volume;
  var P2 = (n2 * R * tempKelvin) / volume;
  var P = P1 + P2;
  return P;
}