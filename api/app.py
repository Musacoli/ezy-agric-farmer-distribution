import flask
import json

from flask import request, jsonify, make_response

app = flask.Flask(__name__)
app.config["DEBUG"] = True

@app.route('/', methods=['GET'])
def home():
    return 'Welcome to the EzyAgric interview api'

# TODO: Add endpoint protection for auth access
@app.route('/api/v1/farmers/distribution', methods=['GET'])
def farmer_district_distribution():

    # pass the json database as a file into python
    with open('interview.json', 'r') as f:
        districts_dict = json.load(f)

    #send back a json response
    response = jsonify({ 'distribution' : districts_dict })

    # Enable Access-Control-Allow-Origin
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

# handle wrong endpoint requests
@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)

app.run()