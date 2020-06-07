/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type MenuListItem_menuItem$ref: FragmentReference;
declare export opaque type MenuListItem_menuItem$fragmentType: MenuListItem_menuItem$ref;
export type MenuListItem_menuItem = {|
  +id: string,
  +title: string,
  +$refType: MenuListItem_menuItem$ref,
|};
export type MenuListItem_menuItem$data = MenuListItem_menuItem;
export type MenuListItem_menuItem$key = {
  +$data?: MenuListItem_menuItem$data,
  +$fragmentRefs: MenuListItem_menuItem$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MenuListItem_menuItem",
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
    }
  ],
  "type": "MenuItem"
};
// prettier-ignore
(node/*: any*/).hash = '8777647473378ab7a2d04df0bf3f09b9';

module.exports = node;
