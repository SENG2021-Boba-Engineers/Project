"""
This is the python script to interact with the AWS RDS PostgreSQL database.

# NOTE : TO CREATE a brand new TABLE, use pgAdmin4
#
# use this function to input data
# examples include
# - update rating
"""

import psycopg2
from random import randrange

# Start up database
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
        return connection
    except psycopg2.OperationalError as e:
        print(f"The error '{e}' occurred")

def execute_query(connection, query):
    """
    Execute SQL Queries
    """
    connection.rollback()
    connection.autocommit = True
    cursor = connection.cursor()
    try:
        cursor.execute(query)
    except psycopg2.OperationalError as e:
        print(f"The error '{e}' occurred")

def execute_read_query(connection, query):
    """
    use this function to read data
    examples include :
    - filtered results by shop
    - filtered results by drink
    - drink info
    - shop info
    """
    cursor = connection.cursor()
    result = None
    try:
        cursor.execute(query)
        result = cursor.fetchall()
        return result
    except psycopg2.OperationalError as e:
        print(f"The error '{e}' occurred")

if __name__ == "__main__":
    """
    Testing functions
    """
    connection = create_connection()
    select_users = "SELECT * FROM drink"
    out = execute_read_query(connection, select_users)
    print(out)

    # EXAMPLE : update existing data
    update_post_description = f"""
    UPDATE
    drink
    SET
    rating = {randrange(1,5)}
    WHERE
    id = 1
    """
    execute_query(connection, update_post_description)

    # EXAMPLE : print out all drinks in database
    select_users = "SELECT * FROM drink"
    out = execute_read_query(connection, select_users)
    connection.close() 
    print(out)