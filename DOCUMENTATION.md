#### SETTING UP THE PROJECT #####

# The API is hosted on render and can be accessed on : [url]
# Standard
# The person resource is made of three parameters
1. name -> full name of the person
2. gender -> the gender of the person
3. age -> the age of the person

#1
#### USE POSTMAN TO TEST AND PERFOM CRUD OPERATIONS ON THE API ####
#### STANDARD FORMATS FOR REQUESTS AND RESPONSES ####

## CREATE
# PERFOM A POST REQUEST ON [url]/api/
# Pass data as raw data in JSON format like
{
    "name": "Example name",
    "gender": "Example genger",
    "age": age
}
# RESPONSE WILL LOOK LIKE
{
    "_id": "id",
    "name": "Example name",
    "gender": "Example gender",
    "age": age,
    "createdAt": "utc-time",
    "updatedAt": "utc-time",
}

## READ
# PERFOM A GET REQUEST ON [url]/api/[user_id]
user_id is the id of the person object that was returned when you made a post request
# RESPONSE WILL LOOK LIKE
{
    "_id": "id",
    "name": "Example name",
    "gender": "Example gender",
    "age": age,
    "createdAt": "utc-time",
    "updatedAt": "utc-time",
}


## UPDATE
# PERFOM A PUT REQUEST ON [url]/api/[user_id]
user_id is the id of the person object that was returned when you made a post request
# Pass data as raw data in JSON format like, only pass the property to update
{
    "age": ge
}
# RESPONSE WILL LOOK LIKE
{
    "_id": "id",
    "name": "Example name",
    "gender": "Example gender",
    "age": age,
    "createdAt": "utc-time",
    "updatedAt": "utc-time",
}

## DELETE
# PERFOM A DELETE REQUEST ON [url]/api/[user_id]
user_id is the id of the person object that was returned when you made a post request
# RESPONSE WILL LOOK LIKE
{
    "message": "Person deleted"
}

#2
#### SAMPLE USAGE OF THE API ####
## CREATING A PERSON RESOURCE

# END POINT
POST: [url]/api/
# JSON OBJECT
{
    "name": "Learnmore Mombe",
    "gender": "male",
    "age": 26
}
# RESPONSE
{
    "name": "Learnmore Mombe",
    "gender": "male",
    "age": 26,
    "_id": "65041c6c51a403807ce5423f",
    "createdAt": "2023-09-15T08:57:16.276Z",
    "updatedAt": "2023-09-15T08:57:16.276Z",
    "__v": 0
}

## READING A PERSON RESOURCE

# END POINT
GET: [url]/api/65041c6c51a403807ce5423f
# RESPONSE
{
    "_id": "65041c6c51a403807ce5423f",
    "name": "Learnmore Mombe",
    "gender": "male",
    "age": 26,
    "createdAt": "2023-09-15T08:57:16.276Z",
    "updatedAt": "2023-09-15T08:57:16.276Z",
    "__v": 0
}

## READING A PERSON RESOURCE

# END POINT
PUT: [url]/api/65041c6c51a403807ce5423f
# JSON OBJECT
{
    "age": 30
}
# RESPONSE
{
    "_id": "65041c6c51a403807ce5423f",
    "name": "Learnmore Mombe",
    "gender": "male",
    "age": 30,
    "createdAt": "2023-09-15T08:57:16.276Z",
    "updatedAt": "2023-09-15T09:01:50.712Z",
    "__v": 0
}

## READING A PERSON RESOURCE

# END POINT
DELETE: [url]/api/65041c6c51a403807ce5423f
# RESPONSE
{
    "message": "Person deleted"
}