import time
import redis
import random
from flask import Flask, request, jsonify

app = Flask(__name__)
cache = redis.Redis(host='redis', port=5000)

def get_hit_count():
    retries = 5
    while True:
        try:
            return cache.incr('hits')
        except redis.exceptions.ConnectionError as exc:
            if retries == 0:
                raise exc
            retries -= 1
            time.sleep(0.5)

def get_random_quote():
    quotes = [
        "The only limit to our realization of tomorrow is our doubts of today.",
        "Do not wait to strike till the iron is hot; but make it hot by striking.",
        "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
        "The best way to predict the future is to invent it.",
        "You miss 100% of the shots you don't take.",
        "Whether you think you can or you think you can't, you're right."
    ]
    return random.choice(quotes)

@app.route('/')
def hello():
    count = get_hit_count()
    quote = get_random_quote()
    return 'Hello Nurse! I have been seen {} times.\nHere is a random quote for you: "{}"\n'.format(count, quote)

def is_prime(num):
    if num <= 1:
        return False
    if num <= 3:
        return True
    if num % 2 == 0 or num % 3 == 0:
        return False
    i = 5
    while i * i <= num:
        if num % i == 0 or num % (i + 2) == 0:
            return False
        i += 6
    return True

def generate_primes(limit):
    primes = []
    num = 2
    while len(primes) < limit:
        if is_prime(num):
            primes.append(num)
        num += 1
    return primes

@app.route('/primes', methods=['GET'])
def primes():
    limit = request.args.get('limit', type=int)
    if limit is None:
        return jsonify({"error": "Please provide a limit value"}), 400
    if limit <= 0:
        return jsonify({"error": "Limit must be a positive integer"}), 400
    
    prime_numbers = generate_primes(limit)
    return jsonify({"limit": limit, "primes": prime_numbers})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8087, debug=True)
