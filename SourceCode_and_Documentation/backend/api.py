"""
By Mango Team 3
Date: 24/10/2020
Integrated the backend into this server.
"""

from json import dumps
from flask import Flask, request, send_from_directory
from flask_cors import CORS
from error import InputError
import db

def defaultHandler(err):
    response = err.get_response()
    print('response', err, err.get_response())
    response.data = dumps({
        "code": err.code,
        "name": "Internal Error",
        "message": err.get_description()
    })
    response.content_type = 'application/json'
    return response

APP = Flask(__name__)
CORS(APP)

APP.config['TRAP_HTTP_EXCEPTIONS'] = False
APP.register_error_handler(Exception, defaultHandler)

# ECHO TEST
@APP.route("/echo", methods=['GET'])
def echo():
    data = request.args.get('data')
    if data == 'echo':
   	    raise InputError(description='Cannot echo "echo"')
    return dumps({
        'data': data
    })

# Shop Times
@APP.route("/get_shop_times", methods=['GET'])
def get_shop_times():
    data = request.args.get('shop_name')
    sql_query = f"""select name from shop
    where name = '{data}'"""
    conn = db.create_connection()
    output = db.execute_read_query(conn, sql_query)
    return dumps({
        'data': str(output)
    })
    

# Endpoint: '/update_ratings'
# EXAMPLE Parameter http://127.0.0.1:50000/update_ratings?rating=3.0&drink_id=1
# Verb: POST
# Parameter: rating, drink_id
# Output: { 'old_rating' : curr_rating, 'new_rating' : new_rating}
#
@APP.route("/update_ratings", methods=['POST'])
def update_ratings():
    # returns none if no input
    rating   = request.args.get('rating', None)
    drink_id = request.args.get('drink_id', None)

    # query the database for current rating
    sql_query = f"""select rating from drink where id = {drink_id}"""
    conn = db.create_connection()
    output = db.execute_read_query(conn, sql_query)
    curr_rating = output[0][0]
    # NOTE: need to include num of ratings to determien average
    new_rating = round( (curr_rating + float(rating)) / 2.0 , 2)
    update_post_description = f"""update drink set rating = {new_rating} WHERE id = {drink_id}"""
    output = db.execute_query(conn, update_post_description)

    # test change
    # select_users = "SELECT * FROM drink"
    # out = db.execute_read_query(conn, select_users)

    return dumps({
        'old_rating' : curr_rating,
        'new_rating': new_rating,
        # 'output' : out,
    })
    

# Endpoint: '/get_drink_info'
# EXAMPLE Parameter http://127.0.0.1:50000/drink_id=1
# Verb: GET
# Parameter: drink_id
# Output: { 'id' : number, 'name' : string, 'rating' : float, 'drink_img' : string}
#
@APP.route("/get_drink_info", methods=['GET'])
def get_drink_info():
    # returns none if no input
    drink_id = request.args.get('drink_id', None)

    # query the database for drink from drink_id
    sql_query = f"""select * from drink where id = {drink_id}"""
    conn = db.create_connection()
    output = db.execute_read_query(conn, sql_query)[0]

    return dumps({
        'id'       :output[0],
        'name'     :output[1],
        'rating'   :output[2],
        'drink_img':output[3],
    })


# Porting
if __name__ == "__main__":
    APP.run(debug = True, port=50000)
