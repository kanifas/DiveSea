# Задание DiveSea

### После клонирования
```
npm install
```


### Запуск в режиме разработки
```
npm run dev
```
Будет доступно на [http://localhost:5173](http://localhost:5173)


### Сборка и запуск production
```
npm run build
npm run preview
```
Будет доступно на [http://localhost:5173](http://localhost:4173)


### Запуск в контейнере
```
sudo docker build -t div-sea-app .
docker run -p 80:80 div-sea-app
```

Если по какой-то причине порт 80 уже занять, то просто поменять на другой, например 8000

```
docker run -p 8000:80 div-sea-app
```

Будет доступно на [http://localhost](http://localhost)
или на порту, который указали выше