$root = 'C:\Users\light\Documents\my docs\PROJET PERSONNEL'
foreach ($n in 'AUDEN','RAFNAMAG','WESTON','WALLETMIND-V2','HouseGate','quickcv','javaprep','OCR D_INFOS') {
    Write-Host "`n=== $n ===" -ForegroundColor Cyan
    $d = Join-Path $root $n
    Get-ChildItem -LiteralPath $d -Recurse -Depth 2 -Include *.md,*.docx,*.pdf -ErrorAction SilentlyContinue -File | Where-Object { $_.FullName -notmatch '\\node_modules\\|\\vendor\\|CHANGELOG' } | Select-Object -First 5 | ForEach-Object { Write-Host "  $($_.FullName.Replace($d,'.'))" }
}
