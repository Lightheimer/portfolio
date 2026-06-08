$root = 'C:\Users\light\Documents\my docs\PROJET PERSONNEL'
$map = @{
    'AUDEN' = @('auden\.github\copilot-instructions.md','ANALYSE\AUDIT-V1-ET-ROADMAP.md')
    'RAFNAMAG' = @('rafnamag\.github\copilot-instructions.md')
    'WESTON' = @('weston\.github\copilot-instructions.md')
    'WALLETMIND-V2' = @('.github\copilot-instructions.md')
    'HouseGate' = @('.github\copilot-instructions.md')
    'quickcv' = @('.github\copilot-instructions.md','README.md')
    'javaprep' = @('.github\copilot-instructions.md')
    'OCR D_INFOS' = @('resharp\.github\copilot-instructions.md','resharp\README.md')
}
foreach ($k in $map.Keys) {
    Write-Host "`n############ $k ############" -ForegroundColor Cyan
    foreach ($f in $map[$k]) {
        $p = Join-Path $root (Join-Path $k $f)
        if (Test-Path -LiteralPath $p) {
            Write-Host "--- $f ---" -ForegroundColor Yellow
            Get-Content -LiteralPath $p -TotalCount 30 | ForEach-Object { Write-Host "  $_" }
        }
    }
}
