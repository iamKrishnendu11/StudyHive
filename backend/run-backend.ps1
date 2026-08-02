Set-Location -Path "$PSScriptRoot"

# Load environment variables from .env file if it exists
$ENV_FILE = Join-Path "$PSScriptRoot" ".env"
if (Test-Path $ENV_FILE) {
    Write-Host "Loading environment variables from .env file..." -ForegroundColor Cyan
    Get-Content $ENV_FILE | ForEach-Object {
        $line = $_.Trim()
        if ($line -and -not $line.StartsWith("#") -and $line.Contains("=")) {
            $key, $value = $line.Split('=', 2)
            [System.Environment]::SetEnvironmentVariable($key.Trim(), $value.Trim(), [System.EnvironmentVariableTarget]::Process)
        }
    }
}

# Force Java networking stack to prefer IPv4 for Neon PostgreSQL
$env:MAVEN_OPTS = "-Djava.net.preferIPv4Stack=true -Djava.net.preferIPv4Addresses=true"

$MAVEN_PATH = "C:\Program Files\JetBrains\IntelliJ IDEA Community Edition 2024.1.1\plugins\maven\lib\maven3\bin\mvn.cmd"

if (Test-Path $MAVEN_PATH) {
    Write-Host "Starting StudyHive Spring Boot Backend on http://localhost:8080 (Connecting to Neon PostgreSQL)..." -ForegroundColor Green
    & $MAVEN_PATH spring-boot:run
} else {
    Write-Host "Maven executable not found at IntelliJ path. Trying system 'mvn'..." -ForegroundColor Yellow
    mvn spring-boot:run
}
