#### SETTING UP THE PROJECT #####

# The API is hosted on render and can be accessed on : [https://hngx-backendend-stagetwo.onrender.com/api]

# The person resource is made of three parameters
1. name -> full name of the person
2. gender -> the gender of the person
3. age -> the age of the person

#### USE POSTMAN TO TEST AND PERFOM CRUD OPERATIONS ON THE API ####

## CREATE
# PERFOM A POST REQUEST ON [https://hngx-backendend-stagetwo.onrender.com/api/api/]
# Pass data as raw data in JSON format like
{
    "name": "Paris Mombe",
    "gender": "female",
    "age": 6
}

## READ
# PERFOM A GET REQUEST ON [https://hngx-backendend-stagetwo.onrender.com/api/user_id]
the id of the person that was returned when you made a post request

## UPDATE
# PERFOM A PUT REQUEST ON [https://hngx-backendend-stagetwo.onrender.com/api/user_id]
# Pass data as raw data in JSON format like
{
    "age": 8
}

## DELETE
# PERFOM A DELETE REQUEST ON [https://hngx-backendend-stagetwo.onrender.com/api/user_id]