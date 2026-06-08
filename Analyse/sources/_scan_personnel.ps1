$root = 'C:\Users\light\Documents\my docs\PROJET PERSONNEL'
$skip = @('ARCHIVES','NOTES-OBSIDIAN','WALLETMIND')  # WALLETMIND-V2 sera scanné
Get-ChildItem -LiteralPath $root -Directory | Where-Object { $_.Name -notmatch '^\.' -and $skip -notcontains $_.Name } | ForEach-Object {
    $name = $_.Name
    $d = $_.FullName
    Write-Host "=== $name ===" -ForegroundColor Cyan
    $manifest = Get-ChildItem -LiteralPath $d -Recurse -Depth 3 -Include composer.json,package.json,pubspec.yaml,requirements.txt -ErrorAction SilentlyContinue -File | Select-Object -First 4
    foreach ($m in $manifest) {
        $rel = $m.Directory.FullName.Replace($d,'.')
        Write-Host "  [$($m.Name)] $rel"
        try {
            if ($m.Name -in 'composer.json','package.json') {
                $j = Get-Content -LiteralPath $m.FullName -Raw | ConvertFrom-Json -ErrorAction SilentlyContinue
                if ($j.name -or $j.description) { Write-Host "    name=$($j.name) desc=$($j.description)" }
            } elseif ($m.Name -eq 'pubspec.yaml') {
                $txt = Get-Content -LiteralPath $m.FullName -TotalCount 5
                Write-Host "    $($txt -join ' | ')"
            }
        } catch {}
    }
    $readme = Get-ChildItem -LiteralPath $d -Recurse -Depth 2 -Filter README.md -ErrorAction SilentlyContinue -File | Select-Object -First 1
    if ($readme) {
        $lines = Get-Content -LiteralPath $readme.FullName -TotalCount 12 | Where-Object { $_ -match '\S' -and $_ -notmatch 'laravel|flutter|getting started|target="_blank"|laravel.com|packagist' } | Select-Object -First 3
        if ($lines) { Write-Host "  README: $($lines -join ' / ')" -ForegroundColor Yellow }
    }
}
