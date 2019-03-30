#!/usr/bin/env bash
# Admin register script :D

API=http://localhost:3001/api/adminregister

animate() {
   echo -ne "     $1\\033[0K\\r"
   sleep "$2"
}

echo -e "\\e[1;34m
           [0;1;35;95m┳━[0;1;31;91m┓[0m  [0;1;33;93m┏[0;1;32;92m┏┓[0;1;36;96m┳━[0;1;34;94m┓┳[0;1;35;95m━┓[0;1;31;91m┳┏[0m [0;1;33;93m┳[0;1;32;92m━┓[0;1;36;96m┏┓[0;1;34;94m┓[0m
           [0;1;31;91m┃┳[0;1;33;93m┛━[0;1;32;92m━┃[0;1;36;96m┃┃[0;1;34;94m┃━[0;1;35;95m┫┃[0;1;31;91m┳┛[0;1;33;93m┣┻[0;1;32;92m┓┣[0;1;36;96m━[0m  [0;1;34;94m┃[0m 
           [0;1;33;93m┇┗[0;1;32;92m┛[0m  [0;1;36;96m┛[0m [0;1;34;94m┇[0;1;35;95m┛[0m [0;1;31;91m┇┇[0;1;33;93m┗┛[0;1;32;92m┇[0m [0;1;36;96m┛┻[0;1;34;94m━┛[0m [0;1;35;95m┇[0m 
\\e[0m"

animate "\\e[1;32mＡＳ\\e[0m" 0.2
animate "\\e[1;32mＡＳＴ\\e[0m" 0.2
animate "\\e[1;32mＡＳＴＥＲ\\e[0m" 0.2
animate "\\e[1;32mＡＳＴＥＲＩＳ\\e[0m" 0.2
animate "\\e[1;32mＡＳＴＥＲＩＳＫＩ\\e[0m" 0.2
animate "\\e[1;32mＡＳＴＥＲＩＳＫＩ \\e[1;31m＆\\e[1;33m Ｒ\\e[0m" 0.2
animate "\\e[1;32mＡＳＴＥＲＩＳＫＩ \\e[1;31m＆\\e[1;33m ＲＥＡ\\e[0m" 0.2
animate "\\e[1;32mＡＳＴＥＲＩＳＫＩ \\e[1;31m＆\\e[1;33m ＲＥＡＫＴ\\e[0m" 0.2
animate "\\e[1;32mＡＳＴＥＲＩＳＫＩ \\e[1;31m＆\\e[1;33m ＲＥＡＫＴＯＲ\\e[0m" 0.2

echo
echo
echo "Tällä Lisäät admin accountin"
printf "Työntekijän id: "
read -r ADID
printf "Henkilökohtainen sähköposti: "
read -r PEMAIL
printf "Työsähköposti: "
read -r WOEMAIL
printf "Etunimi: "
read -r FNAME
printf "Sukunimi: "
read -r LNAME
printf "Salasana: "
read -r PASS
printf "Store: "
read -r STORE
EMPL=$(date -I)

for value in {1..3}; do
    animate '             \e[1;35m  ' 0.1
    animate '             \e[0;35m░ ' 0.1
    animate '             \e[0;35m▒ ' 0.1
    animate '             \e[1;35m▓ ' 0.1
    animate '             \e[1;35m▋ ' 0.1
    animate '             \e[1;35m▓ ' 0.1
    animate '             \e[0;35m▒ ' 0.1
    animate '             \e[0;35m░ ' 0.1
done
animate '\e[1;38m' 0.1
echo -e "\\e[0m"

curl -X POST -H "Content-Type: application/json" -d '{"idx":'${ADID}' , "privateEmail":"'${PEMAIL}'","workEmail":"'${WOEMAIL}'", "firstName":"'${FNAME}'", "lastName":"'${LNAME}'", "password":"'${PASS}'", "store":"'${STORE}'", "employeeSince":"'${EMPL}'"}' $API

echo
echo -e "\e[1;32mTyöntekijä lisätty :\\e[0m)"
