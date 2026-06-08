import fitz, os
path = r"C:\Users\light\Desktop\Contrat de stage.pdf"
outdir = r"C:\Users\light\Desktop\portfolio\Analyse\sources"
os.makedirs(outdir, exist_ok=True)
doc = fitz.open(path)
for i, page in enumerate(doc):
    pix = page.get_pixmap(dpi=180)
    out = os.path.join(outdir, f"contrat_stage_p{i+1}.png")
    pix.save(out)
    print(f"Saved {out} ({pix.width}x{pix.height})")
