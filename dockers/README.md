# Docker images for the infrastracture:
 - Camunda bpmn platform
 - PostreSQL to store states

## To run the dockers:
```
> cd dockers
> docker-compose up -d

// to shutdown
> docker-compose down
```

## To open .bpmn console
.bpmn is being hosted inside the Tomcat on port 8080. By default Tomcat will show his own page, thus to navigate to Camunda just simply do:
```
http://localhost:8080/camunda
```

## To deploy 
To deploy a process to the Camunda, use the following url as a deployment url for Modeller:
> http://{host}:8080/engine-rest