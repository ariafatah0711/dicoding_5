// const fs = require("fs");
// const sass = require("sass");
// const CleanCSS = require("clean-css");

// // Baca file SCSS
// fs.readFile("src/styles/style.scss", "utf8", (err, scssData) => {
//   if (err) {
//     console.error("Gagal membaca file SCSS:", err);
//     return;
//   }

//   // Konversi SCSS ke CSS
//   const cssData = sass.renderSync({ data: scssData }).css.toString();

//   // Minify CSS
//   const minifiedCSS = new CleanCSS().minify(cssData).styles;

//   // Tulis file CSS yang sudah diminify
//   fs.writeFile("src/styles/style-minify.css", minifiedCSS, (err) => {
//     if (err) {
//       console.error("Gagal menulis file CSS yang diminify:", err);
//       return;
//     }

//     console.log("CSS berhasil diminify dan disimpan!");
//   });
// });

/* ============================================  */

// const fs = require("fs");
// const sass = require("sass");
// const CleanCSS = require("clean-css");

// // Baca file SCSS
// fs.readFile("src/styles/style.scss", "utf8", (err, scssData) => {
//   if (err) {
//     console.error("Gagal membaca file SCSS:", err);
//     return;
//   }

//   // Konversi SCSS ke CSS dan langsung minify
//   const minifiedCSS = new CleanCSS().minify(sass.renderSync({ data: scssData }).css.toString()).styles;

//   // Tulis file CSS yang sudah diminify
//   fs.writeFile("src/styles/style-minify.css", minifiedCSS, (err) => {
//     if (err) {
//       console.error("Gagal menulis file CSS yang diminify:", err);
//       return;
//     }

//     console.log("CSS berhasil diminify dan disimpan!");
//   });
// });

/* ============================================  */

const fs = require("fs");
const sass = require("sass");

// Baca file SCSS
fs.readFile("src/styles/style.scss", "utf8", (err, scssData) => {
  if (err) {
    console.error("Gagal membaca file SCSS:", err);
    return;
  }

  // Konversi SCSS ke CSS
  const cssData = sass.renderSync({ data: scssData }).css.toString();

  // Tulis file CSS
  fs.writeFile("src/styles/style.css", cssData, (err) => {
    if (err) {
      console.error("Gagal menulis file CSS:", err);
      return;
    }

    console.log("SCSS berhasil di konversi ke CSS!");
  });
});
