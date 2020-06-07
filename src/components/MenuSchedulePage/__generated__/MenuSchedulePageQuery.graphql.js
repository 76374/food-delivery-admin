/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ScheduleItem_scheduleItem$ref = any;
export type MenuSchedulePageQueryVariables = {|
  date: any
|};
export type MenuSchedulePageQueryResponse = {|
  +menuSchedule: ?{|
    +id: string,
    +date: ?any,
    +items: $ReadOnlyArray<?{|
      +$fragmentRefs: ScheduleItem_scheduleItem$ref
    |}>,
  |}
|};
export type MenuSchedulePageQuery = {|
  variables: MenuSchedulePageQueryVariables,
  response: MenuSchedulePageQueryResponse,
|};
*/


/*
query MenuSchedulePageQuery(
  $date: Date!
) {
  menuSchedule(date: $date) {
    id
    date
    items {
      ...ScheduleItem_scheduleItem
    }
  }
}

fragment ScheduleItem_scheduleItem on MenuItem {
  id
  title
  price
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "date",
    "type": "Date!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "date",
    "variableName": "date"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "date",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MenuSchedulePageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "MenuSchedule",
        "kind": "LinkedField",
        "name": "menuSchedule",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
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
                "name": "ScheduleItem_scheduleItem"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MenuSchedulePageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "MenuSchedule",
        "kind": "LinkedField",
        "name": "menuSchedule",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "MenuItem",
            "kind": "LinkedField",
            "name": "items",
            "plural": true,
            "selections": [
              (v2/*: any*/),
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
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "MenuSchedulePageQuery",
    "operationKind": "query",
    "text": "query MenuSchedulePageQuery(\n  $date: Date!\n) {\n  menuSchedule(date: $date) {\n    id\n    date\n    items {\n      ...ScheduleItem_scheduleItem\n    }\n  }\n}\n\nfragment ScheduleItem_scheduleItem on MenuItem {\n  id\n  title\n  price\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c24d96952162e75efe01fb302e803a56';

module.exports = node;
