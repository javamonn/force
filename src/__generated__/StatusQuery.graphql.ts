/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type StatusQueryVariables = {};
export type StatusQueryResponse = {
    readonly order: ({}) | null;
};



/*
query StatusQuery {
  order(id: "42") {
    ...Status_order
    __id: id
  }
}

fragment Status_order on Order {
  id
  code
  state
  mode
  requestedFulfillment {
    __typename
    ... on Ship {
      __typename
    }
    ... on Pickup {
      __typename
    }
  }
  ...TransactionSummary_order
  ...ShippingAndPaymentSummary_order
  lineItems {
    edges {
      node {
        fulfillments {
          edges {
            node {
              courier
              trackingId
              estimatedDelivery(format: "MMM Do, YYYY")
              __id: id
            }
          }
        }
        artwork {
          id
          is_acquireable
          ...ItemReview_artwork
          __id
        }
        __id: id
      }
    }
  }
  __id: id
}

fragment TransactionSummary_order on Order {
  mode
  shippingTotal(precision: 2)
  shippingTotalCents
  taxTotal(precision: 2)
  taxTotalCents
  itemsTotal(precision: 2)
  offerTotal(precision: 2)
  buyerTotal(precision: 2)
  seller {
    __typename
    ... on Partner {
      name
    }
    ... on Node {
      __id
    }
    ... on User {
      __id
    }
  }
  lastOffer {
    id
    amountCents
    __id: id
  }
  lineItems {
    edges {
      node {
        artwork {
          artist_names
          title
          date
          shippingOrigin
          image {
            resized_transactionSummary: resized(width: 55) {
              url
            }
          }
          __id
        }
        __id: id
      }
    }
  }
  __id: id
}

fragment ShippingAndPaymentSummary_order on Order {
  state
  requestedFulfillment {
    __typename
    ...ShippingAddress_ship
  }
  lineItems {
    edges {
      node {
        artwork {
          shippingOrigin
          __id
        }
        __id: id
      }
    }
  }
  creditCard {
    brand
    last_digits
    expiration_year
    expiration_month
    __id
  }
  __id: id
}

fragment ItemReview_artwork on Artwork {
  artist_names
  title
  date
  medium
  dimensions {
    in
    cm
  }
  attribution_class {
    short_description
  }
  image {
    resized(width: 185) {
      url
    }
  }
  __id
}

fragment ShippingAddress_ship on Ship {
  name
  addressLine1
  addressLine2
  city
  postalCode
  region
  country
  phoneNumber
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "42",
    "type": "String!"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": "__id",
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v5 = [
  {
    "kind": "Literal",
    "name": "precision",
    "value": 2,
    "type": "Int"
  }
],
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__id",
  "args": null,
  "storageKey": null
},
v7 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "url",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "StatusQuery",
  "id": null,
  "text": "query StatusQuery {\n  order(id: \"42\") {\n    ...Status_order\n    __id: id\n  }\n}\n\nfragment Status_order on Order {\n  id\n  code\n  state\n  mode\n  requestedFulfillment {\n    __typename\n    ... on Ship {\n      __typename\n    }\n    ... on Pickup {\n      __typename\n    }\n  }\n  ...TransactionSummary_order\n  ...ShippingAndPaymentSummary_order\n  lineItems {\n    edges {\n      node {\n        fulfillments {\n          edges {\n            node {\n              courier\n              trackingId\n              estimatedDelivery(format: \"MMM Do, YYYY\")\n              __id: id\n            }\n          }\n        }\n        artwork {\n          id\n          is_acquireable\n          ...ItemReview_artwork\n          __id\n        }\n        __id: id\n      }\n    }\n  }\n  __id: id\n}\n\nfragment TransactionSummary_order on Order {\n  mode\n  shippingTotal(precision: 2)\n  shippingTotalCents\n  taxTotal(precision: 2)\n  taxTotalCents\n  itemsTotal(precision: 2)\n  offerTotal(precision: 2)\n  buyerTotal(precision: 2)\n  seller {\n    __typename\n    ... on Partner {\n      name\n    }\n    ... on Node {\n      __id\n    }\n    ... on User {\n      __id\n    }\n  }\n  lastOffer {\n    id\n    amountCents\n    __id: id\n  }\n  lineItems {\n    edges {\n      node {\n        artwork {\n          artist_names\n          title\n          date\n          shippingOrigin\n          image {\n            resized_transactionSummary: resized(width: 55) {\n              url\n            }\n          }\n          __id\n        }\n        __id: id\n      }\n    }\n  }\n  __id: id\n}\n\nfragment ShippingAndPaymentSummary_order on Order {\n  state\n  requestedFulfillment {\n    __typename\n    ...ShippingAddress_ship\n  }\n  lineItems {\n    edges {\n      node {\n        artwork {\n          shippingOrigin\n          __id\n        }\n        __id: id\n      }\n    }\n  }\n  creditCard {\n    brand\n    last_digits\n    expiration_year\n    expiration_month\n    __id\n  }\n  __id: id\n}\n\nfragment ItemReview_artwork on Artwork {\n  artist_names\n  title\n  date\n  medium\n  dimensions {\n    in\n    cm\n  }\n  attribution_class {\n    short_description\n  }\n  image {\n    resized(width: 185) {\n      url\n    }\n  }\n  __id\n}\n\nfragment ShippingAddress_ship on Ship {\n  name\n  addressLine1\n  addressLine2\n  city\n  postalCode\n  region\n  country\n  phoneNumber\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "StatusQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "order",
        "storageKey": "order(id:\"42\")",
        "args": v0,
        "concreteType": "Order",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Status_order",
            "args": null
          },
          v1
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "StatusQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "order",
        "storageKey": "order(id:\"42\")",
        "args": v0,
        "concreteType": "Order",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "taxTotalCents",
            "args": null,
            "storageKey": null
          },
          v2,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "state",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "mode",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "requestedFulfillment",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": false,
            "selections": [
              v3,
              {
                "kind": "InlineFragment",
                "type": "Ship",
                "selections": [
                  v4,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "addressLine1",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "addressLine2",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "city",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "postalCode",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "region",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "country",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "phoneNumber",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "shippingTotal",
            "args": v5,
            "storageKey": "shippingTotal(precision:2)"
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "shippingTotalCents",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "taxTotal",
            "args": v5,
            "storageKey": "taxTotal(precision:2)"
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "code",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "itemsTotal",
            "args": v5,
            "storageKey": "itemsTotal(precision:2)"
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "offerTotal",
            "args": v5,
            "storageKey": "offerTotal(precision:2)"
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "buyerTotal",
            "args": v5,
            "storageKey": "buyerTotal(precision:2)"
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "seller",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": false,
            "selections": [
              v3,
              v6,
              {
                "kind": "InlineFragment",
                "type": "Partner",
                "selections": [
                  v4
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "lastOffer",
            "storageKey": null,
            "args": null,
            "concreteType": "Offer",
            "plural": false,
            "selections": [
              v2,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "amountCents",
                "args": null,
                "storageKey": null
              },
              v1
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "lineItems",
            "storageKey": null,
            "args": null,
            "concreteType": "OrderLineItemConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "OrderLineItemEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "OrderLineItem",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "artwork",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Artwork",
                        "plural": false,
                        "selections": [
                          v6,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "artist_names",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "date",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "shippingOrigin",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "image",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Image",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": "resized_transactionSummary",
                                "name": "resized",
                                "storageKey": "resized(width:55)",
                                "args": [
                                  {
                                    "kind": "Literal",
                                    "name": "width",
                                    "value": 55,
                                    "type": "Int"
                                  }
                                ],
                                "concreteType": "ResizedImageUrl",
                                "plural": false,
                                "selections": v7
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "resized",
                                "storageKey": "resized(width:185)",
                                "args": [
                                  {
                                    "kind": "Literal",
                                    "name": "width",
                                    "value": 185,
                                    "type": "Int"
                                  }
                                ],
                                "concreteType": "ResizedImageUrl",
                                "plural": false,
                                "selections": v7
                              }
                            ]
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "title",
                            "args": null,
                            "storageKey": null
                          },
                          v2,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "is_acquireable",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "medium",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "dimensions",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "dimensions",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "in",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "cm",
                                "args": null,
                                "storageKey": null
                              }
                            ]
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "attribution_class",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "AttributionClass",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "short_description",
                                "args": null,
                                "storageKey": null
                              }
                            ]
                          }
                        ]
                      },
                      v1,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "fulfillments",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "OrderFulfillmentConnection",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "edges",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "OrderFulfillmentEdge",
                            "plural": true,
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "node",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "OrderFulfillment",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "courier",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "trackingId",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "estimatedDelivery",
                                    "args": [
                                      {
                                        "kind": "Literal",
                                        "name": "format",
                                        "value": "MMM Do, YYYY",
                                        "type": "String"
                                      }
                                    ],
                                    "storageKey": "estimatedDelivery(format:\"MMM Do, YYYY\")"
                                  },
                                  v1
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          v1,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "creditCard",
            "storageKey": null,
            "args": null,
            "concreteType": "CreditCard",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "brand",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "last_digits",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "expiration_year",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "expiration_month",
                "args": null,
                "storageKey": null
              },
              v6
            ]
          }
        ]
      }
    ]
  }
};
})();
(node as any).hash = '1833f6ce90c418bc3481df5633f99aa8';
export default node;
