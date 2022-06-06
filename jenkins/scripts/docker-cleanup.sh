# Options:
# Remove stopped containers and untagged images
#   $ sudo sh docker-cleanup.sh
# Remove all stopped | running containers and untagged images
#   $ sudo sh docker-cleanup.sh --reset
# Remove dangling images
#   $ sudo sh docker-cleanup.sh --remove-dangling
# Remove containers | images | tags matching {repository|image|repository\image|tag|image:tag}
# pattern and untagged images
#   $ sudo sh docker-cleanup.sh --purge {image}

if [ "$1" == "--reset" ]; then
    # Remove all containers regardless of state
    docker rm -vf $(docker ps -a -q) 2>/dev/null || echo "No more containers to remove."
elif [ "$1" == "--purge" ]; then
    # Attempt to remove running containers that are using the images we're trying to purge first.
    (docker rm -vf $(docker ps -a | grep "$2/\|/$2 \| $2 \|:$2\|$2-\|$2:\|$2_" | awk '{print $1}') 2>/dev/null || echo "No containers using the \"$2\" image, continuing purge.") &&\
    # Remove all images matching arg given after "--purge"
    docker rmi $(docker images | grep "$2/\|/$2 \| $2 \|$2 \|$2-\|$2_" | awk '{print $3}') 2>/dev/null || echo "No images matching \"$2\" to purge."
else
    # This alternate only removes "stopped" containers
    docker rm -vf $(docker ps -a | grep "Exited" | awk '{print $1}') 2>/dev/null || echo "No stopped containers to remove."
fi

if [ "$1" == "--remove-dangling" ]; then
   # Remove all dangling images
   docker image prune --filter="dangling=true"
fi

exit 0
