/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ScheduleItem_scheduleItem$ref: FragmentReference;
declare export opaque type ScheduleItem_scheduleItem$fragmentType: ScheduleItem_scheduleItem$ref;
export type ScheduleItem_scheduleItem = {|
  +id: string,
  +title: string,
  +price: number,
  +$refType: ScheduleItem_scheduleItem$ref,
|};
export type ScheduleItem_scheduleItem$data = ScheduleItem_scheduleItem;
export type ScheduleItem_scheduleItem$key = {
  +$data?: ScheduleItem_scheduleItem$data,
  +$fragmentRefs: ScheduleItem_scheduleItem$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ScheduleItem_scheduleItem",
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
(node/*: any*/).hash = '72e35830a2db944f7409aac4085d13d8';

module.exports = node;
