# questions Crud
## Table of Contents
- [Full Setup](#full-setup)
    - [Installation](#installation)
    - [Run](#run)
- [Usage](#usage)
    - [HTTP paths](#http-paths)
    - [get a question](#army-id)
    - [get a question's auth](#validate-question)
    - [Post a new question](#/)
    - [update a question](#army-id)

## Full Setup
### Installation

```bash
git clone https://gitlab.com/yesodot/selenium/apollo/sociometry/sociometry-ui.git

cd question-crud

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
| Post   |  create                                                          | create a question                                          |
| Put    |  updateByquestionname                                                  | update a question                                      |
| Get    |  getByquestionname                                                     | get by army id                                     |
| Get    |  validateQuestion                                                | get auth by army id                                     |

**-------------------------------------------------------------------------------------------------------------------------------------**

### create
post a question
#### Paramters
| Name   | Type   | Description                                                    |
| questionname  | string | army id of the question  |
| firstName  | string | first name of the question  |
| lastName  | string | lastname of the question  |
| permissions  | permissionType | basic, mada or segel  |
| validationQuestion  | {string, string} | the question and the anwer of the question  |

#### Response
```typescript
"status": "200 OK"
{
    "questionname": "8599492",
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
### getByquestionname
get a question
#### Paramters
| Name   | Type   | Description                                                    |
| questionname  | string | the questionname of the question in the params |

#### Response
```typescript
"status": "200 OK"
{
    "questionname": "8599492",
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

### updateByquestionname
update a question
#### Paramters
| Name   | Type   | Description                                                    |
| questionname  | string | army id of the question  |
| firstName  | string | first name of the question  |
| lastName  | string | lastname of the question  |
| permissions  | permissionType | basic, mada or segel  |
| validationQuestion  | {string, string} | the question and the anwer of the question  |

#### Response
```typescript
"status": "200 OK"
{
    "questionname": "8599492",
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
authenticate the question and answer of a question
#### Paramters
| Name   | Type   | Description                                                    |
| questionname  | string | army id of the question  |
| question  | string | question  of the question  |
| answer  | string | answer of the question  |

#### Response
```typescript
"status": "200 OK"
true
```
**-----------------------------------------------------------------------------------------------------------------------------------------**
