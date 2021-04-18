from werkzeug.exceptions import HTTPException

class AccessError(HTTPException):
    code = 400
    message = 'Information Cannot be Accessed'

class InputError(HTTPException):
    code = 400
    message = 'Invalid Input'

class ServerError(HTTPException):
    code = 500
    message = 'Internal Server Error'
