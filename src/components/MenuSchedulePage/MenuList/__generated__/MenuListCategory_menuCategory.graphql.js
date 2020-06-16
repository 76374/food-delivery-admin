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
    +id: string,
    +$fragmentRefs: MenuListItem_menuItem$ref,
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


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MenuListCategory_menuCategory",
  "selections": [
    (v0/*: any*/),
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
        (v0/*: any*/),
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
})();
// prettier-ignore
(node/*: any*/).hash = 'bc08b0d5e99e1074203c82e57129d5b3';

module.exports = node;
