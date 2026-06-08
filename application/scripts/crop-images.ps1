Add-Type -AssemblyName System.Drawing

function Save-Jpeg($bitmap, $path, $quality = 88) {
  # Convert to 24bppRgb in memory; save as PNG-then-rename trick if JPEG quality fails
  $w = $bitmap.Width; $h = $bitmap.Height
  $rgb = New-Object System.Drawing.Bitmap $w, $h, ([System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
  $g = [System.Drawing.Graphics]::FromImage($rgb)
  $g.Clear([System.Drawing.Color]::White)
  $g.DrawImage($bitmap, 0, 0, $w, $h)
  $g.Dispose()
  # Use default JPEG save (no encoder params) which works reliably
  $rgb.Save($path, [System.Drawing.Imaging.ImageFormat]::Jpeg)
  $rgb.Dispose()
}

function Crop-Image($srcPath, $dstPath, $cropX, $cropY, $cropW, $cropH, $outW = $null) {
  # Load src into memory, then close file lock so we can overwrite
  $bytes = [System.IO.File]::ReadAllBytes($srcPath)
  $ms = New-Object System.IO.MemoryStream(,$bytes)
  $src = [System.Drawing.Image]::FromStream($ms)
  $cropped = New-Object System.Drawing.Bitmap $cropW, $cropH
  $g = [System.Drawing.Graphics]::FromImage($cropped)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.DrawImage($src, (New-Object System.Drawing.Rectangle 0, 0, $cropW, $cropH), (New-Object System.Drawing.Rectangle $cropX, $cropY, $cropW, $cropH), [System.Drawing.GraphicsUnit]::Pixel)
  $g.Dispose()
  $src.Dispose(); $ms.Dispose()
  if ($outW -and $outW -ne $cropW) {
    $ratio = $outW / $cropW
    $outH = [int]($cropH * $ratio)
    $resized = New-Object System.Drawing.Bitmap $outW, $outH
    $g2 = [System.Drawing.Graphics]::FromImage($resized)
    $g2.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g2.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g2.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g2.DrawImage($cropped, 0, 0, $outW, $outH)
    $g2.Dispose()
    Save-Jpeg $resized $dstPath 88
    $resized.Dispose()
    Write-Host "Cropped $srcPath -> $dstPath ${outW}x${outH}"
  } else {
    Save-Jpeg $cropped $dstPath 88
    Write-Host "Cropped $srcPath -> $dstPath ${cropW}x${cropH}"
  }
  $cropped.Dispose()
}

# Pikarre: keep only top-left useful zone, scale to 1600px wide
Crop-Image "c:\Users\light\Desktop\portfolio\application\public\work\pikarre.jpg" "c:\Users\light\Desktop\portfolio\application\public\work\pikarre.jpg" 0 0 880 600 1600
