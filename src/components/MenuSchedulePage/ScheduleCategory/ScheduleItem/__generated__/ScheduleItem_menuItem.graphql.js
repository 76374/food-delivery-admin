/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ScheduleItem_menuItem$ref: FragmentReference;
declare export opaque type ScheduleItem_menuItem$fragmentType: ScheduleItem_menuItem$ref;
export type ScheduleItem_menuItem = {|
  +id: string,
  +title: string,
  +price: number,
  +$refType: ScheduleItem_menuItem$ref,
|};
export type ScheduleItem_menuItem$data = ScheduleItem_menuItem;
export type ScheduleItem_menuItem$key = {
  +$data?: ScheduleItem_menuItem$data,
  +$fragmentRefs: ScheduleItem_menuItem$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ScheduleItem_menuItem",
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
      "kind": "ScalarField",
      "name": "price",
      "storageKey": null
    }
  ],
  "type": "MenuItem"
};
// prettier-ignore
(node/*: any*/).hash = '0ec3218c8b73c4774d50aa913cdbd938';

module.exports = node;
