// Takes a given year (y) then returns Date object of Easter Sunday
export function easterDate(y) {
  /*
		Easter Date Function for JavaScript implemented by Furgelnod ( https://furgelnod.com )
		Using algorithm published at The Date of Easter (on aa.usno.navy.mil, Oct 2007)
		(https://web.archive.org/web/20071015045929/http://aa.usno.navy.mil/faq/docs/easter.php)
		The algorithm is credited to J.-M. Oudin (1940) and is reprinted in the
		Explanatory Supplement to the Astronomical Almanac, ed. P. K. Seidelmann (1992).
		See Chapter 12, "Calendars", by L. E. Doggett.
	*/
  try {
    y = Number(y);
    if (y != y) {
      throw new TypeError("Value must be a number.");
    } else if (y > 275760 || y < -271820) {
      throw new RangeError(
        "Value be between -271820 and 275760 due to technical limitations of Date constructor."
      );
    }
  } catch (e) {
    console.error(e);
  }

  y = Math.floor(y);
  var c = Math.floor(y / 100);
  var n = y - 19 * Math.floor(y / 19);
  var k = Math.floor((c - 17) / 25);
  var i = c - Math.floor(c / 4) - Math.floor((c - k) / 3) + 19 * n + 15;
  i = i - 30 * Math.floor(i / 30);
  i =
    i -
    Math.floor(i / 28) *
      (1 -
        Math.floor(i / 28) *
          Math.floor(29 / (i + 1)) *
          Math.floor((21 - n) / 11));
  var j = y + Math.floor(y / 4) + i + 2 - c + Math.floor(c / 4);
  j = j - 7 * Math.floor(j / 7);
  var l = i - j;
  var m = 3 + Math.floor((l + 40) / 44);
  var d = l + 28 - 31 * Math.floor(m / 4);

  return {
    year: y,
    month: m,
    day: d,
  };
} // -- easterDate
