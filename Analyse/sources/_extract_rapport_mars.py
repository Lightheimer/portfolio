from pypdf import PdfReader
r = PdfReader(r"C:\Users\light\Desktop\Rapport_Activite_Mars_2026_KOUDJI.pdf")
for i, p in enumerate(r.pages):
    print(f"\n=== MARS PAGE {i+1} ===\n")
    print(p.extract_text())
