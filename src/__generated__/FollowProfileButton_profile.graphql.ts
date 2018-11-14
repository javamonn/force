/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
export type FollowProfileButton_profile = {
    readonly __id: string;
    readonly id: string;
    readonly is_followed: boolean | null;
};



const node: ConcreteFragment = {
  "kind": "Fragment",
  "name": "FollowProfileButton_profile",
  "type": "Profile",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "__id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "is_followed",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '8bd28a5e8f50513042ec5fd992971a55';
export default node;
