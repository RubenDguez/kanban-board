sudo systemctl stop kanban
sudo systemctl disable kanban
sudo systemctl stop caddy

sudo apt update
sudo apt upgrade -y

sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl

echo "\nInstalling Node JS"
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo bash -
sudo apt install -y nodejs
echo "Node Version: $(node --version)"

echo "\nInstalling Caddy"
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | gpg --yes --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt install caddy

echo "\nGit Version:  $(git --version)"

npm install
sudo mv -f kanban.service /etc/systemd/system/kanban.service
sudo mv -f Caddyfile /etc/caddy/Caddyfile

sudo systemctl daemon-reload
sudo systemctl start kanban.service
sudo systemctl enable kanban.service
sudo systemctl restart caddy
sudo journalctl -f -u kanban
