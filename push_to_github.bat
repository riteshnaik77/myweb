@echo off
git remote set-url origin https://github.com/riteshnaik77/myweb.git 2>NUL || git remote add origin https://github.com/riteshnaik77/myweb.git
git add .
git commit -m "Initial commit - Portfolio website"
git push -u origin main
