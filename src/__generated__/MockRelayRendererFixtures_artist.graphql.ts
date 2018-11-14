/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
export type MockRelayRendererFixtures_artist = {
    readonly name: string | null;
};



const node: ConcreteFragment = {
  "kind": "Fragment",
  "name": "MockRelayRendererFixtures_artist",
  "type": "Artist",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "__id",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '00923700fab4960aafc6cd20281ef191';
export default node;
