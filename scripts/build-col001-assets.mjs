import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import sharp from "sharp";

const sourceDir = "assets-source/collections/col001/product-masters";
const outputDir = "docs/assets/images/col001";

const masters = [
  {
    id: "aw001",
    material: "pwfp-black",
    orientation: "horizontal",
    source: "col001-aw001-pwfp-black-horizontal-master.png",
    folder: "gallery",
    widths: [750, 1500],
  },
  {
    id: "aw001",
    material: "acrylic",
    orientation: "horizontal",
    source: "col001-aw001-acrylic-horizontal-master.png",
    folder: "gallery",
    widths: [750, 1500],
  },
  {
    id: "aw002",
    material: "pwfp-black",
    orientation: "horizontal",
    source: "col001-aw002-pwfp-black-horizontal-master.png",
    folder: "gallery",
    widths: [750, 1500],
  },
  {
    id: "aw002",
    material: "acrylic",
    orientation: "horizontal",
    source: "col001-aw002-acrylic-horizontal-master.png",
    folder: "gallery",
    widths: [750, 1500],
  },
];

const verticalGallery = [
  ["col001-aw001-pwfp-black-vertical-master.png", "aw001", "pwfp-black"],
  ["col001-aw001-acrylic-vertical-master.png", "aw001", "acrylic"],
  ["col001-aw002-pwfp-black-vertical-master.png", "aw002", "pwfp-black"],
  ["col001-aw002-acrylic-vertical-master.png", "aw002", "acrylic"],
].map(([source, id, material]) => ({
  id,
  material,
  orientation: "vertical",
  source,
  folder: "gallery",
  widths: [525, 1050],
}));

const jobs = [...masters, ...verticalGallery];

for (const job of jobs) {
  const source = resolve(sourceDir, job.source);
  const metadata = await sharp(source).metadata();

  for (const width of job.widths) {
    if (metadata.width && width > metadata.width) {
      throw new Error(`Refusing to upscale ${job.source} to ${width}px`);
    }

    const output = resolve(
      outputDir,
      job.folder,
      `col001-${job.id}-${job.material}-${job.orientation}-${width}.webp`,
    );

    await mkdir(dirname(output), { recursive: true });
    await sharp(source)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toFile(output);

    const info = await sharp(output).metadata();
    console.log(`${output} ${info.width}x${info.height}`);
  }
}
