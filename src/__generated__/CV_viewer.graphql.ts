/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
export type CV_viewer = {
    readonly artist_soloShows: ({}) | null;
    readonly artist_groupShows: ({}) | null;
    readonly artist_fairBooths: ({}) | null;
};



const node: ConcreteFragment = (function(){
var v0 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "artistID",
    "type": "String!"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "CV_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "soloShows_at_a_fair",
      "type": "Boolean",
      "defaultValue": false
    },
    {
      "kind": "LocalArgument",
      "name": "soloShows_solo_show",
      "type": "Boolean",
      "defaultValue": true
    },
    {
      "kind": "LocalArgument",
      "name": "groupShows_at_a_fair",
      "type": "Boolean",
      "defaultValue": false
    },
    {
      "kind": "LocalArgument",
      "name": "fairBooths_at_a_fair",
      "type": "Boolean",
      "defaultValue": true
    },
    {
      "kind": "RootArgument",
      "name": "artistID",
      "type": "String!"
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "artist_soloShows",
      "name": "artist",
      "storageKey": null,
      "args": v0,
      "concreteType": "Artist",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "CVItem_artist",
          "args": [
            {
              "kind": "Variable",
              "name": "at_a_fair",
              "variableName": "soloShows_at_a_fair",
              "type": null
            },
            {
              "kind": "Variable",
              "name": "solo_show",
              "variableName": "soloShows_solo_show",
              "type": null
            }
          ]
        },
        v1
      ]
    },
    {
      "kind": "LinkedField",
      "alias": "artist_groupShows",
      "name": "artist",
      "storageKey": null,
      "args": v0,
      "concreteType": "Artist",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "CVItem_artist",
          "args": [
            {
              "kind": "Variable",
              "name": "at_a_fair",
              "variableName": "groupShows_at_a_fair",
              "type": null
            }
          ]
        },
        v1
      ]
    },
    {
      "kind": "LinkedField",
      "alias": "artist_fairBooths",
      "name": "artist",
      "storageKey": null,
      "args": v0,
      "concreteType": "Artist",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "CVItem_artist",
          "args": [
            {
              "kind": "Variable",
              "name": "at_a_fair",
              "variableName": "fairBooths_at_a_fair",
              "type": null
            }
          ]
        },
        v1
      ]
    }
  ]
};
})();
(node as any).hash = 'c44abe868f13498038d51c77daf31339';
export default node;
