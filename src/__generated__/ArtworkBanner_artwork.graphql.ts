/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
export type ArtworkBanner_artwork = {
    readonly partner: ({
        readonly type: string | null;
        readonly name: string | null;
        readonly initials: string | null;
        readonly profile: ({
            readonly icon: ({
                readonly url: string | null;
            }) | null;
        }) | null;
    }) | null;
    readonly artworkContextAuction: ({
        readonly __typename: "ArtworkContextAuction";
        readonly name: string | null;
        readonly href: string | null;
        readonly is_auction: boolean | null;
        readonly is_closed: boolean | null;
        readonly is_open: boolean | null;
        readonly live_start_at: string | null;
        readonly live_url_if_open: string | null;
    } | {
        /*This will never be '% other', but we need some
        value in case none of the concrete values match.*/
        readonly __typename: "%other";
    }) | null;
    readonly artworkContextFair: ({
        readonly __typename: "ArtworkContextFair";
        readonly name: string | null;
        readonly href: string | null;
        readonly is_active: boolean | null;
        readonly start_at: string | null;
        readonly end_at: string | null;
        readonly profile: ({
            readonly initials: string | null;
            readonly icon: ({
                readonly img: ({
                    readonly url: string | null;
                }) | null;
            }) | null;
        }) | null;
    } | {
        /*This will never be '% other', but we need some
        value in case none of the concrete values match.*/
        readonly __typename: "%other";
    }) | null;
    readonly artworkContextPartnerShow: ({
        readonly __typename: "ArtworkContextPartnerShow";
        readonly name: string | null;
        readonly href: string | null;
        readonly type: string | null;
        readonly status: string | null;
        readonly thumbnail: ({
            readonly img: ({
                readonly url: string | null;
            }) | null;
        }) | null;
    } | {
        /*This will never be '% other', but we need some
        value in case none of the concrete values match.*/
        readonly __typename: "%other";
    }) | null;
};



const node: ConcreteFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "initials",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "href",
  "args": null,
  "storageKey": null
},
v6 = [
  {
    "kind": "LinkedField",
    "alias": "img",
    "name": "resized",
    "storageKey": "resized(height:70,version:\"square\",width:70)",
    "args": [
      {
        "kind": "Literal",
        "name": "height",
        "value": 70,
        "type": "Int"
      },
      {
        "kind": "Literal",
        "name": "version",
        "value": "square",
        "type": "[String]"
      },
      {
        "kind": "Literal",
        "name": "width",
        "value": 70,
        "type": "Int"
      }
    ],
    "concreteType": "ResizedImageUrl",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "url",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Fragment",
  "name": "ArtworkBanner_artwork",
  "type": "Artwork",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "partner",
      "storageKey": null,
      "args": null,
      "concreteType": "Partner",
      "plural": false,
      "selections": [
        v0,
        v1,
        v2,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "profile",
          "storageKey": null,
          "args": null,
          "concreteType": "Profile",
          "plural": false,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "icon",
              "storageKey": null,
              "args": null,
              "concreteType": "Image",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "url",
                  "args": [
                    {
                      "kind": "Literal",
                      "name": "version",
                      "value": "square140",
                      "type": "[String]"
                    }
                  ],
                  "storageKey": "url(version:\"square140\")"
                }
              ]
            },
            v3
          ]
        },
        v3
      ]
    },
    {
      "kind": "LinkedField",
      "alias": "artworkContextAuction",
      "name": "context",
      "storageKey": null,
      "args": null,
      "concreteType": null,
      "plural": false,
      "selections": [
        v4,
        v3,
        {
          "kind": "InlineFragment",
          "type": "ArtworkContextAuction",
          "selections": [
            v1,
            v5,
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "is_auction",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "is_closed",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "is_open",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "live_start_at",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "live_url_if_open",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": "artworkContextFair",
      "name": "context",
      "storageKey": null,
      "args": null,
      "concreteType": null,
      "plural": false,
      "selections": [
        v4,
        v3,
        {
          "kind": "InlineFragment",
          "type": "ArtworkContextFair",
          "selections": [
            v1,
            v5,
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "is_active",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "start_at",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "end_at",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "profile",
              "storageKey": null,
              "args": null,
              "concreteType": "Profile",
              "plural": false,
              "selections": [
                v2,
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "icon",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "Image",
                  "plural": false,
                  "selections": v6
                },
                v3
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": "artworkContextPartnerShow",
      "name": "context",
      "storageKey": null,
      "args": null,
      "concreteType": null,
      "plural": false,
      "selections": [
        v4,
        v3,
        {
          "kind": "InlineFragment",
          "type": "ArtworkContextPartnerShow",
          "selections": [
            v1,
            v5,
            v0,
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "status",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": "thumbnail",
              "name": "cover_image",
              "storageKey": null,
              "args": null,
              "concreteType": "Image",
              "plural": false,
              "selections": v6
            }
          ]
        }
      ]
    },
    v3
  ]
};
})();
(node as any).hash = 'e1b05ea3a25e680bbabe03c8aec1da54';
export default node;
