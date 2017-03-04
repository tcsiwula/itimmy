#!bin/bash
# chmod +x deploy_script.sh
# bash deploy_script.sh

echo "-----> starting ... ---->"
echo "-----> deploying to github ---->"

git add .
git commit -m ":fireworks: updated readme"
git push origin master

echo "+++++>   complete   <+++++"
echo ""

echo "-----> deploying to heroku ---->"

git push heroku master


echo "+++++>   complete   <+++++"
echo "<----- deploy script done <----"
