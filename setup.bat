@echo off
setlocal

REM Ruta base del proyecto
set "BASE_DIR=%~dp0"
cd /d "%BASE_DIR%"

echo ====== Iniciando Hospital Management System ======

REM Paso 1: Crear base de datos
echo [1/2] Ejecutando script SQL para crear base de datos...
if not exist "%BASE_DIR%database\setup.sql" (
    echo [ERROR] No se encontró el archivo setup.sql en database\
    pause
    exit /b
)
mysql -u root -pw41CHD0G$2 < "%BASE_DIR%database\setup.sql"
if %errorlevel% neq 0 (
    echo [ERROR] Falló la ejecución del script SQL.
    pause
    exit /b
)
echo Base de datos creada correctamente.

REM Paso 2: Ejecutar backend en la misma terminal (se queda corriendo aquí)
echo [2/2] Iniciando backend...
cd /d "%BASE_DIR%backend\hospital-management-system\target"
echo --- Backend corriendo. No cierres esta ventana ---
java -jar hospital-management-system-0.0.1-SNAPSHOT.jar

REM Fin (esto no se ejecutará hasta que detengas el backend manualmente con Ctrl+C)
echo Backend detenido.
pause
