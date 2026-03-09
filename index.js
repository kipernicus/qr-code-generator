const QRCode = require("qrcode");
const path = require("path");

const url = process.argv[2];

if (!url) {
  console.error("Usage: node index.js <url> [output-file]");
  console.error("  Examples:");
  console.error("    node index.js https://example.com");
  console.error('    node index.js https://example.com my-qr.png');
  process.exit(1);
}

const outputFile = process.argv[3] || "qrcode.png";
const outputPath = path.resolve(outputFile);

QRCode.toFile(outputPath, url, { width: 400, margin: 2 }, (err) => {
  if (err) {
    console.error("Error generating QR code:", err.message);
    process.exit(1);
  }
  console.log(`QR code saved to ${outputPath}`);
});
