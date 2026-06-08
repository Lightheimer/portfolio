from pypdf import PdfReader
import sys

for path in [
    r"C:\Users\light\Desktop\Contrat de stage.pdf",
    r"C:\Users\light\Desktop\Prolongation de stage - Juniorpdf.pdf",
]:
    print(f"\n########## {path} ##########\n")
    try:
        r = PdfReader(path)
        for i, p in enumerate(r.pages):
            print(f"\n--- PAGE {i+1} ---\n")
            print(p.extract_text())
    except Exception as e:
        print(f"ERROR: {e}")
