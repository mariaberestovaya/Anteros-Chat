/_structure in the database_/

// register, add the user name

/ / button-create chat and button-connect
/ / search for the desired chat (name, password), write to the table of this user
/ / next...
// by the chat id we get a list of all messages

> User
password - password
login - name user
photo - avatar
settings - other settings 

> List of chat groups
chat_id
login - original name
user_id

> List of chat participants 
chat_id
user_id

> List of messages
message_id 
chat_id 
user_id - id of the user who added the messagesе
content - contents of the message
date_create


