import stripe
stripe.api_key = "sk_test_BQokikJOvBiI2HlWgH4olfQ2"

try:
  # Use Stripe's library to make requests...
  pass
except stripe.error.CardError as e:
  # Since it's a decline, stripe.error.CardError will be caught
  body = e.json_body
  err  = body['error']

  print "Status is: %s" % e.http_status
  print "Type is: %s" % err['type']
  print "Code is: %s" % err['code']
  # param is '' in this case
  print "Param is: %s" % err['param']
  print "Message is: %s" % err['message']
except stripe.error.RateLimitError as e:
  # Too many requests made to the API too quickly
  pass
except stripe.error.InvalidRequestError as e:
  # Invalid parameters were supplied to Stripe's API
  pass
except stripe.error.AuthenticationError as e:
  # Authentication with Stripe's API failed
  # (maybe you changed API keys recently)
  pass
except stripe.error.APIConnectionError as e:
  # Network communication with Stripe failed
  pass
except stripe.error.StripeError as e:
  # Display a very generic error to the user, and maybe send
  # yourself an email
  pass
except Exception as e:
  # Something else happened, completely unrelated to Stripe
  pass

# Retrieve Customer
stripe.Charge.retrieve("ch_1ACakT2eZvKYlo2CzCTgdZIm", expand=['customer'])

# Make Charge
stripe.Charge.create(
  amount=2000,
  currency="usd",
  description="Charge for matthew.white@example.com",
  source="tok_189gBF2eZvKYlo2CgwGwszmT", # obtained with Stripe.js
  idempotency_key='U23jyNrYZwUuo1Fq'
)

# Update Metadata
stripe.Charge.create(
  amount=2000,
  currency="usd",
  source="tok_189gBF2eZvKYlo2CgwGwszmT", # obtained with Stripe.js
  metadata={'order_id': '6735'}
)

# Auto Pagination
customers = stripe.Customer.all(limit=3)
for customer in customers.auto_paging_iter():
  print customer

# Example Response
'''
<Charge charge id=ch_1ACakT2eZvKYlo2CzCTgdZIm at 0x00000a> JSON: {
  "id": "ch_1ACakT2eZvKYlo2CzCTgdZIm",
  "object": "charge",
  "amount": 999,
  "amount_refunded": 0,
  "application": null,
  "application_fee": null,
  "balance_transaction": "txn_1ACakT2eZvKYlo2CRiceOzt8",
  "captured": true,
  "created": 1493153941,
  "currency": "usd",
  "customer": "cus_9RTz4auQzUc1tW",
  "description": null,
  "destination": null,
  "dispute": null,
  "failure_code": null,
  "failure_message": null,
  "fraud_details": {
  },
  "invoice": "in_1ACZnJ2eZvKYlo2C2Npftg46",
  "livemode": false,
  "metadata": {
    "order_id": "6735"
  },
  "on_behalf_of": null,
  "order": null,
  "outcome": {
    "network_status": "approved_by_network",
    "reason": null,
    "risk_level": "normal",
    "seller_message": "Payment complete.",
    "type": "authorized"
  },
  "paid": true,
  "receipt_email": null,
  "receipt_number": null,
  "refunded": false,
  "refunds": {
    "object": "list",
    "data": [

    ],
    "has_more": false,
    "total_count": 0,
    "url": "/v1/charges/ch_1ACakT2eZvKYlo2CzCTgdZIm/refunds"
  },
  "review": null,
  "shipping": null,
  "source": {
    "id": "card_198b1W2eZvKYlo2C0j8v99Gp",
    "object": "card",
    "address_city": null,
    "address_country": null,
    "address_line1": null,
    "address_line1_check": null,
    "address_line2": null,
    "address_state": null,
    "address_zip": null,
    "address_zip_check": null,
    "brand": "Visa",
    "country": "US",
    "customer": "cus_9RTz4auQzUc1tW",
    "cvc_check": null,
    "dynamic_last4": null,
    "exp_month": 12,
    "exp_year": 2017,
    "fingerprint": "Xt5EWLLDS7FJjR1c",
    "funding": "credit",
    "last4": "4242",
    "metadata": {
    },
    "name": null,
    "tokenization_method": null
  },
  "source_transfer": null,
  "statement_descriptor": null,
  "status": "succeeded",
  "transfer_group": null
}
'''