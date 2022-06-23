import { $ } from "edgedb";
import * as _ from "../imports";
import type * as _std from "./std";
export type $LinkλShape = $.typeutil.flatten<_std.$Object_19e8423cd54d11ecade577dcb20c1c3eλShape & {
  "title": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "url": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
}>;
type $Link = $.ObjectType<"default::Link", $LinkλShape, null>;
const $Link = $.makeType<$Link>(_.spec, "4c88e5ec-ec32-11ec-b4a4-e7f8ea4da1e2", _.syntax.literal);

const Link: $.$expr_PathNode<$.TypeSet<$Link, $.Cardinality.Many>, null, true> = _.syntax.$PathNode($.$toSet($Link, $.Cardinality.Many), null, true);



export { $Link, Link };

type __defaultExports = {
  "Link": typeof Link
};
const __defaultExports: __defaultExports = {
  "Link": Link
};
export default __defaultExports;
