# 🐺 NestJS 🐘 PSQL and 🦩 Firebase  
```bash
# install
$ yarn install
# development
$ yarn start
# watch mode
$ yarn run start:dev
# production mode
$ yarn run start:prod
# unit tests
$ yarn run test
# e2e tests
$ yarn run test:e2e
# test coverage
$ yarn run test:cov
```

-------------------

## App Checklist 🧾

[x] setup ORM generator for applesauce table

[x] create USERS column with nullable and non-nullable fields extending BASE_ENTITY

[x] setup CRUD operations for users

------------

## Package Documentation 📝


### [TypeORM](https://typeorm.io/data-source)
### [NestJS](https://docs.nestjs.com/)
### [PSQL](https://www.postgresql.org/docs/16/index.html)

--------------------

```bash
curl -v -H "Content-Type: application/json" -X POST      
-d '{"firstName":"Fake","lastName":"Name","alternateName":"Goofball", 
"email":"badmanting@badman.com"}' http://localhost:4000/users
```
