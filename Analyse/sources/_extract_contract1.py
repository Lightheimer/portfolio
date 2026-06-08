import pdfplumber, os
path = r"C:\Users\light\Desktop\Contrat de stage.pdf"
print(f"Size: {os.path.getsize(path)} bytes")
with pdfplumber.open(path) as pdf:
    print(f"Pages: {len(pdf.pages)}")
    for i, p in enumerate(pdf.pages):
        print(f"\n--- PAGE {i+1} (chars: {len(p.chars)}) ---")
        txt = p.extract_text()
        print(txt if txt else "(no extractable text — likely scanned image)")
        # check for images
        if p.images:
            print(f"[contains {len(p.images)} image(s)]")
