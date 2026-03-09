# QR Code Generator

A simple CLI tool that generates a QR code image from a URL. Scan the resulting image with any phone camera or QR reader to open the link.

## Setup

```bash
npm install
```

## Usage

```bash
node index.js <url> [output-file]
```

- `url` — the URL to encode (required)
- `output-file` — path for the generated PNG (optional, defaults to `qrcode.png`)

## Examples

```bash
# Generate qrcode.png in the current directory
node index.js https://example.com

# Specify a custom output filename
node index.js https://example.com my-code.png
```
