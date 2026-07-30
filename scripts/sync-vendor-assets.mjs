import { copyFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const vendorFiles = [
  {
    from: "node_modules/gsap/dist/gsap.min.js",
    to: "docs/assets/js/vendor/gsap.min.js",
  },
  {
    from: "node_modules/gsap/dist/ScrollTrigger.min.js",
    to: "docs/assets/js/vendor/ScrollTrigger.min.js",
  },
];

for (const file of vendorFiles) {
  const destination = resolve(file.to);
  await mkdir(dirname(destination), { recursive: true });
  await copyFile(resolve(file.from), destination);
  console.log(`${file.from} -> ${file.to}`);
}
