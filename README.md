# Прототип платформы оказания гос. услуг в республике Татарстан

*Задача:* Разработать прототип платформы, которая позволит переводить в электронный вид существующие государственные услуги силами аналитиков, без привлечения разработчиков.

Платформа реализована, как конгломерат сервисов, объединенных единой шиной управления бизнес процессами. Компоненты системы:
 - Платформа управления бизнес-процессами
 - База данных состояний процессов
 - Веб-портал
 - Хранилище мета- и справочной информации
 - API для интеграции с внешними системами

![](doc/infra.png?raw=true)

### ТРЕБУЕМЫЕ КОМПОНЕНТЫ

Все компоненты системы реализованы, как независимые контейнеры, что делает возможным запуск приложения и его масштабирование к гетерогенной среде. 

Проверьте наличие docker-compose 
```
> docker-compose --version
> docker-compose version 1.24.1, build 4667896b
```

### ЗАПУСК СЕРВИСОВ

Запуск сервисов производится через docker-compose, для этого необходимо выполнить компнады:

```
> cd dockers
> docker-compose up -d
```

### ОБЩАЯ АРХИТЕКТУРА

![](doc/Architecture.png?raw=true)

### Список услуг
![](doc/camunda.png?raw=true)

### Модель бизнес-процессов
![](doc/camunda_flow.png?raw=true)

### АПИ
![](doc/api_proxy.png?raw=true)


## Deployment



## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
