#!/bin/bash

# Fonction pour comparer les versions
version_compare() {
    local v1=$1
    local op=$2
    local v2=$3

    if [[ $op == "==" ]]; then
        [[ $v1 == "$v2" ]]
    elif [[ $op == "!=" ]]; then
        [[ $v1 != "$v2" ]]
    elif [[ $op == "<" ]]; then
        dpkg --compare-versions "$v1" lt "$v2"
    elif [[ $op == ">" ]]; then
        dpkg --compare-versions "$v1" gt "$v2"
    elif [[ $op == "<=" ]]; then
        dpkg --compare-versions "$v1" le "$v2"
    elif [[ $op == ">=" ]]; then
        dpkg --compare-versions "$v1" ge "$v2"
    else
        echo "Invalid operator"
        return 1
    fi
}

echo "Want to configure Server Tap Web UI ? (yes/no)"
read -r answer

if [[ $answer =~ ^[Yy][Ee][Ss]$ ]]; then
    echo "Great! Let's continue with the configuration."

    # Demander à l'utilisateur de saisir les informations nécessaires
    read -p "Enter username: " USER_NAME
    read -p "Enter password: " USER_PASSWORD
    read -p "Enter server name: " SERVER_NAME
    read -p "Enter logo URL: " LOGO_URL
    read -p "Enter API URL: " API_URL
    read -p "Enter API key: " API_KEY
    read -p "Enter refresh rate: " REFRESH_RATE
    read -p "Enter currency name: " CURRENCY_NAME

    # Compléter le fichier environments.prod.ts
    echo "export const environment = {" > src/environments/environment.prod.ts
    echo "  production: true," >> src/environments/environment.prod.ts
    echo "  user_name: '$USER_NAME'," >> src/environments/environment.prod.ts
    echo "  user_password: '$USER_PASSWORD'," >> src/environments/environment.prod.ts
    echo "  server_name: '$SERVER_NAME'," >> src/environments/environment.prod.ts
    echo "  logo_url: '$LOGO_URL'," >> src/environments/environment.prod.ts
    echo "  api_url: '$API_URL'," >> src/environments/environment.prod.ts
    echo "  api_key: '$API_KEY'," >> src/environments/environment.prod.ts
    echo "  refresh_rate: $REFRESH_RATE," >> src/environments/environment.prod.ts
    echo "  currency_name: '$CURRENCY_NAME'," >> src/environments/environment.prod.ts
    echo "};" >> src/environments/environment.prod.ts

    echo "environments.prod.ts generated successfully."

    # Vérifier si Docker est installé
    if ! command -v docker &> /dev/null; then
        echo "Docker is not installed on your system."
        read -p "Do you want to install Docker? (yes/no)" install_docker_answer
        if [[ $install_docker_answer =~ ^[Yy][Ee][Ss]$ ]]; then
            echo "Installing Docker..."
            # Mettez ici votre logique d'installation de Docker
            # Par exemple, vous pouvez utiliser le gestionnaire de packages de votre distribution Linux pour installer Docker
        else
            echo "Skipping Docker installation. Please install Docker manually."
        fi
    else
        echo "Docker is already installed on your system."
    fi

    # Demander à l'utilisateur s'il souhaite construire l'application
    echo "Do you want to build the application? (yes/no)"
    read -r build_answer

    if [[ $build_answer =~ ^[Yy][Ee][Ss]$ ]]; then
        read -p "Enter the name for the Docker container: " container_name

        # Construire l'image Docker avec le nom spécifié
        echo "Building Docker image..."
        docker build -t "$container_name" .

        # Demander à l'utilisateur sur quelle port lancer le conteneur Docker
        read -p "Enter the port to launch the Docker container: " port_number
        echo "Launching Docker container on port $port_number..."
        docker run -d -p "$port_number":8100 --name "$container_name" "$container_name"

        echo "Docker container '$container_name' launched successfully on port $port_number."
    else
        echo "Alright, build process skipped."
    fi

elif [[ $answer =~ ^[Nn][Oo]$ ]]; then
    echo "Alright, configuration aborted."
else
    echo "Invalid input. Please enter 'yes' or 'no'."
fi
