/_структура в БД_/

// регистрируемся, добавляем имя юзера
// кнопка - создать чат и кнопка - подклчюиться
// ищем нужный чат(name, password), записываем в таблицу данного пользователя
// далее...
// по id чата получаем список всех сообщений

> Список групп чата
chat_id - id чата
name - загаловок
password - пароль
user_id - id пользователя

> Список участников чата
chat_id - id чата
user_id - id пользователя, который является участником чата

> Список сообщений
message_id - id сообщения
chat_id - id чата
user_id - id пользователя, который добавил сообщение
content - содержимое сообщения
date_create - дата создания сообщения


