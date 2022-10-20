# USERS Crud
## Table of Contents
- [Full Setup](#full-setup)
    - [Installation](#installation)
    - [Run](#run)
- [Usage](#usage)
    - [HTTP paths](#http-paths)
    - [get a user](#army-id)
    - [get a user's auth](#validate-question)
    - [Post a new user](#/)
    - [update a user](#army-id)

## Full Setup
### Installation

```bash
git clone https://gitlab.com/yesodot/selenium/apollo/sociometry/sociometry-ui.git

cd user-crud

npm install
```

### Run 

```bash
npm start
```

## Usage
#### HTTP paths 

| METHOD | ENDPOINT                                                         | DESCRIPTION                                       |
| ------ | :----------------------------------------------------------------| :----------------------------------------------    |
| Post   |  create                                                          | create a user                                          |
| Put    |  updateByusername                                                  | update a user                                      |
| Get    |  getByusername                                                     | get by army id                                     |
| Get    |  validateQuestion                                                | get auth by army id                                     |

**-------------------------------------------------------------------------------------------------------------------------------------**

### create
post a user
#### Paramters
| Name   | Type   | Description                                                    |
| username  | string | army id of the user  |
| firstName  | string | first name of the user  |
| lastName  | string | lastname of the user  |
| permissions  | permissionType | basic, mada or segel  |
| validationQuestion  | {string, string} | the question and the anwer of the user  |

#### Response
```typescript
"status": "200 OK"
{
    "username": "8599492",
    "firstName": "string",
    "lastName": "string",
    "permissions": ["QUESTION1"],
    "validationQuestion": {
        "question": "MADA",
        "answer": "string"
  }
}
```
**-----------------------------------------------------------------------------------------------------------------------------------------**
### getByusername
get a user
#### Paramters
| Name   | Type   | Description                                                    |
| username  | string | the username of the user in the params |

#### Response
```typescript
"status": "200 OK"
{
    "username": "8599492",
    "firstName": "string",
    "lastName": "string",
    "permissions": ["QUESTION1"],
    "validationQuestion": {
        "question": "MADA",
        "answer": "string"
  }
}
```
**-----------------------------------------------------------------------------------------------------------------------------------------**

### updateByusername
update a user
#### Paramters
| Name   | Type   | Description                                                    |
| username  | string | army id of the user  |
| firstName  | string | first name of the user  |
| lastName  | string | lastname of the user  |
| permissions  | permissionType | basic, mada or segel  |
| validationQuestion  | {string, string} | the question and the anwer of the user  |

#### Response
```typescript
"status": "200 OK"
{
    "username": "8599492",
    "firstName": "string",
    "lastName": "string",
    "permissions": ["QUESTION1"],
    "validationQuestion": {
        "question": "MADA",
        "answer": "string"
  }
}
```
**-----------------------------------------------------------------------------------------------------------------------------------------**
### validateQuestion
authenticate the question and answer of a user
#### Paramters
| Name   | Type   | Description                                                    |
| username  | string | army id of the user  |
| question  | string | question  of the user  |
| answer  | string | answer of the user  |

#### Response
```typescript
"status": "200 OK"
true
```
**-----------------------------------------------------------------------------------------------------------------------------------------**
