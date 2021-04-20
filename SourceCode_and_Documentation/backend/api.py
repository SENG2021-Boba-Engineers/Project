"""
By Mango Team 3
Date: 24/10/2020
Integrated the backend into this server.

NOTE:
We need a hash algorithm for storing accounts.
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
@APP.route("/api/echo", methods=['GET'])
def echo():
    data = request.args.get('data')
    if data == 'echo':
   	    raise InputError(description='Cannot echo "echo"')
    return dumps({
        'data': data
    })

@APP.route("/api/get_rewards", methods=['GET'])
def get_rewards():
    """
    Endpoint: 'api/get_rewards'
    EXAMPLE Parameter http://127.0.0.1:5000/api/get_rewards
    Verb: GET
    Parameter: user_token
    Output: { 'rewards': }
    """
    user_token = request.args.get('user_token')
    sql_query = f"""select * from reward
    where user_token = '{user_token}'
    """
    conn = db.create_connection()
    output = db.execute_read_query(conn, sql_query)
    rewards = []
    for row in output:
        rewards.append(row[1])
    return dumps({
        'rewards': rewards 
    })

@APP.route("/api/logout", methods=['POST'])
def logout():
    """
    Endpoint: 'api/logout'
    EXAMPLE Parameter http://127.0.0.1:5000/api/login
    Verb: POST
    Parameter: user_token, name, email
    Output: { 'is_success': 1|0 }
    """
    try:
        data = request.get_json()
        user_token = data['user_token']
        sql_update = f"""UPDATE account set status = 0 where user_token = '{user_token}'
        """
        conn = db.create_connection()
        db.execute_query(conn, sql_update)
        conn.close()
        return dumps({
            'is_success': 1
        })
    except:
        return dumps({
            'is_success': 0
        })

@APP.route("/api/login", methods=['POST'])
def login():
    """
    Endpoint: 'api/login'
    EXAMPLE Parameter http://127.0.0.1:5000/api/login
    Verb: GET
    Parameter: user_token, name, email
    Output: { 'drink_id': [], 'drink_name' = [], 'drink_rating' = []}
    """
    try:
        data = request.get_json()
        user_token = data['user_token']
        name = data['name']
        email = data['email']
        sql_check = f"""select user_token from account
        where user_token = '{user_token}'
        """
        conn = db.create_connection()
        output = db.execute_read_query(conn, sql_check)
        if not output:
            sql_insert = f"""INSERT INTO account VALUES('{user_token}', '{name}', '{email}', {1})
            """
            db.execute_query(conn, sql_insert)
        else:
            sql_update = f"""UPDATE account set status = 1 where user_token = '{user_token}'
            """
            db.execute_query(conn, sql_update)
        conn.close()
        return dumps({
            'is_success': 200
        })
    except:
        return dumps({
            'is_success': 500
        })

@APP.route("/api/search_drinks", methods=['GET'])
def search_drinks():
    """
    Endpoint: 'api/search_drinks'
    EXAMPLE Parameter http://127.0.0.1:5000/api/api/search_drinks?search_term=""
    Verb: GET
    Parameter: search_term
    Output: { 'drink_id': [], 'drink_name' = [], 'drink_rating' = []}
    """
    search_term = request.args.get('search_term')
    if search_term:
        sql_query = f"""select * from drink
        where name ilike '%{search_term}%'
        """
    else:
        sql_query = f"""select * from drink
        """
    conn = db.create_connection()
    output = db.execute_read_query(conn, sql_query)
    drinks_dict = {
        'drink_ids' : [],
        'drink_names' : [],
        'drink_ratings': []
    }
    for row in output:
        drinks_dict['drink_ids'].append(row[0])
        drinks_dict['drink_names'].append(row[1])
        drinks_dict['drink_ratings'].append(row[2])
    conn.close()
    return dumps(drinks_dict)

@APP.route("/api/search_shops", methods=['GET'])
def search_shops():
    """
    Endpoint: '/search_shops'
    EXAMPLE Parameter http://127.0.0.1:5000/api/api/search_shop?search_term=""
    Verb: GET
    Parameter: search_term
    Output: { 'shop_name': [], 'shop_town' = [], 'shop_city' = [], 'shop_country': []}
    """
    search_term = request.args.get('search_term')
    if search_term:
        sql_query = f"""select * from shop
        where shop.name ilike '%{search_term}%'
        """
    else:
        sql_query = f"""select * from shop
        """
    conn = db.create_connection()
    output = db.execute_read_query(conn, sql_query)
    shops_dict = {
        'shop_ids' : [],
        'shop_names' : [],
        'shop_pics': []
    }
    for row in output:
        shops_dict['shop_ids'].append(row[0])
        shops_dict['shop_names'].append(f"{row[1]} {row[2]}")
        shops_dict['shop_pics'].append(row[-1])
    conn.close()
    return dumps(shops_dict)

@APP.route("/api/get_shop_menu", methods=['GET'])
def get_shop_menu():
    """
    Endpoint: '/get_shop_times'
    EXAMPLE Parameter http://127.0.0.1:5000/api/get_shop_menu?shop_id-=1
    Verb: GET
    Parameter: shop_id
    Output: { 'drinks': [], 'price' = []}
    """
    shop_id = request.args.get('shop_id')
    sql_query = f"""select drink.name, menu.price from menu
    inner join drink on drink.id = menu.drink_id
    where menu.shop_id = {shop_id}
    """
    conn = db.create_connection()
    output = db.execute_read_query(conn, sql_query)
    drinks_dict = {
        'drinks': [],
        'prices': []
    }
    for row in output:
        drinks_dict['drinks'].append(row[0])
        drinks_dict['prices'].append(str(row[1]).format('.2f'))
    conn.close()
    return dumps(drinks_dict)

@APP.route("/api/get_toppings", methods=["GET"])
def get_toppings():
    """
    Endpoint: '/get_toppings'
    EXAMPLE Parameter http://127.0.0.1:5000/api/get_toppings?shop_id-=1
    Verb: GET
    Parameter: shop_id
    Output: { 'topping': [], 'price':[] }
    """
    id = request.args.get('shop_id')
    sql_query = f"""select * from topping
    where shop_id = {id}
    """
    conn = db.create_connection()
    output = db.execute_read_query(conn, sql_query)
    topping_dict = {
        'topping': [],
        'price': []
    }
    for row in output:
        topping_dict['topping'].append(row[1])
        topping_dict['price'].append(str(row[2]).format('.2f'))
    conn.close()
    return dumps(topping_dict)

@APP.route("/api/get_shop_times", methods=['GET'])
def get_shop_times():
    """
    Endpoint: '/get_shop_times'
    EXAMPLE Parameter http://127.0.0.1:5000/api/get_shop_times?shop_id-=1
    Verb: GET
    Parameter: shop_id
    Output: { 'days_of_week': [], 'shop_open' = [], 'shop_close' = []}
    """
    shop_id = request.args.get('shop_id')
    sql_query = f"""select day_of_week, opening_time, closing_time from shop_opening_times
    where shop_id = {shop_id}"""
    conn = db.create_connection()
    output = db.execute_read_query(conn, sql_query)
    time_dict = {
        'days_of_week': [],
        'shop_open': [],
        'shop_close': []
    }
    for row in output:
        time_dict['days_of_week'].append(row[0])
        time_dict['shop_open'].append(row[1])
        time_dict['shop_close'].append(row[2])
    conn.close()
    return dumps(time_dict)
    
@APP.route("/api/update_ratings", methods=['POST'])
def update_ratings():
    """
    Endpoint: '/update_ratings'
    EXAMPLE Parameter http://127.0.0.1:5000/api/update_ratings?rating=3.0&drink_id=1
    Verb: POST
    Parameter: rating, drink_id in json dict
    Output: { 'old_rating' : curr_rating, 'new_rating' : new_rating}
    """
    # returns none if no input
    data = request.get_json()
    rating = data['rating']
    drink_id = data['drink_id']

    # query the database for current rating
    sql_query = f"""select rating from drink where id = {drink_id}"""
    conn = db.create_connection()
    output = db.execute_read_query(conn, sql_query)
    curr_rating = output[0][0]
    # NOTE: need to include num of ratings to determien average
    new_rating = round( (curr_rating + float(rating)) / 2.0 , 2)
    update_post_description = f"""update drink set rating = {new_rating} WHERE id = {drink_id}"""
    db.execute_query(conn, update_post_description)

    # test change
    # select_users = "SELECT * FROM drink"
    # out = db.execute_read_query(conn, select_users)
    conn.close()
    return dumps({
        'old_rating' : curr_rating,
        'new_rating': new_rating,
        # 'output' : out,
    })

@APP.route("/api/get_drink_info", methods=['GET'])
def get_drink_info():
    """
    Endpoint: '/get_drink_info'
    EXAMPLE Parameter http://127.0.0.1:5000/api/get_drink_info?drink_id=1
    Verb: GET
    Parameter: drink_id
    Output: { 'id' : number, 'name' : string, 'rating' : float, 'drink_img' : string}
    """
    # returns none if no input
    drink_id = request.args.get('drink_id')
    # query the database for drink from drink_id
    sql_query = f"""select * from drink where id = {drink_id}"""
    conn = db.create_connection()
    output = db.execute_read_query(conn, sql_query)[0]
    conn.close()
    return dumps({
        'name'     :output[0],
        'rating'   :output[1],
        'drink_img':output[2]
    })

@APP.route("/api/drink_sold_where", methods=['GET'])
def drinks_sold():
    """
    Endpoint: '/drinks_sold'
    EXAMPLE Parameter http://127.0.0.1:5000/api/drink_sold_where?drink_id=1
    Verb: GET
    Parameter: drink_id
    Output: { 'shop_name' : [], 'price' : [] }
    """
    drink_id = request.args.get('drink_id')
    sql_query = f"""select shop.name, shop.town, menu.price from menu
    inner join shop on menu.shop_id = shop.id
    where menu.drink_id = {drink_id}"""
    conn = db.create_connection()
    output = db.execute_read_query(conn, sql_query)
    drink_sold_where_dict = {
        'shop_name': [],
        'prices': []
    }
    for row in output:
        drink_sold_where_dict['shop_name'].append(f"{row[0]} {row[1]}")
        drink_sold_where_dict['prices'].append(str(row[2]).format('.2f'))
    conn.close()
    return dumps(drink_sold_where_dict)

@APP.route("/api/get_ingredients", methods=['GET'])
def get_ingredients():
    """
    Endpoint: '/get_drink_info'
    EXAMPLE Parameter http://127.0.0.1:5000/api/get_ingredients?drink_id=1
    Verb: GET
    Parameter: drink_id
    Output: { 'ingredients' : []}
    """
    drink_id = request.args.get('drink_id')
    sql_query = f"""select * from drink_ingredients where drink_ingredients.drink_id = {drink_id}"""
    conn = db.create_connection()
    output = db.execute_read_query(conn, sql_query)
    ingredients_dict = {
        'ingredients': []
    }
    for row in output:
        ingredients_dict['ingredients'].append(row[1])
    conn.close()
    return dumps(ingredients_dict)

# Porting
if __name__ == "__main__":
    APP.run(debug = True, port=5000)
