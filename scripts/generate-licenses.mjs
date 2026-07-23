import { init } from 'license-checker-rseidelsohn';
import { writeFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '../src/data');
mkdirSync(outDir, { recursive: true });

init(
  {
    start: join(__dirname, ".."),
    production: true,
    excludePrivatePackages: true,
  },
  (err, packages) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    const licenses = Object.entries(packages).map(([nameVersion, info]) => {
      const lastAt = nameVersion.lastIndexOf('@');
      return {
        name: nameVersion.slice(0, lastAt),
        version: nameVersion.slice(lastAt + 1),
        license: info.licenses,
        repository: info.repository ?? null,
        publisher: info.publisher ?? null,
      };
    }).sort((a, b) => a.name.localeCompare(b.name));

    writeFileSync(
      join(outDir, 'licenses.json'),
      JSON.stringify(licenses, null, 2)
    );
    console.log(`✔ ${licenses.length}件のライセンス情報を出力しました`);
  }
);
