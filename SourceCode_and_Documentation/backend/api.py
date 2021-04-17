"""
By Mango Team 3
Date: 24/10/2020
Integrated the backend into this server.
"""

from json import dumps
from flask import Flask, request, send_from_directory
from flask_cors import CORS
from error import InputError

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

# Porting
if __name__ == "__main__":
    APP.run(debug = True, port=5000)
