import psycopg2
from psycopg2 import OperationalError

#
#
# start up database
def create_connection():
    connection = None
    try:
        connection = psycopg2.connect(
            database="bobame",
            user="postgres",
            password="POSTykull2324",
            host="bobe-me-database.cuywg0rwuutu.ap-southeast-2.rds.amazonaws.com",
            port=5432,
        )
        print("Connection to PostgreSQL DB successful")
    except OperationalError as e:
        print(f"The error '{e}' occurred")
    return connection

connection = create_connection()
#
#

#
# NOTE : TO CREATE a brand new TABLE, use pgAdmin4
#
# use this function to input data
# examples include
# - update rating

def execute_query(connection, query):
    connection.rollback()
    connection.autocommit = True
    cursor = connection.cursor()
    try:
        cursor.execute(query)
        print("Query executed successfully")
    except OperationalError as e:
        print(f"The error '{e}' occurred")


# use this function to read data
# examples include :
# - filtered results by shop
# - filtered results by drink
# - drink info
# - shop info
def execute_read_query(connection, query):
    cursor = connection.cursor()
    result = None
    try:
        cursor.execute(query)
        result = cursor.fetchall()
        return result
    except OperationalError as e:
        print(f"The error '{e}' occurred")



select_users = "SELECT * FROM drink"
out = execute_read_query(connection, select_users)
print(out)

import random
# EXAMPLE : update existing data
update_post_description = f"""
UPDATE
  drink
SET
  rating = {random.randrange(1,5)}
WHERE
  id = 1
"""
execute_query(connection, update_post_description)

# EXAMPLE : print out all drinks in database
select_users = "SELECT * FROM drink"
out = execute_read_query(connection, select_users)
print(out)