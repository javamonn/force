/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
export type Metadata_artwork = {
    readonly href: string | null;
};



const node: ConcreteFragment = {
  "kind": "Fragment",
  "name": "Metadata_artwork",
  "type": "Artwork",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "Details_artwork",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Contact_artwork",
      "args": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "href",
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
(node as any).hash = '5e64e5a09dbf4016cd89ec6a41b009e5';
export default node;
