1.START MONGODB PROCESS 
mongod --config /usr/local/etc/mongod.conf

2.CHECK IF PROCESS IS RUNNING
ps aux | grep -v grep | grep mongod

3.START MONGO SHELL
mongosh