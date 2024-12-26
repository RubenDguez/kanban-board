sudo apt update
sudo apt upgrade -y

sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | gpg --dearmor -o --yes /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -

sudo apt install -y nodejs
sudo apt install caddy

node --version
git --version

npm install
sudo yes | cp -f kanban.service /etc/systemd/system/kanban.service
sudo yes | cp -f Caddyfile /etc/caddy/Caddyfile

sudo systemctl daemon-reload
sudo systemctl start kanban.service
sudo systemctl enable kanban.service
sudo systemctl restart caddy
sudo journalctl -f -u kanban
