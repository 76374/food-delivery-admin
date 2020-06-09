/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ScheduleCategory_scheduleCategory$ref = any;
export type MenuSchedulePageQueryVariables = {|
  date: any
|};
export type MenuSchedulePageQueryResponse = {|
  +menuSchedule: ?{|
    +id: string,
    +date: ?any,
    +categories: $ReadOnlyArray<?{|
      +$fragmentRefs: ScheduleCategory_scheduleCategory$ref
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
    categories {
      ...ScheduleCategory_scheduleCategory
    }
  }
}

fragment ScheduleCategory_scheduleCategory on ScheduleCategory {
  category {
    title
  }
  items {
    ...ScheduleItem_menuItem
  }
}

fragment ScheduleItem_menuItem on MenuItem {
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
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
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
            "concreteType": "ScheduleCategory",
            "kind": "LinkedField",
            "name": "categories",
            "plural": true,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ScheduleCategory_scheduleCategory"
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
            "concreteType": "ScheduleCategory",
            "kind": "LinkedField",
            "name": "categories",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "MenuCategory",
                "kind": "LinkedField",
                "name": "category",
                "plural": false,
                "selections": [
                  (v4/*: any*/)
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
                  (v2/*: any*/),
                  (v4/*: any*/),
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
    "text": "query MenuSchedulePageQuery(\n  $date: Date!\n) {\n  menuSchedule(date: $date) {\n    id\n    date\n    categories {\n      ...ScheduleCategory_scheduleCategory\n    }\n  }\n}\n\nfragment ScheduleCategory_scheduleCategory on ScheduleCategory {\n  category {\n    title\n  }\n  items {\n    ...ScheduleItem_menuItem\n  }\n}\n\nfragment ScheduleItem_menuItem on MenuItem {\n  id\n  title\n  price\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4e0f619497ec5c3cecb9b61ba6db8533';

module.exports = node;
