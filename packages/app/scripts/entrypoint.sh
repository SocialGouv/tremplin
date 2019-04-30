#!/usr/bin/env sh

ROOT_DIRECTORY="/usr/share/nginx/html"

##############################################################
# Step 1 : replace default environment values in .html files #
##############################################################

# Save env variable in file
printenv >> env-vars

while IFS='=' read -r KEY VALUE

do
    match="\"$KEY\":\"[^\"]*\""
    repl="\"$KEY\":\"$VALUE\""

    # replace default environment variables value
    sed -i -e "s|$match|$repl|" $ROOT_DIRECTORY/*.html
    sed -i -e "s|$match|$repl|" $ROOT_DIRECTORY/offer/index.html
    sed -i -e "s|$match|$repl|" $ROOT_DIRECTORY/index/index.html
    sed -i -e "s|$match|$repl|" $ROOT_DIRECTORY/home/index.html
done <env-vars

rm env-vars

#########################
# Step 2 : Start NGINX  #
#########################

exec nginx -g 'daemon off;'
