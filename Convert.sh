#!/bin/bash
mkdir -p portfolio-website/public/images
for f in *.pdf; do
  if [ -f "$f" ]; then
    filename=$(basename "$f" .pdf)
    echo "Converting $f to $filename.png"
    sips -s format png "$f" --out "portfolio-website/public/images/$filename.png"
  fi
done
cd "Navigation Overlay" || exit
for f in *.pdf; do
  if [ -f "$f" ]; then
    filename=$(basename "$f" .pdf)
    echo "Converting Navigation Overlay/$f to $filename.png"
    sips -s format png "$f" --out "../portfolio-website/public/images/$filename.png"
  fi
done
echo "Done converting."
