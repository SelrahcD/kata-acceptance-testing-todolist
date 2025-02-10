# kata-acceptance-testing-todolist

## Objectives

- Implementing Acceptance Test using [Dave Farley 3 layers models](https://www.youtube.com/watch?v=pFSvOpqQNKQ)
- Use Pact for Contract Testing between services
- Good commit naming
- Practicing Typescript
- Creating a front-end app on top of an API
- Working with an LLM to build the app

## resources 

- https://www.youtube.com/live/SuDIYk9GBpE?si=QVPRy-7eQPAgTSvA&t=1292
Regarding Tx something to dig in... 
- https://github.com/davef77/ATDD-Tools/blob/main/src/main/java/com/cd/acceptance/dsl/Params.java
Increment value to identify test
- parallel tests on database system  https://blog.charlesdesneuf.com/articles/tests-en-parallele-et-base-de-donnees/
- approach gave by Valentina Jemuović using http clock mock by wiremock 

## Miro

We are taking [notes on Miro](https://miro.com/app/board/uXjVLmU7kKY=/)

## Features

Via API:
- [ ] Add a task to a TodoList in status Todo
- [ ] Mark a task as WIP
- [ ] Mark a task as Done
- [ ] Keep track of when task was created (Dealing with time)
- [ ] Keep track of when task was marked as WIP
- [ ] Keep track of when task was marked as Done
- [ ] Send a notification when a new task is added to TodoList (System Extern)

Via Front: same thing as above