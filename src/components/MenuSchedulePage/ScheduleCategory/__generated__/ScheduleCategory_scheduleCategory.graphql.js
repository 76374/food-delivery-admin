/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ScheduleItem_menuItem$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ScheduleCategory_scheduleCategory$ref: FragmentReference;
declare export opaque type ScheduleCategory_scheduleCategory$fragmentType: ScheduleCategory_scheduleCategory$ref;
export type ScheduleCategory_scheduleCategory = {|
  +category: {|
    +title: string
  |},
  +items: $ReadOnlyArray<?{|
    +$fragmentRefs: ScheduleItem_menuItem$ref
  |}>,
  +$refType: ScheduleCategory_scheduleCategory$ref,
|};
export type ScheduleCategory_scheduleCategory$data = ScheduleCategory_scheduleCategory;
export type ScheduleCategory_scheduleCategory$key = {
  +$data?: ScheduleCategory_scheduleCategory$data,
  +$fragmentRefs: ScheduleCategory_scheduleCategory$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ScheduleCategory_scheduleCategory",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "MenuCategory",
      "kind": "LinkedField",
      "name": "category",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "title",
          "storageKey": null
        }
      ],
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
          "name": "ScheduleItem_menuItem"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ScheduleCategory"
};
// prettier-ignore
(node/*: any*/).hash = 'e72aaf46dcf6e63ad0c03da6447f6357';

module.exports = node;
