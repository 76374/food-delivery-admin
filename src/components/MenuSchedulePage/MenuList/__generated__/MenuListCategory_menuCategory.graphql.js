/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type MenuListItem_menuItem$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type MenuListCategory_menuCategory$ref: FragmentReference;
declare export opaque type MenuListCategory_menuCategory$fragmentType: MenuListCategory_menuCategory$ref;
export type MenuListCategory_menuCategory = {|
  +id: string,
  +title: string,
  +items: $ReadOnlyArray<?{|
    +$fragmentRefs: MenuListItem_menuItem$ref
  |}>,
  +$refType: MenuListCategory_menuCategory$ref,
|};
export type MenuListCategory_menuCategory$data = MenuListCategory_menuCategory;
export type MenuListCategory_menuCategory$key = {
  +$data?: MenuListCategory_menuCategory$data,
  +$fragmentRefs: MenuListCategory_menuCategory$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MenuListCategory_menuCategory",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "MenuItem",
      "kind": "LinkedField",
      "name": "items",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "MenuListItem_menuItem"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "MenuCategory"
};
// prettier-ignore
(node/*: any*/).hash = 'a03ce24bd474a886e81f79c44b056c58';

module.exports = node;
