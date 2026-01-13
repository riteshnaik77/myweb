@echo off
echo Moving PDF to public folder...
move /Y "Ritesh_Naik_AI_PM.pdf" "public\resume.pdf"
git add .
git commit -m "Fix: Move PDF to public and rename to resume.pdf"
git push origin main
echo Done.
