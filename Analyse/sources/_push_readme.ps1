param(
    [string]$Repo,
    [string]$Path = 'README.md',
    [string]$LocalFile,
    [string]$Message
)

# Get existing SHA if file exists
$existingSha = $null
try {
    $existing = gh api "/repos/$Repo/contents/$Path" 2>$null | ConvertFrom-Json
    $existingSha = $existing.sha
} catch {}

$contentBytes = [System.IO.File]::ReadAllBytes($LocalFile)
$contentB64 = [System.Convert]::ToBase64String($contentBytes)

$payload = @{
    message = $Message
    content = $contentB64
}
if ($existingSha) { $payload.sha = $existingSha }

$payloadJson = $payload | ConvertTo-Json -Depth 5
$tmp = [System.IO.Path]::GetTempFileName()
Set-Content -LiteralPath $tmp -Value $payloadJson -Encoding utf8
try {
    gh api -X PUT "/repos/$Repo/contents/$Path" --input $tmp --jq '.commit.html_url'
} finally {
    Remove-Item $tmp -ErrorAction SilentlyContinue
}
