from pypdf import PdfReader
r = PdfReader(r"C:\Users\light\Desktop\CV_KOUDJI_Samuel_UNICEF_ICT4D_Stage_2025.pdf")
for i, p in enumerate(r.pages):
    print(f"\n=== PAGE {i+1} ===\n")
    print(p.extract_text())
