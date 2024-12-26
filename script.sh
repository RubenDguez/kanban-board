sudo apt update
sudo apt upgrade -y

sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -

sudo apt install -y nodejs
sudo apt install caddy

node --version
git --version

npm install
sudo cp kanban.service /etc/systemd/system/kanban.service -y

sudo systemctl daemon-reload
sudo systemctl start kanban.service
sudo systemctl enable kanban.service

sudo cp Caddyfile /etc/caddy/Caddyfile -y

sudo systemctl restart caddy
